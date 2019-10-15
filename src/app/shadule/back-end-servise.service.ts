import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackEndServiseService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
  }

  postData(data) {
    console.log("Пришло в сервис");
    
    return this.http.post('https://localhost:44322/', data);
  }
}
