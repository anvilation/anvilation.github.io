import { Component, OnInit } from '@angular/core';
import { faPalette, faCogs, faCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  icons = {
    design: faPalette,
    integration: faCogs,
    code: faCode
  }
  constructor() { }

  ngOnInit(): void {
  }

}
