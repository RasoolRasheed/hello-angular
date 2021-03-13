import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { StudentComponent } from './views/student/student.component';


export const routes: Routes = [
  { 
    path:'',
    component:StudentComponent,
    data:{ 
      
    }
  },
    { 
      path:'dashboard',
      component:DashboardComponent,
      data:{ 
        
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
