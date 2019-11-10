import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
    constructor(private activatedRoute: ActivatedRoute) {
        this.memberId
            .pipe(takeUntil(this.destroyed))
            .subscribe(r => this.loadMemberDetails(r));
    }

    private memberId = this.activatedRoute.params.pipe(
        map(x => x.memberId, distinctUntilChanged())
    );

    private destroyed = new Subject();

    ngOnInit() {}

    loadMemberDetails(memberId) {
        console.log(memberId);
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
