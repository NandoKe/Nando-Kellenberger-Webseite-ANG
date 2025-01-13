import { Component, VERSION, ViewEncapsulation, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { GoogleAuthService } from '../services/google-auth.service';
import { GooglePhotosService } from '../services/google-photos.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LightgalleryModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log('Current Slide:', index, 'Previous Slide:', prevIndex);
  };

  photos: any[] = [];

  constructor(
    private authService: GoogleAuthService,
    private photosService: GooglePhotosService
  ) {}

  async ngOnInit() {
    await this.authService.signIn();
    const accessToken = this.authService.getAccessToken();
    this.photosService.getPhotos(accessToken).subscribe((data: any) => {
      this.photos = data.mediaItems;
    });
  }
}
