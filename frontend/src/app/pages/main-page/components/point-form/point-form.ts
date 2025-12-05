import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PointService} from '../../../../services/point.service';

@Component({
  selector: 'app-point-form',
  imports: [FormsModule],
  templateUrl: './point-form.html',
  styleUrl: './point-form.css',
})
export class PointForm {
  formData = {
    xText: '',
    yText: '',
    rText: ''
  };


  constructor(private http: HttpClient, private pointService: PointService) {}

  onSubmit() {
    const requestBody = {
      x: parseFloat(this.formData.xText),
      y: parseFloat(this.formData.yText),
      r: parseFloat(this.formData.rText)
    };


    if (isNaN(requestBody.x) || isNaN(requestBody.y) || isNaN(requestBody.r)) {
      alert('Пожалуйста, введите корректные числа');
      return;
    }

    this.http.post<any>("http://localhost:8080/backend/app/main/check", requestBody)
      .subscribe({
        next: (response) => {
          this.pointService.addPoint(response);
        },
        error: (err) => console.error(err)
      });
  }
}
