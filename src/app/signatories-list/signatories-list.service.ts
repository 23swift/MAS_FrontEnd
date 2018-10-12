import { Injectable } from '@angular/core';

@Injectable()
export class SignatoriesListService {

  constructor() { }

  getTableFields() {
    return ['Name', 'SigningAuthority', 'Position', 'ApplicableTo'];
  }

  get() {
    return [
      
    ];
  }
}
