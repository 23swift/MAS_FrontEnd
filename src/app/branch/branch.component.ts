import { Component, OnInit } from '@angular/core';
import { AppBaseComponent } from '../app-base/app-base.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent extends AppBaseComponent implements OnInit {
  
  constructor(public route: ActivatedRoute,
    public router: Router) {
      super(route,router);

     }

  ngOnInit() {
    this.title='Branch';
    // this.baseCreateFunction=this.create;
    // this.baseUpdateFunction=this.update;
   
    this.initialize();
  }
  public create(){
    alert('Create branch');
  }

  public update(){alert('Update Branch');
      alert(this.route.snapshot.paramMap.get('id'));
}
  
  public cancel(){
    this.router.navigateByUrl('/na/create');
  }

}
