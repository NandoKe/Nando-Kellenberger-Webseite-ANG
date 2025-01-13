import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private gapi: any;

  constructor() {
    // Dynamically load the gapi script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => this.initClient();
    document.body.appendChild(script);
  }

  private initClient() {
    this.gapi = (window as any)['gapi'];
    this.gapi.load('client:auth2', () => {
      this.gapi.client.init({
        clientId: '959423585260-2dcleg4gmjhe9q0lt2hsp75q46ie5o64.apps.googleusercontent.com.apps.googleusercontent.com', // Replace with your client ID
        scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
      });
    });
  }

  signIn() {
    return this.gapi.auth2.getAuthInstance().signIn();
  }

  getAccessToken() {
    return this.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
  }
}
