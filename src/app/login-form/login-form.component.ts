import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private toastr:ToastrService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username:new FormControl(),
      password:new FormControl() 
    })

  }

  onSubmit() {
    console.log('Form submitted',this.loginForm.value);
    this.toastr.success("Logged In Successfully")
  }

  reset(){
    this.loginForm.reset();
  }

}
