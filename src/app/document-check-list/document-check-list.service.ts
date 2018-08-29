import { Injectable } from '@angular/core';

export interface DocumentDisplayInfo {
  Id: number;
  DocumentName: String;
  Remarks: String;
  DateSubmitted: String;
  FileUpload: String;
}

const TEST_DATA: DocumentDisplayInfo[] = [
  { Id: 1, DocumentName: 'BDO\'s Merchant Information Sheet (MIS)', Remarks: 'The file is complete', DateSubmitted: '08/29/2018', FileUpload: '' },
  { Id: 2, DocumentName: 'BDO\'s Ocular Inspection Form (OIF)', Remarks: 'The file is complete', DateSubmitted: '08/29/2018', FileUpload: '' }
];

@Injectable()
export class DocumentCheckListService {

  constructor() { }

  Get(){
    return TEST_DATA;
  }
  GetById(){}
  GetTableFields(){
    return ['DocumentName', 'Remarks', 'DateSubmitted', 'FileUpload', 'Action'];
  }
}
