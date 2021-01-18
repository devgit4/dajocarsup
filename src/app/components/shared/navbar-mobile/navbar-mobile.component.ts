import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {
  downScroll = 0;
  constructor() { }
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  
  onScroll(event) {
    let sc = event.target.scrollingElement.scrollTop;
    console.log(sc);
    if(sc == 0)
    {
      this.downScroll = 0;
    }
    else {
      this.downScroll = 1;
    }
    
  }

}
