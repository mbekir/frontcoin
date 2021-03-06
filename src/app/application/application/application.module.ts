import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { HistoryComponent } from './history/history.component';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { NftComponent } from './nft/nft.component';


@NgModule({
  declarations: [
    WalletComponent,
    HistoryComponent,
    ApplicationComponent,
    NavbarComponent,
    ProfileComponent,
    NftComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
