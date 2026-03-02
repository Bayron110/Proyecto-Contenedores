import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.createScanline();
    this.createParticles();
    // ← createWaves() ELIMINADO
  }

  createScanline() {
    const line = this.renderer.createElement('div');
    this.renderer.addClass(line, 'scanline');
    this.renderer.appendChild(document.body, line);
  }

  createParticles() {
    const colors = [
      ['rgba(59,130,246,0.7)',  'rgba(59,130,246,0.3)'],
      ['rgba(6,182,212,0.6)',   'rgba(6,182,212,0.2)'],
      ['rgba(99,102,241,0.6)',  'rgba(99,102,241,0.2)'],
      ['rgba(148,163,184,0.4)', 'rgba(148,163,184,0.1)'],
    ];

    for (let i = 0; i < 22; i++) {
      const el = this.renderer.createElement('div');
      this.renderer.addClass(el, 'particle');

      const size = Math.random() * 4 + 1;
      const [bg, shadow] = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 18 + 10;
      const delay = Math.random() * 20;

      this.renderer.setStyle(el, 'width',              `${size}px`);
      this.renderer.setStyle(el, 'height',             `${size}px`);
      this.renderer.setStyle(el, 'left',               `${left}%`);
      this.renderer.setStyle(el, 'background',         bg);
      this.renderer.setStyle(el, 'box-shadow',         `0 0 ${size * 4}px ${shadow}`);
      this.renderer.setStyle(el, 'animation-duration', `${duration}s`);
      this.renderer.setStyle(el, 'animation-delay',    `-${delay}s`);

      this.renderer.appendChild(document.body, el);
    }
  }
}