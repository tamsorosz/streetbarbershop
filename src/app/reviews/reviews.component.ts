import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Review {
  name: string;
  stars: number;
  text: string;
  service: string;
  date: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  @ViewChildren('statEl') statEls!: QueryList<ElementRef>;

  stats = [
    { label: 'Elégedett vendég', target: 500, current: 0, suffix: '+' },
    { label: 'Ajánlás',          target: 100, current: 0, suffix: '%' },
    { label: 'Értékelés',        target: 5,   current: 0, suffix: '★' },
    { label: 'Év tapasztalat',   target: 8,   current: 0, suffix: '+' },
  ];

  reviews: Review[] = [
    {
      name: 'Kovács Péter',
      stars: 5,
      text: 'Zsolti tényleg ért hozzá! Pontosan azt kaptam amit kértem. Remek hangulat, jó zene. Mindenkinek ajánlom!',
      service: 'Hajvágás + Szakáll',
      date: '2024. november',
      initials: 'KP',
      color: '#D01020'
    },
    {
      name: 'Tóth Bence',
      stars: 5,
      text: 'Már többször jártam itt, mindig tökéletes eredmény. A srácok nagyon profik, mindig jó a hangulat.',
      service: 'Fade hajvágás',
      date: '2024. október',
      initials: 'TB',
      color: '#1555CC'
    },
    {
      name: 'Nagy Ádám',
      stars: 5,
      text: 'Street Barbershop a legjobb Kispesten! Ingyenes parkoló, gyors kiszolgálás, profi vágás. Visszajövök!',
      service: 'Klasszikus vágás',
      date: '2024. október',
      initials: 'NÁ',
      color: '#D01020'
    },
    {
      name: 'Szabó Gábor',
      stars: 5,
      text: 'Fantasztikus szakállformázás! A meleg törülközős kezelés extra élmény volt. Profik a szó legszorosabb értelmében.',
      service: 'Szakállformázás',
      date: '2024. szeptember',
      initials: 'SzG',
      color: '#1555CC'
    },
  ];

  starsArray(n: number) {
    return Array(n).fill(0);
  }

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const el = document.querySelector('.stats-row');
      if (el) observer.observe(el);
    }, 100);
  }

  private animateStats() {
    this.stats.forEach((stat, i) => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.target);
        this.stats[i] = { ...stat, current };
        if (current >= stat.target) clearInterval(timer);
      }, duration / steps);
    });
  }
}
