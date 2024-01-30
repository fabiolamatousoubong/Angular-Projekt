import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,} from '@angular/router';
import { Gemuse } from '../gemuse';
import { GemuseService } from '../gemuse.service';


@Component({
  selector: 'app-detail-gemuse',
  templateUrl: 'detail-gemuse.component.html' ,
  styleUrls: ['detail-gemuse.component.css'],
})
export class DetailGemuseComponent implements OnInit {

  gemuseList: Gemuse[];
  gemuse: Gemuse | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private gemuseService: GemuseService) { }

  ngOnInit(){
  
    const gemuseId: string|null = this.route.snapshot.paramMap.get('id');
    if(gemuseId){

      this.gemuse=  this.gemuseService.getGemuseById(+gemuseId);

    }else{
      this.gemuse = undefined;
    }
    

    }
    goToGemuseList() {
      this.router.navigate(['/gemuse']);
    
  }
  goToEditGemuse(gemuse: Gemuse){
    this.router.navigate(['/edit/gemuse', gemuse.id]);
  }

}
