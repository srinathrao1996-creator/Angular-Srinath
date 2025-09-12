import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../store/counter.action.ts/store';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  count:Observable<number>
  constructor(private _store:Store<CounterState>){
  this.count=_store.pipe(select('count'));
  }

}
