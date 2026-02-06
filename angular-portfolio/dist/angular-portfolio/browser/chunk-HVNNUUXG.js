import {
  AboutComponent,
  ScrambleService
} from "./chunk-RA6XZXI6.js";
import {
  Router,
  RouterLink,
  RouterModule,
  ScrollService
} from "./chunk-SLAG2XNL.js";
import {
  CommonModule,
  Subscription,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RLCEPV6W.js";

// src/app/components/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  scrambleService;
  scrambledText1 = "";
  scrambledText2 = "";
  showScrollHint = false;
  subscriptions = new Subscription();
  constructor(scrambleService) {
    this.scrambleService = scrambleService;
  }
  ngOnInit() {
    this.startScrambling();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  startScrambling() {
    const firstPart = "Hey\nI'm Jaghan";
    this.subscriptions.add(this.scrambleService.scrambleAllAtOnce(firstPart, 20, 800).subscribe((text) => {
      this.scrambledText1 = text;
      if (text === firstPart) {
        setTimeout(() => {
          this.subscriptions.add(this.scrambleService.scrambleAllAtOnce("I build things for the web\u2026 and chase things in the sky \u2708\uFE0F\u{1F680}", 20, 800).subscribe((text2) => {
            this.scrambledText2 = text2;
            if (text2 === "I build things for the web\u2026 and chase things in the sky \u2708\uFE0F\u{1F680}") {
              setTimeout(() => {
                this.showScrollHint = true;
              }, 200);
            }
          }));
        }, 100);
      }
    }));
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)(\u0275\u0275directiveInject(ScrambleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 4, consts: [[1, "hero"], [1, "hero-container"], [1, "hero-content"], [1, "hero-text"], [1, "scrambled-text-1"], [1, "scrambled-text-2"], [1, "avatar-container"], ["src", "assets/images/avatar-waving.png", "alt", "Jaghan waving", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex';", 1, "avatar"], [1, "avatar-placeholder", 2, "display", "none"], [1, "avatar-icon"], [1, "scroll-hint"], [1, "scroll-arrow"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275element(9, "img", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275text(12, "\u{1F44B}");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "p");
      \u0275\u0275text(15, "Scroll to enter my universe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "\u2193");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.scrambledText1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.scrambledText2);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("visible", ctx.showScrollHint);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background: var(--bg-primary);\n  overflow: hidden;\n}\n.hero-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  z-index: 2;\n  padding: var(--space-5);\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-8);\n  align-items: center;\n  min-height: 70vh;\n}\n.hero-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: left;\n  animation: fadeIn 1s ease-out;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  animation: fadeIn 1s ease-out;\n  height: 100%;\n}\n.avatar-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent 0%,\n      rgba(11, 13, 16, 0.8) 60%,\n      var(--bg-primary) 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 600px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  filter: drop-shadow(0 0 30px var(--glow-accent));\n  position: relative;\n  z-index: 0;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-5);\n    text-align: center;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    text-align: center;\n    order: 2;\n  }\n  .avatar-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    order: 1;\n  }\n  .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    max-width: 250px;\n    max-height: 350px;\n  }\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 400px;\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  background: rgba(56, 189, 248, 0.1);\n  padding: var(--space-5);\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n@media (max-width: 768px) {\n  .avatar-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    max-width: 200px;\n    max-height: 300px;\n  }\n  .avatar-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--h1);\n  margin-bottom: var(--space-4);\n  color: var(--accent-secondary);\n  font-weight: var(--fw-bold);\n  white-space: pre-wrap;\n  min-height: 2.4em;\n  line-height: 1.3;\n}\n.hero-text[_ngcontent-%COMP%]   .scrambled-text-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.hero-text[_ngcontent-%COMP%]   .scrambled-text-2[_ngcontent-%COMP%] {\n  font-size: var(--body-lg);\n  color: var(--text-primary);\n  line-height: 1.6;\n  min-height: 1.6em;\n  margin-top: var(--space-3);\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--space-6);\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  color: var(--text-secondary);\n  text-align: center;\n}\n.scroll-hint.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.scroll-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-2);\n  font-size: var(--body-sm);\n  text-transform: uppercase;\n  letter-spacing: var(--letter-wide);\n}\n.scroll-hint[_ngcontent-%COMP%]   .scroll-arrow[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateX(-50%) translateY(0);\n  }\n  40% {\n    transform: translateX(-50%) translateY(-10px);\n  }\n  60% {\n    transform: translateX(-50%) translateY(-5px);\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src\\app\\components\\hero\\hero.component.ts", lineNumber: 13 });
})();

// src/app/components/path-split/path-split.component.ts
var PathSplitComponent = class _PathSplitComponent {
  router;
  scrollService;
  hoveredPath = null;
  constructor(router, scrollService) {
    this.router = router;
    this.scrollService = scrollService;
  }
  navigateToProfessional() {
    this.router.navigate(["/professional"]).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    });
  }
  static \u0275fac = function PathSplitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PathSplitComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ScrollService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PathSplitComponent, selectors: [["app-path-split"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 4, consts: [[1, "path-split", "section"], [1, "container"], [1, "section-title"], [1, "paths-container"], [1, "path-card", "professional", 3, "click", "mouseenter", "mouseleave"], [1, "path-content"], [1, "path-icon"], [1, "grid-overlay"], ["routerLink", "/human", 1, "path-card", "human", 3, "mouseenter", "mouseleave"], [1, "warm-overlay"]], template: function PathSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Choose how you want to know me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275listener("click", function PathSplitComponent_Template_div_click_5_listener() {
        return ctx.navigateToProfessional();
      })("mouseenter", function PathSplitComponent_Template_div_mouseenter_5_listener() {
        return ctx.hoveredPath = "professional";
      })("mouseleave", function PathSplitComponent_Template_div_mouseleave_5_listener() {
        return ctx.hoveredPath = null;
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "h3");
      \u0275\u0275text(8, "The Professional Orbit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Experience, skills, projects, and more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275text(12, "\u{1F680}");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275listener("mouseenter", function PathSplitComponent_Template_div_mouseenter_14_listener() {
        return ctx.hoveredPath = "human";
      })("mouseleave", function PathSplitComponent_Template_div_mouseleave_14_listener() {
        return ctx.hoveredPath = null;
      });
      \u0275\u0275elementStart(15, "div", 5)(16, "h3");
      \u0275\u0275text(17, "The Human Behind the Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Travel, stories, and the things that inspire me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 6);
      \u0275\u0275text(21, "\u{1F30D}");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "div", 9);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("hovered", ctx.hoveredPath === "professional");
      \u0275\u0275advance(9);
      \u0275\u0275classProp("hovered", ctx.hoveredPath === "human");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.path-split[_ngcontent-%COMP%] {\n  padding: var(--space-7) 0;\n  background: var(--bg-primary);\n}\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-7);\n  font-size: var(--h2);\n  color: var(--accent-secondary);\n  font-weight: var(--fw-semibold);\n}\n.paths-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: var(--space-6);\n  max-width: 1000px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .paths-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-4);\n  }\n}\n.path-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n  border: 2px solid var(--border-subtle);\n  border-radius: 12px;\n  padding: var(--space-6);\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.4s ease;\n  background: var(--bg-elevated);\n}\n.path-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-secondary);\n  transform: translateY(-10px);\n  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.2);\n}\n.path-card.professional[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(56, 189, 248, 0.1) 1px,\n      transparent 1px);\n  background-size: 20px 20px;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.path-card.professional.hovered[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.path-card.human[_ngcontent-%COMP%]   .warm-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.1) 0%,\n      rgba(249, 115, 22, 0.05) 100%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.path-card.human.hovered[_ngcontent-%COMP%]   .warm-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.path-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n}\n.path-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--h3);\n  margin-bottom: var(--space-3);\n  color: var(--accent-secondary);\n  font-weight: var(--fw-semibold);\n}\n.path-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--body);\n  color: var(--text-secondary);\n  margin-bottom: var(--space-5);\n}\n.path-content[_ngcontent-%COMP%]   .path-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-top: var(--space-3);\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n/*# sourceMappingURL=path-split.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PathSplitComponent, { className: "PathSplitComponent", filePath: "src\\app\\components\\path-split\\path-split.component.ts", lineNumber: 13 });
})();

// src/app/components/home/home.component.ts
var HomeComponent = class _HomeComponent {
  scrollService;
  constructor(scrollService) {
    this.scrollService = scrollService;
  }
  ngOnInit() {
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ScrollService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero")(1, "app-about")(2, "app-path-split");
    }
  }, dependencies: [CommonModule, HeroComponent, AboutComponent, PathSplitComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 15 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-HVNNUUXG.js.map
