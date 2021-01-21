import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild(HomeComponent) home:HomeComponent;
  //@ViewChild('myDiv', { static: false }) myDiv: ElementRef;

  
  downScroll = 0;
  constructor() { }
  
  ngOnInit(): void {
  //  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  
  onScroll(event) {
    let sc = event.target.scrollingElement.scrollTop;
   // console.log(sc);
    if(sc == 0)
    {
      this.downScroll = 0;
    }
    else {
      this.downScroll = 1;
    }
    
  }



  scrollToElement($element){
    console.log($element);
    
    this.home.scrollToElement($element);
  }

  // scrollToElement($element) {
  //   const element = document.querySelector(selector)
  //   console.log('AQUI: ' + element);
    
  //   element ? element.scrollIntoView({behavior: "smooth"}): null;


  //   element.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //         const tree = element.parseUrl(element.url);
  //         if (tree.fragment) {
  //             const element = document.querySelector('#' + tree.fragment);
  //             if (element) {
  //                 setTimeout(() => {
  //                     element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  //                 }, 500 );
  //             }
  //         }
  //      }
  // });

  // }
 

  // scrollToElement($element): void {

  //   element=document.querySelector('#target'); element.scrollIntoView({ behavior: 'smooth', block: 'start' });


  //   console.log($element);
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  //   $element.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //         const tree = $element.parseUrl($element.url);
  //         if (tree.fragment) {
  //             const element = document.querySelector('#' + tree.fragment);
  //             if (element) {
  //                 setTimeout(() => {
  //                     element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  //                 }, 500 );
  //             }
  //         }
  //      }
  // });
  // }

 

}

