import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/ipost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
private _url = "https://jsonplaceholder.typicode.com/posts"


  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<IPost[]>{
  return this.httpClient.get<IPost[]>(this._url)
  }

}
