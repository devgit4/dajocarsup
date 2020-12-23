import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dajocars';
  downScroll = 0;
  
  @HostListener('window:scroll', ['$event']) // for window scroll events

  onScroll(event) {
    let sc = event.target.scrollingElement.scrollTop;

    //console.log(event.path);
    if(sc == 0)
    {
      this.downScroll = 0;
    }
    else {
      this.downScroll = 1;
    }
    
  }
  
}

