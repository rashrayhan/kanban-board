import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  emitter = new EventEmitter<String>();

  constructor(public http: HttpClient) {}

}
