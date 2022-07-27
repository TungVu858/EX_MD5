import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToursService} from "../../service/tours.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  tour: any;

  constructor(private toursService:ToursService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })


  }

  findById(id: any) {
    this.toursService.findById(id).subscribe((data) => {
      console.log(data);
      this.tour = data
    })
  }

}
