import { Component } from '@angular/core';
import {PointForm} from '../point-form/point-form';
import {Graph} from '../graph/graph';
import {Table} from '../table/table';

@Component({
  selector: 'app-main-page',
  imports: [
    PointForm,
    Graph,
    Table
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
