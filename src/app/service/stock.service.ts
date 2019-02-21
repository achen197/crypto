import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }


  // getUser() : Observable<User[]> {
  //   // return this.http.get('https://jsonplaceholder.typicode.com/users').map(user => {
  //   //   return <User>{address: user.address, email: user.email, }
  //   // });
  //   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  // }
}
