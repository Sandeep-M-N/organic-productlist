import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-homepagetitle',
  templateUrl: './homepagetitle.component.html',
  styleUrl: './homepagetitle.component.css'
})
export class HomepagetitleComponent implements AfterViewInit {


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)){
      gsap.from(".letter", {rotationY: 36, opacity:0, duration: 0.8, yPercent: -100, stagger: 0.1, ease:"expo.out"})
    }
  }

}