import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanMembersCardComponent } from './clan-members-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ClanMembersCardComponent],
    exports: [ClanMembersCardComponent],
    imports: [CommonModule, MatCardModule, MatListModule, SharedModule],
})
export class ClanMembersCardModule {}
