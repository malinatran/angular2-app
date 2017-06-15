import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `hi`,
    `hello`,
    `hola`
  ];

  constructor() { }
}