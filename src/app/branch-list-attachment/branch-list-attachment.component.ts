import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface BranchDisplayInfo {
  Id:number;
  BranchName: String;
  BranchCode: String;
  DBAName: String;


}
const ELEMENT_DATA: BranchDisplayInfo[] = [
  {Id:1,BranchName: 'Aldo', BranchCode: 'BR300', DBAName: 'AldoMegamall'},
  {Id:2,BranchName: 'Bench', BranchCode: 'BR300', DBAName: 'Bench'}
 
 ];
@Component({
  selector: 'app-branch-list-attachment',
  templateUrl: './branch-list-attachment.component.html',
  styleUrls: ['./branch-list-attachment.component.css']
})
export class BranchListAttachmentComponent implements OnInit {
 
  displayedColumns: string[] = ['BranchName', 'BranchCode', 'DBAName', 'Attachment'];
  dataSource = ELEMENT_DATA;
 
  constructor(
    public route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {

  }
  private getItem(Id){
    // this.router.navigateByUrl('OIF/'+Id);
    // this.router.navigate([{outlets: {branchOIF: 'OIF/'+Id}}]);
    this.router.navigate([{outlets: {primary:'',branchOIF: 'OIF'}}]);
  }
}
