import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { ChannelMainComponent } from './main/main-page/channel-main/channel-main.component';
import { MainChatComponent } from './main/main-page/main-chat/main-chat.component';
import { UserInfoComponent } from './main/main-page/detail-view-page/user-info/user-info.component';
import { ImprintComponent } from './main/footer/imprint/imprint.component';

const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
