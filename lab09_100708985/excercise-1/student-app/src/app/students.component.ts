import {Component} from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }}</h2><h2>{{ getCurrentDate() }}</h2>'
})



export class StudentsComponent {
    title= "My List of Students";
    date: Date = new Date();
    dateAsString?: string;

    constructor(private datePipe: DatePipe) {
        this.dateAsString = "";
       }
  
    
    getTitle(){
        return this.title;
    }

    
    getCurrentDate(){
        this.date = new Date();
        this.dateAsString = this.datePipe.transform(this.date, 'short') ?? '';
        return (`Date : ${this.dateAsString}`);
      }

}