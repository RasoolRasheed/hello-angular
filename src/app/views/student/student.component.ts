import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from './common/local-storage/local-storage.service';
import { StudentService } from './student.service';

@Component({
  templateUrl: 'student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  loginForm   : FormGroup;
  alert:any;
  

  constructor(
    private studentService : StudentService,
    private localStorageService:LocalStorageService,
    private router:Router
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      'username'  : new FormControl(null,Validators.required),
      'password'  : new FormControl(null,Validators.required)
    });
  }

  //alert set
  setAlert(alertStatus:String, alertMessage:String): void{
    this.alert = {
      status : alertStatus,
      message : alertMessage
    }
  }

  loginSubmit()
{
  if(this.loginForm.valid){
    let newUserData={
      'username':this.loginForm.get('username').value,
      'password':this.loginForm.get('password').value
    }
    console.log(newUserData);
    
    this.studentService.authenticate(newUserData).subscribe(res => {
      console.log(res['code']);
      
      if(res['code']==0){
        this.setAlert('Warning',"Invalid Username");
      }else if(res['code']==200) {
        this.localStorageService.setToken(res['token']);//store token
        this.setAlert('Success', 'Login Success');
        setTimeout(() => { this.router.navigate(['/dashboard']) }, 500);
      }else{
        this.setAlert('Error', 'Something went wrong');
      }
    })
  }else{
    this.setAlert('Warning','Please fill required fields!');

  }
}
}
