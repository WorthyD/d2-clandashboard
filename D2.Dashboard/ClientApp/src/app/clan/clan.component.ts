import { Component, OnInit } from '@angular/core';
import { ClanService } from './clan.service';
import { Clan } from '../shared/entities/clan';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  //clan: Clan = new Clan();
  constructor(private route: ActivatedRoute, private clanService: ClanService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.clanService.getClan(id)
    //   .subscribe(result => {
    //     console.log('success');
    //     console.log(result);
    //     this.clan = result;
    //     console.log(this.clan);
    //   });
  }

}
