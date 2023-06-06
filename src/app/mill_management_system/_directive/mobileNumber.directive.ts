import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mobileNumber]'
})
export class MobileNumberDirective {

  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;let trimmedValue = input.value.replace(/\D/g, ''); // Remove non-digit characters
    const maxLength = 10; // Define the maximum length of the mobile number

    if (trimmedValue.length > maxLength) {
      trimmedValue = trimmedValue.substring(0, maxLength); // Limit the value to 10 digits
    }

    input.value = trimmedValue;
  }

}
