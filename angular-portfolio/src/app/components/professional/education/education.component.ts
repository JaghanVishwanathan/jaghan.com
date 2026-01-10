import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, Education } from '../../../services/content.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getEducation().subscribe(data => {
      this.education = data;
    });
  }
}
