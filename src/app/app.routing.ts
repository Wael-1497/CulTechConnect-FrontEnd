import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {TestCompComponent} from "./components/test-comp/test-comp.component";
import {ShowPartClientComponent} from "./components/show-part-client/show-part-client.component";
import {SigninComponent} from "./examples/signin/signin.component";
import {ChatComponent} from "./components/chat/chat.component";
import {BlogComponent} from "./components/blog/blog.component";
import {EventComponent} from "./components/event/event.component";
import {EventmanagementComponent} from "./components/eventmanagement/eventmanagement.component";

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
    { path: 'chat', component: ChatComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'event', component: EventComponent },
    { path: 'eventmanagement', component: EventmanagementComponent }

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
