import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'virtualScrolling';

  sujets = [];
  ngOnInit() { for (let index = 0; index <3000; index++) {
   this.sujets.push(`ceci est le sujet ${index}̀̀`);
  }


  }
}
