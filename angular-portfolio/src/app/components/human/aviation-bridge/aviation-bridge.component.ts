import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aviation-bridge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aviation-bridge.component.html',
  styleUrl: './aviation-bridge.component.css'
})
export class AviationBridgeComponent {
  navigateToRocketRealm(): void {
    window.open('https://rocketrealm.jaghan.com', '_blank');
  }
}
