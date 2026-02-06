import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, TravelLocation } from '../../../services/content.service';
import * as L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png',
});

@Component({
  selector: 'app-travel-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-map.component.html',
  styleUrl: './travel-map.component.css'
})
export class TravelMapComponent implements OnInit, AfterViewInit {
  travelLocations: TravelLocation[] = [];
  private map?: L.Map;
  private visitedCountries: { name: string; iso: string; coords: [number, number] }[] = [
    { name: 'India', iso: 'IND', coords: [20.5937, 78.9629] },
    { name: 'Malaysia', iso: 'MYS', coords: [4.2105, 101.9758] },
    { name: 'Germany', iso: 'DEU', coords: [51.1657, 10.4515] },
    { name: 'Spain', iso: 'ESP', coords: [40.4637, -3.7492] },
    { name: 'Portugal', iso: 'PRT', coords: [39.3999, -8.2245] },
    { name: 'France', iso: 'FRA', coords: [46.2276, 2.2137] },
    { name: 'Luxembourg', iso: 'LUX', coords: [49.8153, 6.1296] },
    { name: 'Switzerland', iso: 'CHE', coords: [46.8182, 8.2275] },
    { name: 'Austria', iso: 'AUT', coords: [47.5162, 14.5501] },
    { name: 'United Arab Emirates', iso: 'ARE', coords: [23.4241, 53.8478] }
  ];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getTravelLocations().subscribe(data => {
      this.travelLocations = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap(): void {
    // Initialize map with dark theme
    this.map = L.map('travel-map', {
      center: [30, 20],
      zoom: 3,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: true
    });

    // Dark theme tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Color visited countries using circles (simpler approach)
    this.colorVisitedCountries();
  }

  private colorVisitedCountries(): void {
    this.visitedCountries.forEach((country, index) => {
      setTimeout(() => {
        // Create a colored circle overlay for each country
        const circle = L.circle(country.coords, {
          radius: this.getCountryRadius(country.name),
          fillColor: '#00d4ff',
          fillOpacity: 0.5,
          color: '#00d4ff',
          weight: 2,
          opacity: 0.8
        }).addTo(this.map!);

        // Add popup
        circle.bindPopup(`
          <div class="map-popup">
            <h3>${country.name}</h3>
            <p>Visited in 2024</p>
          </div>
        `);

        // Animate appearance
        circle.setStyle({ fillOpacity: 0 });
        setTimeout(() => {
          circle.setStyle({ fillOpacity: 0.5 });
        }, index * 100);
      }, index * 150);
    });
  }

  private getCountryRadius(countryName: string): number {
    // Approximate country sizes in meters
    const radii: { [key: string]: number } = {
      'India': 1500000,
      'Malaysia': 400000,
      'Germany': 500000,
      'Spain': 600000,
      'Portugal': 300000,
      'France': 700000,
      'Luxembourg': 50000,
      'Switzerland': 200000,
      'Austria': 300000,
      'United Arab Emirates': 200000
    };
    return radii[countryName] || 300000;
  }
}
