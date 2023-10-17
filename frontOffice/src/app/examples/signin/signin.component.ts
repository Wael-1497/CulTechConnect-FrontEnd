import { Component, OnInit } from '@angular/core';
import { JwtService} from "../../service/jwt.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  loginForm: FormGroup | undefined;

  constructor(
      private service: JwtService,
      private fb: FormBuilder,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          if (response.jwt != null) {
            const jwtToken = response.jwt;
            localStorage.setItem('jwt', jwtToken);
            this.router.navigate(['/up-part']);

            //redirect to other route




          }else{
            alert("Email ou mot de passe incorrect");
          }
        }
    )
    this.router.navigate(['/up-part']);

  }

}
