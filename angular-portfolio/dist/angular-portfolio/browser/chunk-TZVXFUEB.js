import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RLCEPV6W.js";

// src/app/components/human/micro-journal/micro-journal.component.ts
function MicroJournalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2, "The Lazy Human behind this portfolio is currently crafting this section. Check back soon!");
    \u0275\u0275elementEnd()();
  }
}
var MicroJournalComponent = class _MicroJournalComponent {
  // Structure ready for content population
  journalEntries = [];
  static \u0275fac = function MicroJournalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MicroJournalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MicroJournalComponent, selectors: [["app-micro-journal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "micro-journal", "section"], [1, "container"], ["class", "journal-placeholder", 4, "ngIf"], [1, "journal-placeholder"]], template: function MicroJournalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275template(2, MicroJournalComponent_div_2_Template, 3, 0, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.journalEntries.length === 0);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.micro-journal[_ngcontent-%COMP%] {\n  padding: var(--space-7) 0;\n  background: var(--bg-primary);\n}\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-3);\n  font-size: var(--h2);\n  color: var(--accent-primary);\n  font-weight: var(--fw-semibold);\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-secondary);\n  margin-bottom: var(--space-7);\n  font-size: var(--body-lg);\n}\n.journal-grid[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-5);\n}\n.journal-entry[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--border-subtle);\n  transition: all 0.3s ease;\n  animation: fadeIn 0.6s ease-out;\n}\n.journal-entry[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.1);\n  border-color: var(--accent-primary);\n}\n.entry-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n.entry-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.journal-entry[_ngcontent-%COMP%]:hover   .entry-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.entry-content[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n}\n.entry-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--space-3);\n  font-size: var(--body-sm);\n  color: var(--text-secondary);\n}\n.entry-location[_ngcontent-%COMP%] {\n  color: var(--accent-primary);\n  font-weight: var(--fw-semibold);\n}\n.entry-date[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.entry-caption[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  line-height: 1.6;\n  font-size: var(--body);\n}\n.journal-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-7) var(--space-5);\n  color: var(--text-secondary);\n  font-style: italic;\n  font-size: var(--body-lg);\n}\n@media (max-width: 768px) {\n  .journal-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=micro-journal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MicroJournalComponent, { className: "MicroJournalComponent", filePath: "src\\app\\components\\human\\micro-journal\\micro-journal.component.ts", lineNumber: 19 });
})();
export {
  MicroJournalComponent
};
//# sourceMappingURL=chunk-TZVXFUEB.js.map
