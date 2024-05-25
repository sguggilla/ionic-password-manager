import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  passwords: Password[] = [{ name: '', username: '', password: '', url: 'google.com' }];

  constructor() { }

  editPassword(password: any) {

  }

  getFaviconUrl(url: string): string {
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`;
  }

}

// password.model.ts
export interface Password {
  id?: string;
  name: string;
  username: string;
  password: string;
  url: string;
}