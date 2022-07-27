import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursService} from "../../service/tours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tForm : FormGroup = new FormGroup({
    title : new FormControl(),
    price : new FormControl(),
    description : new FormControl()
  })

  add(){
    const t = this.tForm.value;
    this.toursService.save(t).subscribe(() => {
      this.tForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
    this.router.navigate(['/']);
  }
  constructor(private toursService : ToursService,private router : Router) { }

  ngOnInit(): void {
  }

}
