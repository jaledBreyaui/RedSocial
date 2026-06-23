import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionService } from './services/session';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  readonly sessionService = inject(SessionService);
  protected readonly title = signal('front');

  ngOnInit(): void {
    this.sessionService.initialize();
  }
}
