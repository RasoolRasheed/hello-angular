import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './views/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService  } from '../app/views/student/student.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LocalStorageService } from './views/student/common/local-storage/local-storage.service';
//import { AlertModule} from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,TooltipModule.forRoot(),
    NgbModule
  ],
  providers: [StudentService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
