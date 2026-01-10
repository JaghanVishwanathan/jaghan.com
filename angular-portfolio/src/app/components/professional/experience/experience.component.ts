import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, Experience } from '../../../services/content.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getExperiences().subscribe(data => {
      this.experiences = data;
    });
  }

  getCompanyLogo(company: string): string {
    // Map company names to logo filenames
    const logoMap: { [key: string]: string } = {
      'TU Darmstadt Space Technology e.V.': 'tudarmstadt.png',
      'Virtusa Consulting Services Pvt Ltd': 'virtusa.png'
    };
    return logoMap[company] || 'default.png';
  }
}
