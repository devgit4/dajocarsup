import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  downScroll = 0;
  activegarantia = 0;
  activatetodoterreno = 0;
  activatetextoblack = 0;
  activateac1 = 0;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events

  onScrollH(event) {
    let sc = event.target.scrollingElement.scrollTop;

    console.log('OK:' + sc);

    if(sc == 0)
    {
      this.downScroll = 0;
    }
    if (sc > 350)
    {
      this.activegarantia = 1;      
    }
    if (sc > 720)
    {
      this.activatetodoterreno = 1;      
    }
    if (sc > 1000)
    {
      this.activatetextoblack = 1;      
    }
    if (sc > 1550)
    {
      this.activateac1 = 1;      
    }
    else {
      this.downScroll = 1;
    }
    
  }
  

}
