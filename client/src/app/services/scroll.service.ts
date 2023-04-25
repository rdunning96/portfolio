
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import * as smoothscroll from 'smoothscroll-polyfill';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
    private isBrowser: boolean;

    constructor(@Inject(DOCUMENT) private document: any, @Inject(PLATFORM_ID) platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
          smoothscroll.polyfill();
        }
      }

    navigationInternalScroll(value:string){
        if (this.isBrowser) {
            var element = document.querySelector(value);
            element.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    }

    scrollToTop() {
        if (this.isBrowser) {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
    }
}

