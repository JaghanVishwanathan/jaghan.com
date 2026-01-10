import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-path-split',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './path-split.component.html',
  styleUrl: './path-split.component.css'
})
export class PathSplitComponent {
  hoveredPath: 'professional' | 'human' | null = null;

  constructor(private router: Router, private scrollService: ScrollService) {}

  navigateToProfessional(): void {
    this.router.navigate(['/professional']).then(() => {
      // Scroll to top when navigating to professional page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
  }
}
