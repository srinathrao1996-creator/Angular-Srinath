import { AbstractControl } from "@angular/forms";

export function appleMail(control:AbstractControl){
    if (control.value.includes('@apple.com')) {
        return null
    } else {
        return {'appleMail':'Pleasse use apple mail only'}
    }
}

  // Create Custom Validator ( After this Step 
  // Open create-user component ( and apply appleMail in email address field in ts and html