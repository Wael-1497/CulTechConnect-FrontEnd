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
import {BlogComponent} from "./components/blog/blog.component";
import {EventComponent} from "./components/event/event.component";
import {EventmanagementComponent} from "./components/eventmanagement/eventmanagement.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CancelComponent} from "./cancel/cancel.component";
import {SuccessComponent} from "./success/success.component";
import {CustomerSupportComponent} from "./components/customer-support/customer-support.component";
import {DemoComponent} from "./components/demo/demo.component";
import {ChatHolderComponent} from "./components/chat-holder/chat-holder.component";
import {AuthGuard} from "./components/_auth/auth.guard";

const routes: Routes =[
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'test', component: TestCompComponent },
    { path: 'part-client', component: ShowPartClientComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'event', component: EventComponent },
    { path: 'eventmanagement', component: EventmanagementComponent },
    { path: 'checkout',  component: CheckoutComponent },
    { path: 'cancel', component: CancelComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'bot', component: CustomerSupportComponent  },
    { path: 'demo', component: DemoComponent  },
    // { path: 'chats', component: ChatHolderComponent, canActivate: [AuthGuard] },
    { path: 'chats', component: ChatHolderComponent, },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },

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
