import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageAbstractionComponent } from '../../core/abstractions/page.abstraction';

@Component({
  selector: 'app-subdomains-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent
  extends PageAbstractionComponent
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
