import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  constructor(private readonly http: HttpClient) { }

  getAnime(animeName: string) {
    return this.http.get(`https://kitsu.io/api/edge/${animeName}`)
  }
}


