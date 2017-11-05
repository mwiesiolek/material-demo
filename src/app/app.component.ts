import { Component } from '@angular/core';
import {MatDialog} from "@angular/material";
import {EditCourseComponent} from "./edit-course/edit-course.component";

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
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1)

  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'},
  ];

  progress = 0;
  timer;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress += 10;
      if(this.progress == 100) clearInterval(this.timer);
    }, 500);
  }

  onChange($event) {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  openDialog() {
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(r => { console.log(r); });
  }
}
