import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public request(
    method: 'get' | 'post',
    url: string,
    params: any
  ): Observable<any> {
    switch (method) {
      case 'get':
        let httpParams = new HttpParams();

        if (params) {
          Object.keys(params).forEach((key) => {
            httpParams = httpParams.set(key, params[key]);
          });
        }

        return this.http.get(url, { params: httpParams });

      case 'post':
        return this.http.post(url, params);

      default:
        throw new Error(`Método ${method} não suportado.`);
    }
  }
}
