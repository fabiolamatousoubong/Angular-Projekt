import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gemuse } from '../gemuse/gemuse';
import { GemuseService } from '../gemuse/gemuse.service';


@Component({
  selector: 'app-list-gemuse',
  templateUrl: 'list-gemuse.component.html' ,
  styleUrls: ['list-gemuse.component.css'],
 
})
export class ListGemuseComponent implements OnInit {

  gemuseList : Gemuse[]

  constructor(
    private router: Router,
    private gemuseService: GemuseService) {

   }
   ngOnInit(){
    this.gemuseList = this.gemuseService.getGemuseList();
   }

 goToGemuse(gemuse: Gemuse) {
  this.router.navigate(['/gemuse', gemuse.id]);
 }
}
