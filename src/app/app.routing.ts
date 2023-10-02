import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {TestCompComponent} from "./components/test-comp/test-comp.component";
import {ShowPartClientComponent} from "./components/show-part-client/show-part-client.component";
import {SigninComponent} from "./examples/signin/signin.component";

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'signin',           component: SigninComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'test', component: TestCompComponent },
    { path: 'part-client', component: ShowPartClientComponent },
    { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
