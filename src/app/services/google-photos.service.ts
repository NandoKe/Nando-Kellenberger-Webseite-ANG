import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';  // for handling errors

@Injectable({
  providedIn: 'root',
})
export class GooglePhotosService {
  constructor(private http: HttpClient) {}

  getPhotos(accessToken: string) {
    const url = 'https://photoslibrary.googleapis.com/v1/mediaItems';
    const headers = { Authorization: `Bearer ${accessToken}` };
    return this.http.get(url, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching photos:', error);
        return of({ mediaItems: [] });  // Return an empty array in case of error
      })
    );
  }
}