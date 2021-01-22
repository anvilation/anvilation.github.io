import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  icons = {
    github:faGithub,
    twitter: faTwitter,
    linkedin: faLinkedin,
    medium: faMediumM
  }
  constructor() { }

  ngOnInit(): void {
  }

  
}
