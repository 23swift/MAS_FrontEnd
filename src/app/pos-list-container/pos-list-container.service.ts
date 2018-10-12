import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class PosListContainerService {

  constructor() { }

  getFormlyFields() : FormlyFieldConfig[] {
    return [];
  }
}
