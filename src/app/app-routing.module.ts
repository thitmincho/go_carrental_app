import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./account/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./account/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'login-register',
    loadChildren: () => import('./account/login-register/login-register.module').then( m => m.LoginRegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./account/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./account/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },  {
    path: 'choose-car',
    loadChildren: () => import('./choose-car/choose-car.module').then( m => m.ChooseCarPageModule)
  },
  {
    path: 'car-detail',
    loadChildren: () => import('./car-detail/car-detail.module').then( m => m.CarDetailPageModule)
  },

 
 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
