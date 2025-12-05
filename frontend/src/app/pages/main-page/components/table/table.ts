import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import {PointService} from '../../../../services/point.service';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit, OnDestroy {
  rows: any[] = [];
  private subscription!: Subscription;

  constructor(private pointService: PointService) {}

  ngOnInit() {
    this.subscription = this.pointService.pointAdded$.subscribe((newPoint) => {
      this.addRow(newPoint);
    });
  }

  addRow(data: any) {
    const newRow = {
      id: this.rows.length + 1,
      x: data.x,
      y: data.y,
      r: data.r,
      result: data.result ? 'Попадание' : 'Промах',
      requestTime: data.requestTime,
      localTime: new Date().toLocaleTimeString()
    };
    this.rows.push(newRow);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
