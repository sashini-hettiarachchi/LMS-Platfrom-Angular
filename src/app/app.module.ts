import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lessons/lesson/lesson.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentComponent } from './assignments/assignment/assignment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lessons/lesson',      component: LessonComponent },
  { path: 'assignments',      component: AssignmentsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    SidebarComponent,
    LessonsComponent,
    LessonComponent,
    AssignmentsComponent,
    AssignmentComponent,
    PagenotfoundComponent,
    HomeComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
