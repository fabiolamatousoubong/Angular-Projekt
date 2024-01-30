import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gemuse } from '../gemuse';
import { GemuseService } from '../gemuse.service';

@Component({
  selector: 'app-gemuse-form',
  templateUrl: './gemuse-form.component.html',
  styleUrls: ['./gemuse-form.component.css'],
})
export class GemuseFormComponent implements OnInit {
  @Input() gemuse: Gemuse;
  types: string[];
  

  constructor(
    private gemuseService: GemuseService,
    private router: Router ) { }

  ngOnInit() {
    //gemuseList
    this.types = this.gemuseService.getGemuseTypeList();
  }
//verifier si le gemuse passer en possession deditation possede le type passe en parametre
// hasType(){

// }

// selectType(){}

onSubmit(){//lorsque lutilsateur soumet le formulaire
console.log('Submit form!');
this.router.navigate(['/gemuse', this.gemuse.id]);
}

}
