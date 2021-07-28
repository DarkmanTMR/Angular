import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ipost} from "../models/ipost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private httpClient: HttpClient) {

  }

  getAllPosts(): Observable<Ipost[]> {
    return this.httpClient.get<Ipost[]>(this.url)
  }

  getPostById(id: number) : Observable<Ipost> {
    return this.httpClient.get<Ipost>(this.url + '/' + id)
  }
}
