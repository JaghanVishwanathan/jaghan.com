import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-RLCEPV6W.js";

// src/app/components/human/aviation-bridge/aviation-bridge.component.ts
var AviationBridgeComponent = class _AviationBridgeComponent {
  navigateToRocketRealm() {
    window.open("https://rocketrealm.jaghan.com", "_blank");
  }
  static \u0275fac = function AviationBridgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AviationBridgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AviationBridgeComponent, selectors: [["app-aviation-bridge"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 0, consts: [[1, "aviation-bridge", "section"], [1, "container"], [1, "bridge-content"], [1, "bridge-title"], [1, "bridge-text"], [1, "bridge-button", 3, "click"]], template: function AviationBridgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Some stories need more sky.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Explore my aviation universe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function AviationBridgeComponent_Template_button_click_7_listener() {
        return ctx.navigateToRocketRealm();
      });
      \u0275\u0275text(8, " Enter RocketRealm \u2192 ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule], styles: ['\n\n.aviation-bridge[_ngcontent-%COMP%] {\n  padding: var(--space-8) 0;\n  background: var(--bg-secondary);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.aviation-bridge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(56, 189, 248, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 50%,\n      rgba(249, 115, 22, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.bridge-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.bridge-title[_ngcontent-%COMP%] {\n  font-size: var(--h1);\n  color: var(--accent-secondary);\n  margin-bottom: var(--space-4);\n  font-weight: var(--fw-bold);\n}\n.bridge-text[_ngcontent-%COMP%] {\n  font-size: var(--body-lg);\n  color: var(--text-secondary);\n  margin-bottom: var(--space-6);\n}\n.bridge-button[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-7);\n  background: transparent;\n  border: 2px solid var(--accent-secondary);\n  border-radius: 50px;\n  color: var(--accent-secondary);\n  font-size: var(--body-lg);\n  font-weight: var(--fw-semibold);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.bridge-button[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: var(--accent-secondary);\n  transition: left 0.3s ease;\n  z-index: -1;\n}\n.bridge-button[_ngcontent-%COMP%]:hover {\n  color: var(--bg-primary);\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);\n}\n.bridge-button[_ngcontent-%COMP%]:hover::before {\n  left: 0;\n}\n/*# sourceMappingURL=aviation-bridge.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AviationBridgeComponent, { className: "AviationBridgeComponent", filePath: "src\\app\\components\\human\\aviation-bridge\\aviation-bridge.component.ts", lineNumber: 11 });
})();
export {
  AviationBridgeComponent
};
//# sourceMappingURL=chunk-7JCDSDZS.js.map
