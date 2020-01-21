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
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionComponent } from './discussions/discussion/discussion.component';
import { ProgressComponent } from './progress/progress.component';
import { CalenderComponent } from './calender/calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule} from '@angular/forms';
import { AnswersComponent } from './discussions/discussion/answers/answers.component';
import { AnswerComponent } from './discussions/discussion/answers/answer/answer.component';
import { AddAnswerComponent } from './discussions/discussion/add-answer/add-answer.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lessons/lesson',      component: LessonComponent },
  { path: 'assignments',      component: AssignmentsComponent },
  { path: 'resources',      component: ResourcesComponent },
  { path: 'discussions',      component: DiscussionsComponent },
  { path: 'progress',      component: ProgressComponent},
  { path: 'calendar',      component: CalenderComponent },
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
    ResourcesComponent,
    ResourceComponent,
    DiscussionsComponent,
    DiscussionComponent,
    ProgressComponent,
    CalenderComponent,
    AnswersComponent,
    AnswerComponent,
    AddAnswerComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
