import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Schema, Tables, Users} from '../users';
import {RestService} from '../rest.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit, OnChanges {

  constructor(public rs: RestService) {
  }

  users: Users[] = [];
  schema: Schema | undefined;
  tables: [Tables] | undefined;
  select = new FormControl('');
  kek: any;

  ngOnInit(): void {
    this.rs.getScheme().subscribe((response) => {
      this.schema = response;
      this.tables = this.schema?.Tables;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.kek);
  }

}