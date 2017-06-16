import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: `hi`},
    {id: 1, text: `hello`},
    {id: 2, text: `hola`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m )
  }

  constructor() { }
}