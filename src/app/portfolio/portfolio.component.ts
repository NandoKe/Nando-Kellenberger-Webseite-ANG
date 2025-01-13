import { Component, VERSION, ViewEncapsulation, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LightgalleryModule ],  // Add HttpClientModule here
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
}
