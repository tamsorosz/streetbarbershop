import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  url: string;
  alt: string;
  span?: 'wide' | 'tall';
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items: GalleryItem[] = [
    {
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      alt: 'Hajvágás közelről',
      span: 'wide'
    },
    {
      url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
      alt: 'Barbershop belső'
    },
    {
      url: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80',
      alt: 'Szakállformázás'
    },
    {
      url: 'https://images.unsplash.com/photo-1612257416648-f14a58e4edce?w=600&q=80',
      alt: 'Barber eszközök',
      span: 'tall'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
      alt: 'Modern hajvágás'
    },
    {
      url: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80',
      alt: 'Barber szék'
    },
    {
      url: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=80',
      alt: 'Stílusos megjelenés',
      span: 'wide'
    },
    {
      url: 'https://images.unsplash.com/photo-1595152772835-219674b2a163?w=600&q=80',
      alt: 'Barber munka közben'
    }
  ];
}
