import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { GtmService } from '../services/gtm/gtm.service';

@Component({
  selector: 'app-abstraction-tools',
  template: '',
})
export abstract class ToolsAbstractionComponent {
  readonly http_service = inject(HttpService);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly gtm_service = inject(GtmService);
  readonly manifest: any;
  is_loading = signal(true);

  constructor() {}

  public redirect(url: string) {
    this.router.navigate([url]);
  }
}
