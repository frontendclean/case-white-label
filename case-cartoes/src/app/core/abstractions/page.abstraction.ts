import { Component, inject } from '@angular/core';
import { ToolsAbstractionComponent } from './tools.abstraction';
import { SeoService } from '../services/seo/seo.service';

@Component({
  selector: 'app-abstraction-page',
  template: '',
})
export abstract class PageAbstractionComponent extends ToolsAbstractionComponent {
  readonly seo_service = inject(SeoService);

  constructor() {
    super();
  }
}
