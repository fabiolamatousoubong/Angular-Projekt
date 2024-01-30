import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGemuseComponent } from '../list-gemuse/list-gemuse.component';
import { DetailGemuseComponent } from './detail-gemuse/detail-gemuse.component';
import { BorderCardDirective } from './border-card.directive';
import { GemuseTypeColorPipe } from './gemuse-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { GemuseService } from './gemuse.service';
import { FormsModule } from '@angular/forms';
import { GemuseFormComponent } from './gemuse-form/gemuse-form.component';
import { EditGemuseComponent } from './edit-gemuse/edit-gemuse.component';
import { AuthGuard } from '../auth.guard';



const gemuseRoutes: Routes = [
  {path: 'edit/gemuse/id', component: EditGemuseComponent, canActivate:[AuthGuard] },
  {path: 'gemuse', component: ListGemuseComponent, canActivate:[AuthGuard] },
  {path: 'gemuse/:id', component: DetailGemuseComponent, canActivate:[AuthGuard]  },

];


@NgModule({
  declarations: [
    ListGemuseComponent,
    DetailGemuseComponent,
    BorderCardDirective,
    GemuseTypeColorPipe,
    GemuseFormComponent,
    EditGemuseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(gemuseRoutes)
  ],
  providers: [GemuseService]
})
export class GemuseModule { }
