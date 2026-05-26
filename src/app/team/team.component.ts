import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  specialties: string[];
  bio: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  members: TeamMember[] = [
    {
      name: 'Barber neve',
      role: 'Senior Barber',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      specialties: ['Klasszikus vágás', 'Szakállformázás', 'Fade'],
      bio: 'Tapasztalt barber, aki évek óta dolgozik a The Street Barbershopban. Precizitás és stílus a védjegye.'
    },
    {
      name: 'Barber neve',
      role: 'Barber',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      specialties: ['Modern vágás', 'Hajfestés', 'Beard styling'],
      bio: 'Mindig lépést tart az újabb trendekkel. Szakértője a modern stílusoknak és hajfestésnek.'
    },
    {
      name: 'Barber neve',
      role: 'Barber',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      specialties: ['Klasszikus borotválás', 'Hot towel', 'Fade vágás'],
      bio: 'A klasszikus barbershop hagyományok mestere. Meleg törülközős borotválás specialista.'
    }
  ];
}
