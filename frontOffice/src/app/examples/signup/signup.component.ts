import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../components/_auth/authentication.service";
import {passwordMatchingValidator} from "./password.matching.validator";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    public registerForm!: FormGroup;
    constructor(private authService: AuthenticationService) { }

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            nickName: new FormControl('', [Validators.required, Validators.pattern(/\S/)]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            confirmPassword: new FormControl('', Validators.required)
        }, {validators: passwordMatchingValidator})
    }

    public registerFormControl() {
        return this.registerForm.controls;
    }

    public onSubmit() {
        this.authService.register({nickName: this.registerForm.get('nickName')!.value,
            password: this.registerForm!.get('password')!.value});
    }
}
