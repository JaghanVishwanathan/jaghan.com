import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, SkillCategory, Skill } from '../../../services/content.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillCategories: { category: string; skills: Skill[] }[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getSkillsWithDetails().subscribe(data => {
      this.skillCategories = data;
    });
  }
}
