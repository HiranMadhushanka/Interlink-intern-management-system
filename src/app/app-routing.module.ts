import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { AdminstatComponent } from './adminstat/adminstat.component';
import {WelcomeComponent} from './welcome/welcome.component'
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {CurrentComponent} from './current/current.component';
import {MyProfileComponent} from './myprofile/myprofile.component';
import {HomesettingsComponent} from './homesettings/homesettings.component';
import {HomepersonalComponent} from './homepersonal/homepersonal.component';
import {HomeactivitylogComponent} from './homeactivitylog/homeactivitylog.component';
import {FileuploaderComponent} from './fileuploader/fileuploader.component'
import {SidenavComponent} from './sidenav/sidenav.component'
import {NewsComponent} from './news/news.component'
import {ShowquestionComponent} from './showquestion/showquestion.component'
import {IntroComponent} from './intro/intro.component'
import {SideComponent} from './side/side.component'
import {Routes,RouterModule} from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ChatComponent } from './chat/chat.component';
import {ProfileheaderComponent} from './profileheader/profileheader.component'
import { FilesComponent } from './files/files.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { Notification } from 'rxjs';
import { NotifiComponent } from './notifi/notifi.component';
import {AdminstnavComponent} from './adminstnav/adminstnav.component';
import {UpdatedetailsComponent} from './updatedetails/updatedetails.component'
import { SupstnavComponent } from './supstnav/supstnav.component';
import {RecommendComponent} from './recommend/recommend.component'
import {TodoListComponent} from './todo-list/todo-list.component'
import { PendingStudentComponent } from './pending-student/pending-student.component';
import { PasswordComponent } from './password/password.component';
import { ResetpwComponent } from './resetpw/resetpw.component';

const routes:Routes=[
  {
    path:'admin/1/adminstat',
    component:LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/current',
    component:CurrentComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/homesettings',
    component:HomesettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:email/homepersonal',
    component:HomepersonalComponent
  },
  {
    path:':type/:id/homeactivitylog',
    component:HomeactivitylogComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/myprofile',
    component:MyProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/adminview',
    component:AdminviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/chat/:senderId/file',
    component:FileuploaderComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/editdetails',
    component:EditDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/chat',
    component:ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/profileheader',
    component:ProfileheaderComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path:'noticeboard',
    component:NoticeboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/files',
    component:FilesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'student/:id/techno',
    component:TechnologiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'admin/1/notifi',
    component:NotifiComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'queAndAns',
    component:ShowquestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:':type/:id',
    component:SidenavComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'side',
    component:SideComponent,
    canActivate: [AuthGuard]
  },
  {
    path:':type/:id/welcome',
    component:WelcomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path:':type/:ids/student/:id',
    component:AdminstnavComponent,
    canActivate: [AuthGuard]

  } ,
  {
    path:'student/:id/edit',
    component:UpdatedetailsComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'sendmail',
    component:SupstnavComponent,
    canActivate: [AuthGuard]

  },
  {
    path:':type/:id/recommend',
    component:RecommendComponent,
    canActivate: [AuthGuard]

  },
  {
    path:':type/:id/todo',
    component:TodoListComponent,
    canActivate: [AuthGuard]

  },
  {
    path:':type/:id/pending',
    component:PendingStudentComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'sendPassword',
    component:PasswordComponent

  },
  {
    path:'student/:id/ResetPassword',
    component:ResetpwComponent
  }
 
 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
