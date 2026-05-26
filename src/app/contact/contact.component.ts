import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=The+Street+Barbershop+Kispest+Budapest&output=embed&hl=hu&z=15'
    );
  }

  openMaps() {
    window.open('https://maps.google.com/maps?q=The+Street+Barbershop+Kispest+Budapest', '_blank');
  }
}
