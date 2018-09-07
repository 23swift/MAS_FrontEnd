import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-checklist-maintenance',
  templateUrl: './document-checklist-maintenance.component.html',
  styleUrls: ['./document-checklist-maintenance.component.css']
})
export class DocumentChecklistMaintenanceComponent implements OnInit {
  title: string;
  subTitle: string;
  mode: string;
  
  constructor() { }

  ngOnInit() {
    this.title = 'Document CheckList Maintenance';
    this.subTitle = 'Maintenance for Documents';
    this.mode = ' ';    
  }

}
