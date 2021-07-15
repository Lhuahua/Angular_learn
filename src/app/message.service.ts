/*
 * @Author: your name
 * @Date: 2021-07-14 14:28:12
 * @LastEditTime: 2021-07-14 14:30:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project1\src\app\message.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages:string[]=[];
  add(message:string){
    this.messages.push(message);
  }
  clear(){
    this.messages=[];
  }
}
