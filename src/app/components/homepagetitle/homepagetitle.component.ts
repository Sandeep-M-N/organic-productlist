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
export class HomepagetitleComponent {
  
}