import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursService} from "../../service/tours.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  tForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category : new FormControl(),
  });
  id: number = 0;
  constructor(private toursService: ToursService,private active : ActivatedRoute,private router : Router) {
    this.active.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id");
      this.getTour(this.id);
    });
  }

  getTour(id: number) {
    return this.toursService.findById(id).subscribe(t => {
      this.tForm = new FormGroup({
        title: new FormControl(t.title),
        price: new FormControl(t.price),
        description: new FormControl(t.description),
      });
    });

  }

  delete(id: number) {
    this.toursService.delete(id).subscribe(() => {
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }
  ngOnInit(): void {
  }

}
