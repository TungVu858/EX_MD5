import { Component, OnInit } from '@angular/core';
import {Tours} from "../../model/tours";
import {ToursService} from "../../service/tours.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tours: Tours[] = [];
  constructor(private toursService : ToursService) {

  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.toursService.getAll().subscribe(tours => {
      this.tours = tours;
    });
  }

}
