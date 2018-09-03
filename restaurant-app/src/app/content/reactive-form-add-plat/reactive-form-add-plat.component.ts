import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatService } from '../../service/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form-add-plat',
  templateUrl: './reactive-form-add-plat.component.html',
  styleUrls: ['./reactive-form-add-plat.component.css']
})
export class ReactiveFormAddPlatComponent implements OnInit {

  platForm = this.fb.group({
    nom : ['', Validators.required],
    description: [''],
    prix: ['', Validators.required],
    image: ['']
  })

  constructor(private platService : PlatService, private fb: FormBuilder, private router : Router) { }


  ngOnInit() {
  }

  onSubmit(){
    this.platService.addPlat(this.platForm.value);
    this.platService.plats.subscribe(v => this.router.navigate(['']));
  }
}
