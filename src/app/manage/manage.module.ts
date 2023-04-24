import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from '../components/userdetail/userdetail.component';
import { UserslistComponent } from '../components/usersList/userslist.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ActiveModule } from '../active/active.module';
import { ManageComponent } from './manage.component';
import { UserFullNamePipe } from '../shared/pipes/first-last-name.pipe';
import { ShareModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserdetailComponent, ManageComponent],
  imports: [CommonModule, ManageRoutingModule, ActiveModule,ShareModule],
})
export class ManageModule {}
