import { Component, OnInit } from '@angular/core';

import {Team} from '../../models';
import {HorizonService} from '../../services/horizon.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: Team;
  items: any;
  selectedRecords: any[];
  

  table = this.horizon.table("teaminfo");

  constructor(private horizon: HorizonService) { 
    
  }

  ngOnInit() {
    this.load();
    this.team = {
      name: '',
      process: '',
      coach:'',
      manager:'',
        member: {
         name: '',
         role: '',
         phone: '',
         email: '',
         extension: '',
         cubicle: ''
      }
    };
  }

  load() {
    this.items = this.table
      .order('datetime', 'descending')
      .limit(20)
      .watch();
  }

  addRecord(model: Team) {
    this.table.store({
      Name: model.name,
      Process: model.process,
      Coach: model.coach,
      Manager: model.manager,
      Member: {
        Name: model.member.name,
        Role: model.member.role,
        Phone: model.member.phone,
        Email: model.member.email,
        Extension: model.member.extension,
        Cubicle: model.member.cubicle
      },
      datetime: new Date(),
    });
    this.ngOnInit();
  }

  

}
