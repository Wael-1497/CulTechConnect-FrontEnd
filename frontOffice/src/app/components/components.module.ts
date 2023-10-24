import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import {TestCompComponent} from "./test-comp/test-comp.component";
import { ShowPartClientComponent } from './show-part-client/show-part-client.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { EventmanagementComponent } from './eventmanagement/eventmanagement.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { DemoComponent } from './demo/demo.component';
import { ChatHolderComponent } from './chat-holder/chat-holder.component';
import { ChatsComponent } from './chats/chats.component';
import { MessagesComponent } from './messages/messages.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule,
        MatIconModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        TestCompComponent,
        NgbdModalComponent,
        NgbdModalContent,
        ShowPartClientComponent,
        BlogComponent,
        EventComponent,
        EventmanagementComponent,
        CustomerSupportComponent,
        DemoComponent,
        ChatHolderComponent,
        ChatsComponent,
        MessagesComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
