import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Parent to child

    // @Input() count:number=0;

      // Child to parent

      // @Output() countEvent:EventEmitter<number>=new EventEmitter();
      // send(){
      //   this.countEvent.emit(10);
      // }

      

      @Input() num1:number=0;
      num2:number=0;

      @Output() numEvent:EventEmitter<number>=new EventEmitter();
      send(){
        this.numEvent.emit(this.num2);
      }
}
