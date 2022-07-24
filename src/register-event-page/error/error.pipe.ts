import { Pipe, PipeTransform } from '@angular/core';

function getErrorMessage(code: string, fieldName: string): string {
  const errorMap: { [key: string]: string } = {
    'required#fullName': 'Please enter your name',
    'required#email': 'Please enter your email',
    'required#mobile': 'Please enter your mobile',
    'pattern#fullName': 'Only letters and spaces are allowed',
    'pattern#email': 'Invalid email',
    'email#email': 'Invalid email',
    'maxlength#attendees': 'Number of seats selected is more than available seats',
    'max#noOfAttendees': 'Number of seats selected is more than available seats',
    'required#attendees_1': 'Please enter the name of Attendee#1',
    'required#attendees_2': 'Please enter the name of Attendee#2',
    'required#attendees_3': 'Please enter the name of Attendee#3',
    'required#attendees_4': 'Please enter the name of Attendee#4',
    'required#attendees_5': 'Please enter the name of Attendee#5',
    'required#attendees_6': 'Please enter the name of Attendee#6',
  };
  const defaultMap: { [key: string]: string } = {
    'required': 'Please enter the value',
    'pattern': 'Please enter in valid format',
  }
  return errorMap[`${code}#${fieldName}`] || defaultMap[code] || '';
};

@Pipe({
  name: 'errorMessage'
})
export class ErrorPipe implements PipeTransform {

  transform(value: any, controlName: string): string[] {
    console.log(value)
    const errorKeys = Object.keys(value);
    const errorMessages = errorKeys.map((item) => getErrorMessage(item, controlName));
    return errorMessages;
  }

}
