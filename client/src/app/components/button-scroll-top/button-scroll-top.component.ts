import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-button-scroll-top',
  templateUrl: './button-scroll-top.component.html',
  styleUrls: ['./button-scroll-top.component.scss']

})
export class ButtonScrollTopComponent implements OnInit {

  scrollDistance = 200;
  isVisible = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId, public scrollService: ScrollService) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  ngOnInit() {
  }


  moveTop(){
    this.scrollService.scrollToTop();
  }

@HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.isBrowser) {
            this.isVisible = this.getCurrentScrollTop() > this.scrollDistance ? true : false;
        }
    }

    getCurrentScrollTop() {
      if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
          return window.scrollY;
      }

      if (typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0) {
          return window.pageYOffset;
      }

      if (typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0) {
          return document.body.scrollTop;
      }

      if (typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0) {
          return document.documentElement.scrollTop;
      }

      return 0;
  }

}
