import {ChangeDetectorRef, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PointService} from '../../../../services/point.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-point-form',
  imports: [FormsModule, NgIf],
  templateUrl: './point-form.html',
  styleUrl: './point-form.css',
})
export class PointForm {
  message = '';
  formData = {
    xText: '',
    yText: '',
    rText: ''
  };


  constructor(private http: HttpClient, private pointService: PointService, private cdr: ChangeDetectorRef) {}

  onSubmit() {
    const requestBody = {
      x: parseFloat(this.formData.xText),
      y: parseFloat(this.formData.yText),
      r: parseFloat(this.formData.rText)
    };

    this.http.post<any>("http://localhost:8080/backend/app/main/check", requestBody)
      .subscribe({
        next: (response) => {
          this.pointService.addPoint(response);
          this.message = '';
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err)
          this.message = 'Валидация не пройдена'
          this.cdr.detectChanges();
        }
      });
  }

  onDelete() {
    this.http.delete(
      "http://localhost:8080/backend/app/main/delete"
    ).subscribe({
      next: (response) => {
          this.pointService.clearPoints();
          console.log('Таблица очищена');
          this.message = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Ошибка очистки:', err);
        this.message = 'Ошибка очистки';
        this.cdr.detectChanges();
      }
    });
  }
}
