import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = '';
@Injectable()
export class AoCheckerService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(apiUrl);
  }

  get(id) {
    return this._http.get(apiUrl + id);
  }

  create(): void {
    this._http.post(apiUrl, {});
  }

  update(): void {
    this._http.put(apiUrl, {});
  }
}
