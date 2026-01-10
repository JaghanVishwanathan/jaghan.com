import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../../../services/scroll.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-professional-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LanguagesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './professional-layout.component.html',
  styleUrl: './professional-layout.component.css'
})
export class ProfessionalLayoutComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(
    private scrollService: ScrollService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Handle fragment navigation on route changes
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          // Use a longer delay to ensure DOM is fully rendered
          setTimeout(() => {
            const fragment = this.route.snapshot.fragment || window.location.hash?.substring(1);
            if (fragment) {
              // If there's a fragment (like #contact), scroll to it
              const element = document.getElementById(fragment);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            } else {
              // Only scroll to top if there's no fragment
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 600);
        })
    );

    // Check fragment on initial load (after component renders)
    setTimeout(() => {
      const fragment = this.route.snapshot.fragment || window.location.hash?.substring(1);
      if (fragment) {
        // If there's a fragment on initial load, scroll to it
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Only scroll to top if there's no fragment
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 600);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
