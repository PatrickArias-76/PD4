import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule],
})
export class Home {
  slides = [
    { src: '/assets/imagen/lomo.jpg', title: 'Lomo Saltado' },
    { src: '/assets/imagen/ceviche.jpg', title: 'Ceviche' },
    { src: '/assets/imagen/chaufa.jpg', title: 'Arroz Chaufa' }
  ];

  current = 0;

  next(){ this.current = (this.current + 1) % this.slides.length; }
  prev(){ this.current = (this.current - 1 + this.slides.length) % this.slides.length; }
  go(i:number){ this.current = i; }
}
