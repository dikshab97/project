// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ElectricianComponent } from './user/electrician/electrician.component';
import { PlumberComponent } from './user/plumber/plumber.component';
import { CarpenterComponent } from './user/carpenter/carpenter.component';
import { MoverspackersComponent } from './user/moverspackers/moverspackers.component';
import { TailorComponent } from './user/tailor/tailor.component';
import { SareeComponent } from './user/saree/saree.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './user/home/home.component';
import { WorkerComponent } from './admin/worker/worker.component';

//routes
import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    ElectricianComponent,
    PlumberComponent,
    CarpenterComponent,
    MoverspackersComponent,
    TailorComponent,
    SareeComponent,
    HomepageComponent,
    HomeComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
