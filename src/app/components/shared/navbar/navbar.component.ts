import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
