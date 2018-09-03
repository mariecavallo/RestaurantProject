import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../model/Plat';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from '../../service/plat.service';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css']
})
export class PlatDetailComponent implements OnInit {

  plat : Plat

  constructor(private route : ActivatedRoute, private platService : PlatService, private router : Router) { }

  ngOnInit() {
      console.log(this.route.data);
      this.route.data.subscribe(v => {
        this.plat = v.plat;
      })
  }

  onDelete(){
    this.platService.deletePlat(this.plat.id);
    this.platService.plats.subscribe(v => this.router.navigate(['']));
  }

}
