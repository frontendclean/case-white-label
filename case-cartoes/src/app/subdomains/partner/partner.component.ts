import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageAbstractionComponent } from '../../core/abstractions/page.abstraction';

@Component({
  selector: 'app-subdomains-partner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent
  extends PageAbstractionComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
