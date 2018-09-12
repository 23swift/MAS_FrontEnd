import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-checklist-configuration',
  templateUrl: './document-checklist-configuration.component.html',
  styleUrls: ['./document-checklist-configuration.component.css']
})
export class DocumentChecklistConfigurationComponent implements OnInit {

  title: string;
  subTitle: string;
  mode: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Document CheckList Configuration';
    this.subTitle = 'Configure Document Checklist';
    this.mode = ' ';    
  }

}
