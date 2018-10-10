import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface BranchDisplayInfo {
  Id: number;
  BranchName: String;
  BranchCode: String;
  DBAName: String;


}
const ELEMENT_DATA: BranchDisplayInfo[] = [
  { Id: 1, BranchName: 'Aldo', BranchCode: 'BR300', DBAName: 'AldoMegamall' },
  { Id: 2, BranchName: 'Bench', BranchCode: 'BR300', DBAName: 'Bench' }

];

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  displayedColumns: string[] = ['BranchName', 'BranchCode', 'DBAName', 'Attachment'];
  dataSource = ELEMENT_DATA;

  mode: string;
  @Input() detailsRoute: string;
  outlet: string;
  constructor(
    public route: ActivatedRoute,
    public router: Router

  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { detailsRoute: string }) => {
        this.detailsRoute = data.detailsRoute;
        this.outlet = this.route.outlet;
      });

    this.mode = this.route.snapshot.paramMap.get('mode');
  }

  private getItem(Id) {

    // this.router.navigateByUrl(this.detailsRoute+"/"+Id);
    this.router.navigate([{ outlets: { branch: ["branch", 'update', Id] } }]);
    // 'branch/update/'
  }

}
