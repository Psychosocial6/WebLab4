import {ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-point-form',
  imports: [],
  templateUrl: './point-form.html',
  styleUrl: './point-form.css',
})
export class PointForm {
  formData = {
    xText: '',
    yText: '',
    rText: ''
  };

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  onSubmit() {
    this.http.post("")
  }
}
