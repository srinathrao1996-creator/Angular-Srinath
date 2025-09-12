import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../store/counter.action.ts/store';
import { decrement, increment } from '../store/counter.action.ts/counter.action';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
count:Observable<number>;
constructor(private _store:Store<CounterState>){
  this.count=_store.pipe(select('count'));
}
increment(){
  this._store.dispatch(increment());
}
decrement(){
  this._store.dispatch(decrement());
}
}
