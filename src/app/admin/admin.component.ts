import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CounterState } from '../store/counter.action.ts/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  count:Observable<number>
    constructor(private _store:Store<CounterState>){
    this.count=_store.pipe(select('count'));
    }
}
