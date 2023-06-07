import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {
 
  transform(trimmedUsers: any[], userSearchValue: string): any {
    if(!trimmedUsers || !userSearchValue){
      return trimmedUsers
    }
    return trimmedUsers.filter(pro => pro.first_name.toLocaleLowerCase().includes(userSearchValue.toLocaleLowerCase()));
  }

}
