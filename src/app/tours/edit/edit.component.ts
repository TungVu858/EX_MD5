import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursService} from "../../service/tours.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tForm: FormGroup = new FormGroup({
    title : new FormControl(),
    price : new FormControl(),
    description : new FormControl(),
  });
  id: number =0;
  constructor(private toursService: ToursService,
              private activatedRoute: ActivatedRoute,private router : Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTours(this.id);
    });
  }

  ngOnInit() {
  }

  getTours(id: number) {
    return this.toursService.findById(id).subscribe(tours => {
      this.tForm= new FormGroup({
        name: new FormControl(tours.title),
        description : new FormControl(tours.description),
        price : new FormControl(tours.price)
      });
    });
  }

  update(id: number) {
    const tour = this.tForm.value;
    this.toursService.update(id, tour).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/list']);
    }, e => {
      console.log(e);
    });
  }

}
