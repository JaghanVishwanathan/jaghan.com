import {
  CommonModule,
  Subject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RLCEPV6W.js";

// src/app/services/scramble.service.ts
var ScrambleService = class _ScrambleService {
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  /**
   * Scrambles text by revealing words quickly
   * All letters in unrevealed words scramble continuously until words are revealed
   * @param targetText The final text to reveal
   * @param scrambleSpeed Speed of scrambling animation (milliseconds between updates)
   * @param totalDuration Total time to reveal all text (milliseconds)
   */
  scrambleText(targetText, scrambleSpeed = 30, totalDuration = 1e3) {
    const subject = new Subject();
    const words = targetText.split(/(\s+|[^\s]+)/);
    const nonWhitespaceWords = words.filter((w) => w.trim() !== "");
    const totalWords = nonWhitespaceWords.length;
    const wordRevealInterval = totalDuration / totalWords;
    const revealedIndices = /* @__PURE__ */ new Set();
    let currentWordIndex = 0;
    let startTime = Date.now();
    const scrambleInterval = setInterval(() => {
      const result = words.map((word, index) => {
        if (revealedIndices.has(index) || word.trim() === "") {
          return word;
        }
        return this.scrambleWord(word);
      }).join("");
      subject.next(result);
    }, scrambleSpeed);
    const revealWords = () => {
      const elapsed = Date.now() - startTime;
      const wordsToReveal = Math.floor(elapsed / wordRevealInterval);
      let wordCount = 0;
      for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== "" && !revealedIndices.has(i)) {
          if (wordCount < wordsToReveal) {
            revealedIndices.add(i);
            wordCount++;
          }
        } else if (words[i].trim() === "") {
          revealedIndices.add(i);
        }
      }
      if (wordsToReveal >= totalWords) {
        clearInterval(scrambleInterval);
        subject.next(targetText);
        subject.complete();
      } else {
        setTimeout(() => {
          revealWords();
        }, wordRevealInterval / 2);
      }
    };
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
  scrambleAllAtOnce(targetText, scrambleSpeed = 20, revealDuration = 800) {
    const subject = new Subject();
    let startTime = Date.now();
    const totalChars = targetText.length;
    const scrambleInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / revealDuration, 1);
      const charsToReveal = Math.floor(progress * totalChars);
      const result = targetText.split("").map((char, index) => {
        if (index < charsToReveal || char === " " || char === "\n" || char === "	") {
          return char;
        }
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }).join("");
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
  scrambleLines(lines, scrambleSpeed = 20, revealDuration = 800) {
    const subject = new Subject();
    const fullText = lines.join("\n");
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
  scrambleWord(word) {
    return word.split("").map((char) => {
      if (char === " " || char === "\n" || char === "	") {
        return char;
      }
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }).join("");
  }
  static \u0275fac = function ScrambleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrambleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrambleService, factory: _ScrambleService.\u0275fac, providedIn: "root" });
};

// src/app/components/about/about.component.ts
var _c0 = ["aboutSection"];
var AboutComponent = class _AboutComponent {
  scrambleService;
  aboutSection;
  scrambledContent = "";
  hasStartedScrambling = false;
  subscription;
  observer;
  lines = [
    "Hi, I'm Jaghan.",
    "",
    "I'm a full-stack engineer who enjoys turning complex ideas into clean, usable digital products.",
    "By day, I work with code, systems, and interfaces.",
    "By instinct, I think in experiences, visuals, and stories.",
    "",
    "I don't stop at development,",
    "I design user journeys, shape digital identities, manage content, and communicate ideas that need clarity.",
    "",
    "When I'm not in front of a screen,",
    "you'll probably find me somewhere near an airport fence,",
    "on a mountain trail,",
    "or planning the next trip.",
    "",
    "\u2708\uFE0F Aviation. \u{1F6F0}\uFE0F Space. \u{1F4BB}Web Dev. \u{1F9F1} LEGO. \u{1F698}Cars. ",
    "Different worlds \u2014 same curiosity."
  ];
  constructor(scrambleService) {
    this.scrambleService = scrambleService;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.aboutSection) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasStartedScrambling) {
            this.hasStartedScrambling = true;
            this.startScrambling();
          }
        });
      }, {
        threshold: 0.3,
        // Start when 30% of the section is visible
        rootMargin: "0px"
      });
      this.observer.observe(this.aboutSection.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  startScrambling() {
    this.subscription = this.scrambleService.scrambleLines(
      this.lines,
      20,
      // scramble speed (ms between scrambles) - fast
      1500
      // total reveal duration (ms) - 1.5 seconds
    ).subscribe((text) => {
      this.scrambledContent = text;
    });
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)(\u0275\u0275directiveInject(ScrambleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], viewQuery: function AboutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.aboutSection = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["aboutSection", ""], ["id", "about", 1, "about", "section"], [1, "container"], [1, "about-content"], [1, "scrambled-content"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1, 0)(2, "div", 2)(3, "div", 3)(4, "pre", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.scrambledContent);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.about[_ngcontent-%COMP%] {\n  padding: var(--space-7) 0;\n  background: var(--bg-primary);\n}\n.about-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 var(--space-5);\n}\n.scrambled-content[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: var(--body-lg);\n  line-height: 2.2;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  margin: 0;\n  padding: 0;\n  animation: fadeIn 1s ease-out;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.02em;\n  max-width: 100%;\n}\n@media (max-width: 768px) {\n  .scrambled-content[_ngcontent-%COMP%] {\n    font-size: var(--body);\n    line-height: 2;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\components\\about\\about.component.ts", lineNumber: 13 });
})();

export {
  ScrambleService,
  AboutComponent
};
//# sourceMappingURL=chunk-RA6XZXI6.js.map
