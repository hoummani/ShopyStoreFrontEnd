import { Admin } from './../../model/admin.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accounTypes=[{'id':1,'name':'etudiant'},{'id':2,'name':'admin'}];
  etudiant:Etudiant;
  admin:Admin;
  loginForm:FormGroup;
  submitted=false;


  constructor(private form:FormBuilder,private router:Router) { }

  ngOnInit() {
    //JQuery
    $(document).ready(() => {
      $('select').formSelect();
      $('.tooltipped').tooltip();
    });
    //TypeScript
    this.loginForm=this.form.group({
      accounType:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(4)]]
    });
  }


  get f() { return this.loginForm.controls; }


  onSubmit(){

    this.submitted=true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    let connectedMan=this.loginForm.value.accounType;
    if(connectedMan=='admin'){
      console.log('admin connecte !');
    }
    else if(connectedMan=='etudiant'){
      console.log('etudiant connecte !');
    }

  }

}
