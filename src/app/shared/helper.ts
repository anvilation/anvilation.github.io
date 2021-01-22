import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperMethods {
  constructor(private router: Router) { }

  clickToElementOnHome(command: string, to: string) {
    this.router.navigate([command], { fragment: to });
  }

  doScrolling(to: string) {
    try {
      document.querySelector(to).scrollIntoView({
        behavior: 'smooth'
      });
    } catch (error) {
      console.error('No CSS3');
    }
  }
}
