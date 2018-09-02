import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { MyConfigService } from './my-config.service';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe extends DatePipe implements PipeTransform {

  constructor(
      private myConfig: MyConfigService,
      @Inject(LOCALE_ID) private loc: string
    ) {
    super(loc);
    console.log('locale is:', loc);
  }

  transform(value: any, args?: any): any {
    // return super.transform(value, this.myConfig.dateFormat);
    return formatDate(value, this.myConfig.dateFormat, this.loc);
  }

}
