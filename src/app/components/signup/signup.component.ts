import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password1: ['', Validators.required],
        password2: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.signupForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.signup(this.f.username.value, this.f.email.value, this.f.password1.value, this.f.password2.value)
          .pipe(first())
          .subscribe(
              _ => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error.error.global;
                  this.loading = false;
              });
  }

}
