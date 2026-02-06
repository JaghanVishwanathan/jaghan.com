import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleService } from '../../services/scramble.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection?: ElementRef;
  scrambledContent = '';
  hasStartedScrambling = false;
  private subscription?: Subscription;
  private observer?: IntersectionObserver;
  private lines = [
    "Hi, I'm Jaghan.",
    "",
    "I'm a full-stack engineer who enjoys turning complex ideas into clean, usable digital products.",
    "By day, I work with code, systems, and interfaces.",
    "By instinct, I think in experiences, visuals, and stories.",
    "",
    "I don't stop at development,",
    "I design user journeys, shape digital identities, manage content, and communicate ideas that need clarity.",
    "",
    "When I'm not in front of a screen,",
    "you'll probably find me somewhere near an airport fence,",
    "on a mountain trail,",
    "or planning the next trip.",
    "",
    "✈️ Aviation. 🛰️ Space. 💻Web Dev. 🧱 LEGO. 🚘Cars. ",
    "Different worlds — same curiosity."
  ];

  constructor(private scrambleService: ScrambleService) {}

  ngOnInit(): void {
    // Don't start scrambling immediately
  }

  ngAfterViewInit(): void {
    // Set up Intersection Observer to start scrambling when section is in view
    if (this.aboutSection) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.hasStartedScrambling) {
              this.hasStartedScrambling = true;
              this.startScrambling();
            }
          });
        },
        {
          threshold: 0.3, // Start when 30% of the section is visible
          rootMargin: '0px'
        }
      );

      this.observer.observe(this.aboutSection.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private startScrambling(): void {
    // Reveal all text in 1.5 seconds
    this.subscription = this.scrambleService.scrambleLines(
      this.lines,
      20,   // scramble speed (ms between scrambles) - fast
      1500  // total reveal duration (ms) - 1.5 seconds
    ).subscribe(text => {
      this.scrambledContent = text;
    });
  }
}
