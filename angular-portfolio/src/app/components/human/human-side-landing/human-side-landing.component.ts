import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleService } from '../../../services/scramble.service';
import { Subscription } from 'rxjs';

interface LegoBuild {
  name: string;
  image: string;
}

@Component({
  selector: 'app-human-side-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './human-side-landing.component.html',
  styleUrl: './human-side-landing.component.css'
})
export class HumanSideLandingComponent implements OnInit, AfterViewInit, OnDestroy {
  aviationBackgroundImage = '/assets/aviation/aircraft-hangar.jpg';
  legoScrambledText = '';
  private subscriptions = new Subscription();

  legoBuilds: LegoBuild[] = [
    { name: 'The Artemis Launch System', image: '/assets/lego/artemis-launch-system.jpeg' },
    { name: 'F1 Mercedes AMG Petronas', image: '/assets/lego/f1-mercedes-amg.jpeg' },
    { name: 'Shuttle Discovery', image: '/assets/lego/shuttle-discovery.jpeg' },
    { name: 'Batman', image: '/assets/lego/batman.jpeg' }
  ];


  constructor(private scrambleService: ScrambleService) {}

  ngOnInit(): void {
    // Scroll to top on component initialization
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Ensure page starts at top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const introSection = document.getElementById('intro');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }, 0);

    // Setup scroll animations
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Animate LEGO cards and start scrambled text when section becomes visible
          if (entry.target.id === 'lego') {
            // Start scrambled text animation
            if (!this.legoScrambledText) {
              this.startLegoScrambling();
            }

            const cards = entry.target.querySelectorAll('.lego-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
          }
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  navigateToRocketRealm(): void {
    window.open('https://rocketrealm.jaghan.com', '_blank');
  }

  private startLegoScrambling(): void {
    const targetText = 'Built with curiosity.';
    this.subscriptions.add(
      this.scrambleService.scrambleAllAtOnce(targetText, 20, 1000).subscribe((text: string) => {
        this.legoScrambledText = text;
      })
    );
  }
}
