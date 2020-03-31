import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'date-picker-repo';
  dpConfigDate = { format: 'YYYY/MM/DD' };
  startDate = moment().subtract(6, 'months');
}
