import { Directive, ElementRef, HostListener, Input } from '@angular/core';


// la directive a ete cree pour ajouter une bordure de couleur
@Directive({
  selector: '[gemuseBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string ='#f5f5f5';
  private defauldColor: string ='#009688';
  private defauldHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defauldHeight);
   }

   @Input('gemuseBorderCard') borderColor: string; // alias (on peut nommer la propriete de la directive et lutiliser ailleur)
   @Input()gemuseBorderCard: string; //sans alias

   @HostListener('mouseenter') onMouseEnter(){  //lorquon met le cluseur
    this.setBorder(this.borderColor || '#009688');
   }
   //hostListener cest pour detecter les elements onMouseEnter et Leave

   @HostListener('mouseleave') onMouseLeave(){ //lorquon retire le cluseur sur notre image
    this.setBorder('#f5f5f5');
   }

  private setHeight(height: number){  //ici sa defini la taille
    this.el.nativeElement.style.height = height +  'px';
  }

  private setBorder(color: string){  // defini la couleur lorsquon pose le cluseur sur notre image
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

}
