import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSiteComponent } from './addSite/add-site.component';
import { DeleteSiteComponent } from './delete-site/delete-site.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountRoutingModule } from '../Accounts/account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListSitesComponent } from './listSites/list-sites.component';
import { GetUserListSiteByIdComponent } from './getUserListSiteById/get-user-list-site-by-id.component';
import { SitesRoutingModule } from './sites-routing.module';
import { UserListSitesComponent } from './userListSites/user-list-sites.component';
import { WalletRequestModalsModule } from '../userids/wallet-request-modals.module';
import { TransferIdsListModalComponent } from './userListSites/transfer-ids-list-modal/transfer-ids-list-modal.component';
import { SiteIdDetailsModalComponent } from './userListSites/site-id-details-modal/site-id-details-modal.component';



@NgModule({
  declarations: [
    AddSiteComponent,
    DeleteSiteComponent,
    ListSitesComponent,
    UserListSitesComponent,
    GetUserListSiteByIdComponent,
    TransferIdsListModalComponent,
    SiteIdDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SitesRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    WalletRequestModalsModule
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SitesModule { }
