import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/model/etudiant.model';
import { Admin } from 'src/app/model/admin.model';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';


declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accounTypes=[{'id':1,'name':'etudiant'},{'id':2,'name':'admin'}];
  etudiant:Etudiant;
  admin:Admin;
  registerForm:FormGroup;
  submitted=false;

  constructor(private form:FormBuilder,private router:Router) { }

  ngOnInit() {


    //---------------
    //      Jquery
    //---------------
    $(document).ready(() => {
      $('select').formSelect();
      $('.tooltipped').tooltip();
    });


    //----------------
    //  TypeScript
    //----------------
    this.registerForm=this.form.group({
      accounType:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(4)]],
      confirmPassword:[null,[Validators.required,Validators.minLength(4)]]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    });
  }



  //on submit
  onSubmit(){
    this.submitted=true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let connectedMan=this.registerForm.value.accounType;
    if(connectedMan=='admin'){
      console.log('admin connecte !');
    }
    else if(connectedMan=='etudiant'){
      console.log('etudiant connecte !');
    }
  }



}
