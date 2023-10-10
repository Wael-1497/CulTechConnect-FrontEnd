import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ShowPartComponent } from './show-part/show-part.component';
import { ShowOnePartComponent } from './show-one-part/show-one-part.component';
import { UpdatePartComponent } from './update-part/update-part.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EventmanagementComponent } from './eventmanagement/eventmanagement.component';
import { EventManagementComponent } from './event-management/event-management.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ShowPartComponent,
    ShowOnePartComponent,
    UpdatePartComponent,
    EventmanagementComponent,
    EventManagementComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
