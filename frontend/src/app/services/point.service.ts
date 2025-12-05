import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  private pointSubject = new Subject<any>();

  pointAdded$ = this.pointSubject.asObservable();

  addPoint(pointData: any) {
    this.pointSubject.next(pointData);
  }
}
