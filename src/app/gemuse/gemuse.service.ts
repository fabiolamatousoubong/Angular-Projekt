import { Injectable } from '@angular/core';
import { Gemuse } from './gemuse';
import { GEMUSE } from './mock-gemuse-list';

@Injectable()
export class GemuseService {

  getGemuseList(): Gemuse[]{
    return GEMUSE;
  }

  getGemuseById(gemuseId: number):  Gemuse | undefined{
    return GEMUSE.find(gemuse => gemuse.id == gemuseId);

  }

   getGemuseTypeList(): string[]{ //je nai pas encore specifie le type de mes legume
    return[];
 }
}