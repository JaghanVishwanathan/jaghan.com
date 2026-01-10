import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPositionSubject = new BehaviorSubject<number>(0);
  public scrollPosition$: Observable<number> = this.scrollPositionSubject.asObservable();

  private scrollDirectionSubject = new BehaviorSubject<'up' | 'down'>('down');
  public scrollDirection$: Observable<'up' | 'down'> = this.scrollDirectionSubject.asObservable();

  private lastScrollTop = 0;
  private isScrolling = false;
  private scrollTimeout: any;
  private lastWheelTime = 0;
  private wheelEventCount = 0;

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    // Only trigger section scroll on significant wheel movements or when near section boundaries
    fromEvent(window, 'wheel', { passive: false })
      .pipe(throttleTime(500))
      .subscribe((event: any) => {
        if (this.isScrolling) {
          event.preventDefault();
          return;
        }

        const currentTime = Date.now();
        const timeSinceLastWheel = currentTime - this.lastWheelTime;
        
        // Reset counter if too much time has passed
        if (timeSinceLastWheel > 1000) {
          this.wheelEventCount = 0;
        }
        
        this.lastWheelTime = currentTime;
        this.wheelEventCount++;

        // Only trigger section scroll after multiple wheel events (user intent to scroll to next section)
        // Or if user is near the top/bottom of current section
        const deltaY = event.deltaY;
        const currentScroll = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // Check if user is near section boundaries
        const sections = document.querySelectorAll('.section');
        let currentSection: Element | null = null;
        
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= viewportHeight - 100) {
            currentSection = sections[i];
            break;
          }
        }

        if (currentSection) {
          const rect = currentSection.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);
          const distanceFromBottom = Math.abs(rect.bottom - viewportHeight);
          
          // Only trigger if near boundaries (within 100px) and significant scroll intent
          const nearTop = distanceFromTop < 100 && deltaY < -50;
          const nearBottom = distanceFromBottom < 100 && deltaY > 50;
          
          if ((nearTop || nearBottom) && Math.abs(deltaY) > 50) {
            this.handleWheelScroll(deltaY > 0 ? 'down' : 'up');
            event.preventDefault();
          }
        }
      });

    fromEvent(window, 'scroll', { passive: true })
      .pipe(debounceTime(50))
      .subscribe(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.scrollPositionSubject.next(scrollTop);

        if (scrollTop > this.lastScrollTop) {
          this.scrollDirectionSubject.next('down');
        } else {
          this.scrollDirectionSubject.next('up');
        }
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      });
  }

  private handleWheelScroll(direction: 'up' | 'down'): void {
    if (this.isScrolling) return;

    const sections = document.querySelectorAll('.section');
    const currentScroll = window.pageYOffset;
    const viewportHeight = window.innerHeight;
    let targetSection: Element | null = null;

    if (direction === 'down') {
      // Find next section that's not fully visible
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top > viewportHeight * 0.2) {
          targetSection = sections[i];
          break;
        }
      }
    } else {
      // Find previous section
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.bottom < viewportHeight * 0.8) {
          targetSection = sections[i];
          break;
        }
      }
    }

    if (targetSection) {
      this.scrollToSection(targetSection);
    }
  }

  private scrollToSection(section: Element): void {
    this.isScrolling = true;
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Reset scrolling flag after animation completes
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  /**
   * Smoothly scroll to a specific element
   */
  scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.isScrolling = true;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  /**
   * Smoothly scroll to top
   */
  scrollToTop(): void {
    this.isScrolling = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }

  /**
   * Get current scroll position
   */
  getScrollPosition(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Check if element is in viewport
   */
  isInViewport(element: HTMLElement, threshold: number = 0): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -threshold &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
