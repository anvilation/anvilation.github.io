import { Component, OnInit } from '@angular/core';
import { faPalette, faCodeBranch, faCode, faGlasses } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  icons = {
    design: faPalette,
    integration: faCodeBranch,
    code: faCode,
    businessprocess: faGlasses
  }
  constructor() { }

  ngOnInit(): void {
  }

}
