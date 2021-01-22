import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faLinkedin, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faQuestion, faCogs, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { HelperMethods } from '../helper'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  icons = {
    github: faGithub,
    design: faQuestion,
    extend: faBolt,
    integration: faCogs,
    support: faCheckCircle,
    twitter: faTwitter,
    linkedin: faLinkedin,
    medium: faMediumM
  }
  currentRoute$: any;
  private element: any;
  landing: boolean;


  constructor(private router: Router, private helper: HelperMethods,    private el: ElementRef) { 

  }

  ngOnInit(): void {
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className !== 'navbar-burger burger is-active') {
        const menu = document.querySelector('.navbar-menu');
        const toggle = document.querySelector('.navbar-burger');
        toggle.classList.remove('is-active');
        menu.classList.remove('is-active');
      }
    });
  }

  showMenu() {
    const toggle = document.querySelector('.navbar-burger'); // Using a class instead, see note below.
    const menu = document.querySelector('.navbar-menu'); // Using a class instead, see note below.
    toggle.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  scrolltotop() {
    this.helper.doScrolling('#top');
  }



}
