import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  hidden = signal(false);
  progress = signal(0);

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress.update(v => {
        if (v >= 100) { clearInterval(interval); return 100; }
        return v + Math.floor(Math.random() * 18) + 6;
      });
    }, 120);

    setTimeout(() => this.hidden.set(true), 2200);
  }
}
