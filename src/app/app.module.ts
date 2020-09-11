import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { PocRegisterComponent } from './poc-register/poc-register.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { ContactComponent } from './contact/contact.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { UpdateTutorComponent } from './update-tutor/update-tutor.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { BookSeatsComponent } from './book-seats/book-seats.component';
import { VideoComponent } from './video/video.component';
import { CommonService } from './common.service';
import { DisplayAllComponent } from './display-all/display-all.component';
import { UpdatePocComponent } from './update-poc/update-poc.component';
import { DisplayMyCartComponent } from './display-my-cart/display-my-cart.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CheckComponent } from './check/check.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatService } from './chat.service';
import { SafehtmlPipe } from './safehtml.pipe';



const appRoot: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tutorProfile', component: TutorProfileComponent},
  {path: 'updateTutor',component: UpdateTutorComponent},
  {path: 'createSession',component: CreateSessionComponent},
  {path: 'updateSession',component: UpdateSessionComponent},
  {path: 'bookSeats',component: BookSeatsComponent},
  {path: 'updatePoc', component: UpdatePocComponent},
  {path: 'displayAll',component: DisplayAllComponent},
  {path:'displayMyCart',component: DisplayMyCartComponent},
  {path: 'pocRegister',component: PocRegisterComponent},
  {path: 'tutorRegister',component: TutorRegisterComponent},
  {path: 'enrollmentList', component:EnrollmentListComponent},
  {path: 'contactus', component:ContactComponent},
  {path: 'video', component:VideoComponent},
  {path: 'certificate', component:CertificateComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'check',component:CheckComponent},
  {path: 'news',component:NewsComponent},
  {path: 'about',component:AboutComponent},
  {path: 'tutorList',component:TutorListComponent},
  {path: 'coursesList',component:CoursesListComponent},
  {path: 'chatbot',component:ChatbotComponent}
];

 /*
 {path: 'forgot',component: ForgotComponent},
 {path: 'check',component: CheckComponent},

];*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TutorRegisterComponent,
    PocRegisterComponent,
    TutorProfileComponent,
    ContactComponent,
    CreateSessionComponent,
    UpdateTutorComponent,
    UpdateSessionComponent,
    BookSeatsComponent,
    VideoComponent,
    DisplayAllComponent,
    UpdatePocComponent,
    DisplayMyCartComponent,
    EnrollmentListComponent,
    CertificateComponent,
    ForgotComponent,
    CheckComponent,
    NewsComponent,
    AboutComponent,
    CoursesListComponent,
    TutorListComponent,
    ChatbotComponent,
    SafehtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoot),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [CommonService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
