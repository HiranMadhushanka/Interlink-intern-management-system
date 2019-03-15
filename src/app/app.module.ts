import { RecomendserviceService } from './services/recomendservice.service';
import { ReadnoticeService } from './services/readnotice.service';
import { WritenoticeService } from './services/writenotice.service';
import { UsernameserviceService } from './services/usernameservice.service';
import { TechskillService } from './services/techskill.service';
import { ReadtechskillService } from './services/readtechskill.service';
import { ReadskillService } from './services/readskill.service';
import { SkillService } from './services/skill.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReadanswerService } from './services/readanswer.service';
import { WriteanswerService } from './services/writeanswer.service';
import { ReadquestionService } from './services/readquestion.service';
import { WritequestionService } from './services/writequestion.service';
import { NewsserviceService } from './services/newsservice.service';
import {DragDropModule} from '@angular/cdk/drag-drop';




import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomesettingsComponent } from './homesettings/homesettings.component';
import { HomepersonalComponent } from './homepersonal/homepersonal.component';
import { HomeactivitylogComponent } from './homeactivitylog/homeactivitylog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CurrentComponent } from './current/current.component';
import { HttpClientModule } from '@angular/common/http';
import {ReadDataServiceService} from './services/read-data-service.service';
import {ReadOneDataServiceService} from './services/read-one-data-service.service';
import {DeleteDataServiceService} from './services/delete-data-service.service';
import {student} from './services/ReadDataModel';
import {SendDataServiceService} from './services/send-data-service.service';
import {MyProfileComponent} from './myprofile/myprofile.component'
import { ParticlesModule } from 'angular-particle';
import {ProfileheaderComponent} from './profileheader/profileheader.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import {AngularFireModule} from 'angularfire2';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import {UpdateDataServiceService} from './services/update-data-service.service';
import { ChatComponent } from './chat/chat.component';
import {ToastrService} from './toastr.service'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StarRatingModule } from 'angular-star-rating';
import { Md5 } from 'ts-md5/dist/md5';
// MDB Angular Pro
import { ButtonsModule, WavesModule, DropdownModule ,CollapseModule} from 'angular-bootstrap-md'







//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminstatComponent } from './adminstat/adminstat.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { PutNoticeComponent } from './put-notice/put-notice.component';
import { FilesComponent } from './files/files.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { NotifiComponent } from './notifi/notifi.component';
import { ProjectsComponent } from './projects/projects.component';
import { SetprojectsComponent } from './setprojects/setprojects.component';
import { ReqAppointmentComponent } from './req-appointment/req-appointment.component';
import { NewsComponent } from './news/news.component';
import { QandAComponent } from './qand-a/qand-a.component';
import { ShowquestionComponent } from './showquestion/showquestion.component';
import { BackgroundComponent } from './background/background.component';
import { IntroComponent } from './intro/intro.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {RecommendComponent} from './recommend/recommend.component'
import {MatSidenavModule,MatButtonModule,MatIconModule,MatListModule,MatBadgeModule,MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { SideComponent } from './side/side.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { NavSupvComponent } from './nav-supv/nav-supv.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {AdminstnavComponent} from './adminstnav/adminstnav.component'
import {UpdatedetailsComponent} from './updatedetails/updatedetails.component'
import {SupstnavComponent} from './supstnav/supstnav.component';
import { PendingStudentComponent } from './pending-student/pending-student.component';
import { PasswordComponent } from './password/password.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { CheckpwkeyComponent } from './checkpwkey/checkpwkey.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MdbTableService} from './services/mdb-table.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomesettingsComponent,
    HomepersonalComponent,
    HomeactivitylogComponent,
    AboutComponent,
    ContactComponent,
    CurrentComponent,
    MyProfileComponent,
    ProfileheaderComponent,
    AdminviewComponent,
    FileuploaderComponent,
    EditDetailsComponent,
    ChatComponent,
    NavBarComponent,
    AdminstatComponent,
    NoticeboardComponent,
    PutNoticeComponent,
    FilesComponent,
    TechnologiesComponent,
    NotifiComponent,
    ProjectsComponent,
    SetprojectsComponent,
    ReqAppointmentComponent,
    NewsComponent,
    QandAComponent,
    ShowquestionComponent,
    BackgroundComponent,
    IntroComponent,
    SidenavComponent,
    SideComponent,
    WelcomeComponent,
    NavAdminComponent,
    NavSupvComponent,
    TodoListComponent,
    AdminstnavComponent,
    UpdatedetailsComponent,
    SupstnavComponent,
    RecommendComponent,
    PendingStudentComponent,
    PasswordComponent,
    ResetpwComponent,
    CheckpwkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    AngularFireModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    StarRatingModule.forRoot(),
    MDBBootstrapModule,
    MatSidenavModule,MatButtonModule,MatIconModule,MatListModule,MatCardModule,MatBadgeModule,
    MatMenuModule,CollapseModule,MatDialogModule

    
  ],
  providers: [SendDataServiceService,ReadDataServiceService,DeleteDataServiceService,ReadOneDataServiceService,ToastrService, [Md5],SkillService,ReadskillService,ReadtechskillService,TechskillService,UsernameserviceService,WritenoticeService,ReadnoticeService,,NewsserviceService,WritequestionService,ReadquestionService,WriteanswerService,ReadanswerService, RecomendserviceService,ButtonsModule, WavesModule, DropdownModule,MdbTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
