import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "../models/iuser";
import {Ipost} from "../models/ipost";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {

}
  getAllUsers(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(this.url)
  }


  getUserById(id: number): Observable<Iuser> {
    return this.httpClient.get<Iuser>(this.url+ '/' +id)
}

 getUserWithPostsById(id: number): Observable<Ipost[]> {
    return this.httpClient.get<Ipost[]>(this.url + '/' + id + '/posts')
 }

}
