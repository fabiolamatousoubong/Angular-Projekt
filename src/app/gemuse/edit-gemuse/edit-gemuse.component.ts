import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gemuse } from '../gemuse';
import { GemuseService } from '../gemuse.service';

@Component({
  selector: 'app-edit-gemuse',
  template: `
<h2>Update{{gemuse?.name}}</h2>
<p *ngIf="gemuse"class="center"><img [src]="gemuse.picture"/></p>
<app-gemuse-form *ngIf="gemuse" [gemuse]="gemuse"></app-gemuse-form>
  `,
  styles: [
  ]
})
export class EditGemuseComponent implements OnInit {

  gemuse: Gemuse |undefined;
  constructor(
    private route: ActivatedRoute,
    private gemuseservice: GemuseService
  ) { }

  ngOnInit() {
    const gemuseId: string | null = this.route.snapshot.paramMap.get('id');
    if(gemuseId){
      this.gemuse = this.gemuseservice.getGemuseById(+gemuseId);
    }else{
      this.gemuse = undefined;
    }
  }

}
