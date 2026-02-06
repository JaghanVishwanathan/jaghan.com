import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleService } from '../../services/scramble.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  scrambledText1 = '';
  scrambledText2 = '';
  showScrollHint = false;
  private subscriptions = new Subscription();

  constructor(private scrambleService: ScrambleService) {}

  ngOnInit(): void {
    this.startScrambling();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private startScrambling(): void {
    // First part: "Hey\nI'm Jaghan" - all at once, fast (0.8 seconds)
    const firstPart = "Hey\nI'm Jaghan";
    this.subscriptions.add(
      this.scrambleService.scrambleAllAtOnce(firstPart, 20, 800).subscribe(text => {
        this.scrambledText1 = text;
        if (text === firstPart) {
          // Second part: the tagline - all at once, fast (0.8 seconds)
          setTimeout(() => {
            this.subscriptions.add(
              this.scrambleService.scrambleAllAtOnce("I build things for the web… and chase things in the sky ✈️🚀", 20, 800).subscribe(text => {
                this.scrambledText2 = text;
                if (text === "I build things for the web… and chase things in the sky ✈️🚀") {
                  setTimeout(() => {
                    this.showScrollHint = true;
                  }, 200);
                }
              })
            );
          }, 100); // Small delay between parts
        }
      })
    );
  }
}
