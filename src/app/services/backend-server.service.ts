import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServerService {

  constructor(
    private _http: HttpClient
  ) { }
  invoke(method: string, url: string, options = {}) {
    return this._http.request(method, url, options);
  }
}
