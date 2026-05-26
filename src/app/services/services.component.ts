import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  icon: string;
  title: string;
  description: string;
  duration: string;
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-cut',
      title: 'Hajvágás',
      description: 'Klasszikus vagy modern vágás személyre szabva. Mosás, vágás és szárítás, majd pomádé befejezéssel.',
      duration: '45 perc',
      featured: false
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Szakállformázás',
      description: 'Precíz szakállformázás és igazítás. Meleg törülközős kezelés, borotvával és trimmerrel.',
      duration: '30 perc',
      featured: true
    },
    {
      icon: 'fas fa-magic',
      title: 'Hajvágás + Szakáll',
      description: 'Komplett megjelenés frissítés – hajvágás és szakállformázás egy alkalommal, a legjobb eredményért.',
      duration: '75 perc',
      featured: false
    },
    {
      icon: 'fas fa-tint',
      title: 'Hajfestés',
      description: 'Professzionális hajfestés és kiemelés. Stylistjaink az arcodat és hajat figyelembe véve tanácsol.',
      duration: '60+ perc',
      featured: false
    },
    {
      icon: 'fas fa-shower',
      title: 'Mosás & Szárítás',
      description: 'Fejbőrmassázzsal kombinált mosás, kondicionálás és professzionális szárítás és formázás.',
      duration: '20 perc',
      featured: false
    },
    {
      icon: 'fas fa-child',
      title: 'Gyerek hajvágás',
      description: 'Gyerekeknek szánt, türelmes és gondos hajvágás. Légkör, amelyben a kicsik is jól érzik magukat.',
      duration: '30 perc',
      featured: false
    }
  ];
}
