import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tableRows=[];
  closeResult = '';

  constructor(
    private dashboardService :DashboardService,
    private router:Router,
    private modalService:NgbModal
  ) { }

  ngOnInit() {
    this.tableDataLoad();
  }

  tableDataLoad(){
    this.dashboardService.getAll().subscribe((response:any) => {
    this.tableRows=[];
    this.tableRows = response;

  });
  }
  // logout
  redirect(){
    this.router.navigate(['./'])
  }
  //Modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'Modify data'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
