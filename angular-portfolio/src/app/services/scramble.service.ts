import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrambleService {
  private readonly chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  /**
   * Scrambles text by revealing words quickly
   * All letters in unrevealed words scramble continuously until words are revealed
   * @param targetText The final text to reveal
   * @param scrambleSpeed Speed of scrambling animation (milliseconds between updates)
   * @param totalDuration Total time to reveal all text (milliseconds)
   */
  scrambleText(targetText: string, scrambleSpeed: number = 30, totalDuration: number = 1000): Observable<string> {
    const subject = new Subject<string>();
    const words = targetText.split(/(\s+|[^\s]+)/); // Split preserving spaces
    const nonWhitespaceWords = words.filter(w => w.trim() !== '');
    const totalWords = nonWhitespaceWords.length;
    const wordRevealInterval = totalDuration / totalWords; // Time per word
    const revealedIndices = new Set<number>();
    let currentWordIndex = 0;
    let startTime = Date.now();

    // Start continuous scrambling animation
    const scrambleInterval = setInterval(() => {
      // Build result: revealed words as-is, unrevealed words scrambled
      const result = words.map((word, index) => {
        if (revealedIndices.has(index) || word.trim() === '') {
          return word; // Already revealed or whitespace
        }
        // Scramble unrevealed words
        return this.scrambleWord(word);
      }).join('');

      subject.next(result);
    }, scrambleSpeed);

    // Reveal words quickly based on elapsed time
    const revealWords = () => {
      const elapsed = Date.now() - startTime;
      const wordsToReveal = Math.floor(elapsed / wordRevealInterval);

      // Reveal words up to current count
      let wordCount = 0;
      for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== '' && !revealedIndices.has(i)) {
          if (wordCount < wordsToReveal) {
            revealedIndices.add(i);
            wordCount++;
          }
        } else if (words[i].trim() === '') {
          revealedIndices.add(i); // Always show whitespace
        }
      }

      if (wordsToReveal >= totalWords) {
        // All words revealed
        clearInterval(scrambleInterval);
        subject.next(targetText);
        subject.complete();
      } else {
        // Continue revealing
        setTimeout(() => {
          revealWords();
        }, wordRevealInterval / 2); // Check twice per word interval for smoother reveal
      }
    };

    // Start revealing words immediately
    setTimeout(() => {
      revealWords();
    }, wordRevealInterval);

    return subject.asObservable();
  }

  /**
   * Scrambles all text at once and reveals quickly (for about section)
   * @param targetText The final text to reveal
   * @param scrambleSpeed Speed of scrambling animation
   * @param revealDuration Total time to reveal all text
   */
  scrambleAllAtOnce(targetText: string, scrambleSpeed: number = 20, revealDuration: number = 800): Observable<string> {
    const subject = new Subject<string>();
    let startTime = Date.now();
    const totalChars = targetText.length;

    // Start continuous scrambling
    const scrambleInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / revealDuration, 1);
      const charsToReveal = Math.floor(progress * totalChars);

      // Build result: revealed chars as-is, unrevealed chars scrambled
      const result = targetText.split('').map((char, index) => {
        if (index < charsToReveal || char === ' ' || char === '\n' || char === '\t') {
          return char; // Already revealed or whitespace
        }
        // Scramble unrevealed chars
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }).join('');

      subject.next(result);

      if (progress >= 1) {
        clearInterval(scrambleInterval);
        subject.next(targetText);
        subject.complete();
      }
    }, scrambleSpeed);

    return subject.asObservable();
  }

  /**
   * Scrambles multiple lines, revealing all quickly
   * @param lines Array of text lines to scramble
   * @param scrambleSpeed Speed of scrambling animation
   * @param revealDuration Total time to reveal all text
   */
  scrambleLines(
    lines: string[],
    scrambleSpeed: number = 20,
    revealDuration: number = 800
  ): Observable<string> {
    const subject = new Subject<string>();
    const fullText = lines.join('\n');
    
    this.scrambleAllAtOnce(fullText, scrambleSpeed, revealDuration).subscribe({
      next: (scrambled) => {
        subject.next(scrambled);
      },
      complete: () => {
        subject.complete();
      }
    });

    return subject.asObservable();
  }

  /**
   * Scrambles a single word by replacing letters with random characters
   * Preserves length and whitespace
   */
  private scrambleWord(word: string): string {
    return word.split('').map(char => {
      if (char === ' ' || char === '\n' || char === '\t') {
        return char; // Keep whitespace
      }
      // Return random character
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }).join('');
  }
}
