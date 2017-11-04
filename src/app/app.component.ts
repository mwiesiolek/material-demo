import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;
  items = [
    {id: 1, title: 'item1'},
    {id: 2, title: 'item2'},
    {id: 3, title: 'item3'},
  ];
  color = 2;

  onChange($event) {
    console.log($event);
  }
}
