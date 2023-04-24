import { NgModule } from '@angular/core';
import { UserFullNamePipe } from './pipes/first-last-name.pipe';
import { ActiveDeletedDescPipe } from './pipes/active-deleted.pipe';
import { ActiveUsersPipe } from './pipes/active-users.pipe';

@NgModule({
  declarations: [UserFullNamePipe,ActiveDeletedDescPipe,ActiveUsersPipe],
  exports:[UserFullNamePipe,ActiveDeletedDescPipe,ActiveUsersPipe]
})
export class ShareModule {}
