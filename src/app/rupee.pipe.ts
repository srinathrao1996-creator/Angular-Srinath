import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

    // Create Custom Pipe ( After this Step 
  // Open vehicle component ( and apply rupee in vehicle cost field ))

  transform(value: unknown, ...args: unknown[]): unknown {
    return "₹ "+value;
  }

}
