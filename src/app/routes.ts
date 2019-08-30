import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ElectricianComponent } from './user/electrician/electrician.component';
import { PlumberComponent } from './user/plumber/plumber.component';
import { CarpenterComponent } from './user/carpenter/carpenter.component';
import { MoverspackersComponent } from './user/moverspackers/moverspackers.component';
import { TailorComponent } from './user/tailor/tailor.component';
import { SareeComponent } from './user/saree/saree.component';
import { HomeComponent } from './user/home/home.component';


export const appRoutes: Routes = [
    
    {
        path: 'signin', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'electrician', component: UserComponent,
        children: [{ path: '', component: ElectricianComponent }]
    },
    {
        path: 'plumber', component: UserComponent,
        children: [{ path: '', component: PlumberComponent }]
    },
    {
        path: 'carpenter', component: UserComponent,
        children: [{ path: '', component: CarpenterComponent }]
    },
    {
        path: 'moverpacker', component: UserComponent,
        children: [{ path: '',component: MoverspackersComponent }]
    },
    {
        path: 'tailor', component: UserComponent,
        children: [{ path: '',component: TailorComponent }]
    },
    {
        path: 'sareeselar', component: UserComponent,
        children: [{ path: '',component: SareeComponent }]
    },
    {
        path: 'home', component: UserComponent,
        children: [{ path: '',component: HomeComponent }]
    },
    
    {
        path: 'home', component:ElectricianComponent
    },
    {
        path: 'home', component:CarpenterComponent
    },
     {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }








   

];