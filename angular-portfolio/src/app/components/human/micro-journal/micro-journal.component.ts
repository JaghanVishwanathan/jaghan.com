import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JournalEntry {
  id: string;
  photo: string;
  caption: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-micro-journal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './micro-journal.component.html',
  styleUrl: './micro-journal.component.css'
})
export class MicroJournalComponent {
  // Structure ready for content population
  journalEntries: JournalEntry[] = [];
}
