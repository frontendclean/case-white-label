import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GtmService {
  constructor() {}

  public track(event_name: string, params: any): void {
    console.log('track:', { event_name, params });
  }
}
