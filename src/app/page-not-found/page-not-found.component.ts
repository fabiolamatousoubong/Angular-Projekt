import { Component} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <div class='center'>
        <img src="./assets/img/gemuse/6.jfif"/>
        <h1>Hey, diese Seite existiert nicht!</h1>
        <a routerLink="/gemuse" class="waves-effect waves-teal btn-flat">
          start Seite zurückgehen!
        </a>
      </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
