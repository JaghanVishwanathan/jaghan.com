import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { PathSplitComponent } from '../path-split/path-split.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, PathSplitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    // Scroll service initialized automatically
  }
}
