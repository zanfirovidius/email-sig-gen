define("email-signature-generator/templates/components/paper-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element3, 'for');
          morphs[1] = dom.createAttrMorph(element3, 'class');
          morphs[2] = dom.createMorphAt(element3, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["get", "inputElementId", ["loc", [null, [2, 15], [2, 29]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "required", ["loc", [null, [2, 44], [2, 52]]]], "md-required"], [], ["loc", [null, [2, 39], [2, 68]]]]]]], ["content", "label", ["loc", [null, [2, 70], [2, 79]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "paper-icon", [["get", "icon", ["loc", [null, [6, 15], [6, 19]]]]], [], ["loc", [null, [6, 2], [6, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 34,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("textarea");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(22);
          morphs[0] = dom.createAttrMorph(element2, 'class');
          morphs[1] = dom.createAttrMorph(element2, 'id');
          morphs[2] = dom.createAttrMorph(element2, 'placeholder');
          morphs[3] = dom.createAttrMorph(element2, 'disabled');
          morphs[4] = dom.createAttrMorph(element2, 'autofocus');
          morphs[5] = dom.createAttrMorph(element2, 'onfocus');
          morphs[6] = dom.createAttrMorph(element2, 'onblur');
          morphs[7] = dom.createAttrMorph(element2, 'onkeydown');
          morphs[8] = dom.createAttrMorph(element2, 'oninput');
          morphs[9] = dom.createAttrMorph(element2, 'name');
          morphs[10] = dom.createAttrMorph(element2, 'rows');
          morphs[11] = dom.createAttrMorph(element2, 'cols');
          morphs[12] = dom.createAttrMorph(element2, 'maxlength');
          morphs[13] = dom.createAttrMorph(element2, 'tabindex');
          morphs[14] = dom.createAttrMorph(element2, 'required');
          morphs[15] = dom.createAttrMorph(element2, 'selectionEnd');
          morphs[16] = dom.createAttrMorph(element2, 'selectionStart');
          morphs[17] = dom.createAttrMorph(element2, 'selectionDirection');
          morphs[18] = dom.createAttrMorph(element2, 'wrap');
          morphs[19] = dom.createAttrMorph(element2, 'readonly');
          morphs[20] = dom.createAttrMorph(element2, 'form');
          morphs[21] = dom.createAttrMorph(element2, 'spellcheck');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-input ", ["subexpr", "if", [["get", "isInvalid", ["loc", [null, [11, 25], [11, 34]]]], "ng-invalid"], [], ["loc", [null, [11, 20], [11, 49]]]], " ", ["subexpr", "if", [["get", "isTouched", ["loc", [null, [11, 55], [11, 64]]]], "ng-dirty"], [], ["loc", [null, [11, 50], [11, 77]]]]]]], ["attribute", "id", ["get", "inputElementId", ["loc", [null, [12, 9], [12, 23]]]]], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [13, 18], [13, 29]]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [14, 15], [14, 23]]]]], ["attribute", "autofocus", ["get", "autofocus", ["loc", [null, [15, 16], [15, 25]]]]], ["attribute", "onfocus", ["get", "onFocus", ["loc", [null, [16, 14], [16, 21]]]]], ["attribute", "onblur", ["subexpr", "action", ["handleBlur"], [], ["loc", [null, [17, 11], [17, 34]]]]], ["attribute", "onkeydown", ["get", "onKeyDown", ["loc", [null, [18, 16], [18, 25]]]]], ["attribute", "oninput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [19, 12], [19, 36]]]]], ["attribute", "name", ["get", "passThru.name", ["loc", [null, [21, 11], [21, 24]]]]], ["attribute", "rows", ["get", "passThru.rows", ["loc", [null, [22, 11], [22, 24]]]]], ["attribute", "cols", ["get", "passThru.cols", ["loc", [null, [23, 11], [23, 24]]]]], ["attribute", "maxlength", ["get", "passThru.maxlength", ["loc", [null, [24, 16], [24, 34]]]]], ["attribute", "tabindex", ["get", "passThru.tabindex", ["loc", [null, [25, 15], [25, 32]]]]], ["attribute", "required", ["get", "passThru.required", ["loc", [null, [26, 15], [26, 32]]]]], ["attribute", "selectionEnd", ["get", "passThru.selectionEnd", ["loc", [null, [27, 19], [27, 40]]]]], ["attribute", "selectionStart", ["get", "passThru.selectionStart", ["loc", [null, [28, 21], [28, 44]]]]], ["attribute", "selectionDirection", ["get", "passThru.selectionDirection", ["loc", [null, [29, 25], [29, 52]]]]], ["attribute", "wrap", ["get", "passThru.wrap", ["loc", [null, [30, 11], [30, 24]]]]], ["attribute", "readonly", ["get", "passThru.readonly", ["loc", [null, [31, 15], [31, 32]]]]], ["attribute", "form", ["get", "passThru.form", ["loc", [null, [32, 11], [32, 24]]]]], ["attribute", "spellcheck", ["get", "passThru.spellcheck", ["loc", [null, [33, 17], [33, 36]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 72,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("input");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(35);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'id');
          morphs[2] = dom.createAttrMorph(element1, 'placeholder');
          morphs[3] = dom.createAttrMorph(element1, 'type');
          morphs[4] = dom.createAttrMorph(element1, 'disabled');
          morphs[5] = dom.createAttrMorph(element1, 'autofocus');
          morphs[6] = dom.createAttrMorph(element1, 'onfocus');
          morphs[7] = dom.createAttrMorph(element1, 'onblur');
          morphs[8] = dom.createAttrMorph(element1, 'onkeydown');
          morphs[9] = dom.createAttrMorph(element1, 'oninput');
          morphs[10] = dom.createAttrMorph(element1, 'accept');
          morphs[11] = dom.createAttrMorph(element1, 'autocomplete');
          morphs[12] = dom.createAttrMorph(element1, 'autosave');
          morphs[13] = dom.createAttrMorph(element1, 'form');
          morphs[14] = dom.createAttrMorph(element1, 'formaction');
          morphs[15] = dom.createAttrMorph(element1, 'formenctype');
          morphs[16] = dom.createAttrMorph(element1, 'formmethod');
          morphs[17] = dom.createAttrMorph(element1, 'formnovalidate');
          morphs[18] = dom.createAttrMorph(element1, 'formtarget');
          morphs[19] = dom.createAttrMorph(element1, 'height');
          morphs[20] = dom.createAttrMorph(element1, 'inputmode');
          morphs[21] = dom.createAttrMorph(element1, 'min');
          morphs[22] = dom.createAttrMorph(element1, 'maxlength');
          morphs[23] = dom.createAttrMorph(element1, 'max');
          morphs[24] = dom.createAttrMorph(element1, 'multiple');
          morphs[25] = dom.createAttrMorph(element1, 'name');
          morphs[26] = dom.createAttrMorph(element1, 'pattern');
          morphs[27] = dom.createAttrMorph(element1, 'readonly');
          morphs[28] = dom.createAttrMorph(element1, 'required');
          morphs[29] = dom.createAttrMorph(element1, 'selectionDirection');
          morphs[30] = dom.createAttrMorph(element1, 'size');
          morphs[31] = dom.createAttrMorph(element1, 'spellcheck');
          morphs[32] = dom.createAttrMorph(element1, 'step');
          morphs[33] = dom.createAttrMorph(element1, 'tabindex');
          morphs[34] = dom.createAttrMorph(element1, 'width');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-input ", ["subexpr", "if", [["get", "isInvalid", ["loc", [null, [36, 25], [36, 34]]]], "ng-invalid"], [], ["loc", [null, [36, 20], [36, 49]]]], "  ", ["subexpr", "if", [["get", "isTouched", ["loc", [null, [36, 56], [36, 65]]]], "ng-dirty"], [], ["loc", [null, [36, 51], [36, 78]]]]]]], ["attribute", "id", ["get", "inputElementId", ["loc", [null, [37, 9], [37, 23]]]]], ["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [38, 18], [38, 29]]]]], ["attribute", "type", ["get", "type", ["loc", [null, [39, 11], [39, 15]]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [40, 15], [40, 23]]]]], ["attribute", "autofocus", ["get", "autofocus", ["loc", [null, [41, 16], [41, 25]]]]], ["attribute", "onfocus", ["get", "onFocus", ["loc", [null, [42, 14], [42, 21]]]]], ["attribute", "onblur", ["subexpr", "action", ["handleBlur"], [], ["loc", [null, [43, 11], [43, 34]]]]], ["attribute", "onkeydown", ["get", "onKeyDown", ["loc", [null, [44, 16], [44, 25]]]]], ["attribute", "oninput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [45, 12], [45, 36]]]]], ["attribute", "accept", ["get", "passThru.accept", ["loc", [null, [47, 13], [47, 28]]]]], ["attribute", "autocomplete", ["get", "passThru.autocomplete", ["loc", [null, [48, 19], [48, 40]]]]], ["attribute", "autosave", ["get", "passThru.autosave", ["loc", [null, [49, 15], [49, 32]]]]], ["attribute", "form", ["get", "passThru.form", ["loc", [null, [50, 11], [50, 24]]]]], ["attribute", "formaction", ["get", "passThru.formaction", ["loc", [null, [51, 17], [51, 36]]]]], ["attribute", "formenctype", ["get", "passThru.formenctype", ["loc", [null, [52, 18], [52, 38]]]]], ["attribute", "formmethod", ["get", "passThru.formmethod", ["loc", [null, [53, 17], [53, 36]]]]], ["attribute", "formnovalidate", ["get", "passThru.formnovalidate", ["loc", [null, [54, 21], [54, 44]]]]], ["attribute", "formtarget", ["get", "passThru.formtarget", ["loc", [null, [55, 17], [55, 36]]]]], ["attribute", "height", ["get", "passThru.height", ["loc", [null, [56, 13], [56, 28]]]]], ["attribute", "inputmode", ["get", "passThru.inputmode", ["loc", [null, [57, 16], [57, 34]]]]], ["attribute", "min", ["get", "passThru.min", ["loc", [null, [58, 10], [58, 22]]]]], ["attribute", "maxlength", ["get", "passThru.maxlength", ["loc", [null, [59, 16], [59, 34]]]]], ["attribute", "max", ["get", "passThru.max", ["loc", [null, [60, 10], [60, 22]]]]], ["attribute", "multiple", ["get", "passThru.multiple", ["loc", [null, [61, 15], [61, 32]]]]], ["attribute", "name", ["get", "passThru.name", ["loc", [null, [62, 11], [62, 24]]]]], ["attribute", "pattern", ["get", "passThru.pattern", ["loc", [null, [63, 14], [63, 30]]]]], ["attribute", "readonly", ["get", "passThru.readonly", ["loc", [null, [64, 15], [64, 32]]]]], ["attribute", "required", ["get", "passThru.required", ["loc", [null, [65, 15], [65, 32]]]]], ["attribute", "selectionDirection", ["get", "passThru.selectionDirection", ["loc", [null, [66, 25], [66, 52]]]]], ["attribute", "size", ["get", "passThru.size", ["loc", [null, [67, 11], [67, 24]]]]], ["attribute", "spellcheck", ["get", "passThru.spellcheck", ["loc", [null, [68, 17], [68, 36]]]]], ["attribute", "step", ["get", "passThru.step", ["loc", [null, [69, 11], [69, 24]]]]], ["attribute", "tabindex", ["get", "passThru.tabindex", ["loc", [null, [70, 15], [70, 32]]]]], ["attribute", "width", ["get", "passThru.width", ["loc", [null, [71, 12], [71, 26]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 4
              },
              "end": {
                "line": 78,
                "column": 4
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-char-counter");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "renderCharCount", ["loc", [null, [77, 35], [77, 54]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 82,
                  "column": 6
                },
                "end": {
                  "line": 87,
                  "column": 6
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "paper-input-error ng-enter ng-enter-active");
              dom.setAttribute(el1, "ng-message", "");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'id');
              morphs[1] = dom.createMorphAt(element0, 1, 1);
              return morphs;
            },
            statements: [["attribute", "id", ["concat", ["error-", ["get", "inputElementId", ["loc", [null, [83, 25], [83, 39]]]], "-", ["get", "index", ["loc", [null, [83, 44], [83, 49]]]]]]], ["content", "error.message", ["loc", [null, [85, 10], [85, 27]]]]],
            locals: ["error", "index"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 80,
                "column": 2
              },
              "end": {
                "line": 89,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "md-input-messages-animation md-auto-hide");
            dom.setAttribute(el1, "ng-messages", "");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "validationErrorMessages", ["loc", [null, [82, 14], [82, 37]]]]], [], 0, null, ["loc", [null, [82, 6], [87, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 74,
              "column": 0
            },
            "end": {
              "line": 90,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "md-errors-spacer");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "maxlength", ["loc", [null, [76, 10], [76, 19]]]]], [], 0, null, ["loc", [null, [76, 4], [78, 11]]]], ["block", "if", [["get", "isInvalidAndTouched", ["loc", [null, [80, 8], [80, 27]]]]], [], 1, null, ["loc", [null, [80, 2], [89, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 0
            },
            "end": {
              "line": 94,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "paper-icon", [["get", "iconRight", ["loc", [null, [93, 15], [93, 24]]]]], [], ["loc", [null, [93, 2], [93, 26]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 95,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-input.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "label", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [5, 6], [5, 10]]]]], [], 1, null, ["loc", [null, [5, 0], [7, 7]]]], ["block", "if", [["get", "textarea", ["loc", [null, [9, 6], [9, 14]]]]], [], 2, 3, ["loc", [null, [9, 0], [72, 7]]]], ["block", "unless", [["get", "hideAllMessages", ["loc", [null, [74, 10], [74, 25]]]]], [], 4, null, ["loc", [null, [74, 0], [90, 11]]]], ["block", "if", [["get", "iconRight", ["loc", [null, [92, 6], [92, 15]]]]], [], 5, null, ["loc", [null, [92, 0], [94, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});