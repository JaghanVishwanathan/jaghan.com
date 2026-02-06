import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, Language } from '../../../services/content.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getLanguages().subscribe(data => {
      this.languages = data;
    });
  }
}
