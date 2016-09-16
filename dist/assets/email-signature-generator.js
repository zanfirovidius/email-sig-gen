"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('email-signature-generator/app', ['exports', 'ember', 'email-signature-generator/resolver', 'ember-load-initializers', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorResolver, _emberLoadInitializers, _emailSignatureGeneratorConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].podModulePrefix,
    Resolver: _emailSignatureGeneratorResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emailSignatureGeneratorConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('email-signature-generator/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    model: [],
    code: false,

    actions: {
      viewTheCode: function viewTheCode() {
        this.set('code', !this.get('code'));
        console.log(this.get('code'));
      }
    }
  });
});
define('email-signature-generator/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("email-signature-generator/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h2");
            dom.setAttribute(el1, "style", "color: #fff;");
            var el2 = dom.createTextNode("\n      Email signature generator\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "flex");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-toolbar-tools", [], [], 0, null, ["loc", [null, [2, 2], [7, 26]]]]],
        locals: [],
        templates: [child0]
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
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/application/template.hbs"
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row m-t-lg p-l-lg p-r-md p-t-md p-b-md");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-6");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-6");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "m-t-xl");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "m-t-xl");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "paper-toolbar", [], [], 0, null, ["loc", [null, [1, 0], [8, 18]]]], ["inline", "ls-generator", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [12, 29], [12, 34]]]]], [], []]], ["loc", [null, [12, 8], [12, 36]]]], ["inline", "ls-preview", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [15, 27], [15, 32]]]]], [], []]], ["loc", [null, [15, 8], [15, 34]]]], ["inline", "ls-theCode", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [18, 31], [18, 36]]]]], [], []]], ["loc", [null, [18, 12], [18, 38]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('email-signature-generator/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'email-signature-generator/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emailSignatureGeneratorConfigEnvironment) {

  var name = _emailSignatureGeneratorConfigEnvironment['default'].APP.name;
  var version = _emailSignatureGeneratorConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('email-signature-generator/components/base-focusable', ['exports', 'ember-paper/components/base-focusable'], function (exports, _emberPaperComponentsBaseFocusable) {
  exports['default'] = _emberPaperComponentsBaseFocusable['default'];
});
define('email-signature-generator/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define("email-signature-generator/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define("email-signature-generator/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("email-signature-generator/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("email-signature-generator/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("email-signature-generator/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("email-signature-generator/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("email-signature-generator/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("email-signature-generator/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('email-signature-generator/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("email-signature-generator/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("email-signature-generator/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('email-signature-generator/components/ls-generator/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("email-signature-generator/components/ls-generator/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 6
                  },
                  "end": {
                    "line": 5,
                    "column": 24
                  }
                },
                "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
              },
              isEmpty: true,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
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
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
            statements: [["block", "text.headline", [], [], 0, null, ["loc", [null, [5, 6], [5, 42]]]]],
            locals: ["text"],
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
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "title.text", [], [], 0, null, ["loc", [null, [4, 4], [6, 19]]]]],
          locals: ["title"],
          templates: [child0]
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
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 36,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
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
            dom.setAttribute(el1, "layout", "");
            dom.setAttribute(el1, "layout-sm", "column");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "layout", "");
            dom.setAttribute(el1, "layout-sm", "column");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "layout", "");
            dom.setAttribute(el1, "layout-sm", "column");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment(" soccial icons ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "layout", "");
            dom.setAttribute(el1, "layout-sm", "column");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "layout", "");
            dom.setAttribute(el1, "layout-sm", "column");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(fragment, [5]);
            var element2 = dom.childAt(fragment, [9]);
            var element3 = dom.childAt(fragment, [11]);
            var morphs = new Array(11);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            morphs[3] = dom.createMorphAt(element1, 1, 1);
            morphs[4] = dom.createMorphAt(element1, 3, 3);
            morphs[5] = dom.createMorphAt(element2, 1, 1);
            morphs[6] = dom.createMorphAt(element2, 3, 3);
            morphs[7] = dom.createMorphAt(element2, 5, 5);
            morphs[8] = dom.createMorphAt(element3, 1, 1);
            morphs[9] = dom.createMorphAt(element3, 3, 3);
            morphs[10] = dom.createMorphAt(element3, 5, 5);
            return morphs;
          },
          statements: [["inline", "paper-input", [], ["flex", 50, "label", "Name", "value", ["subexpr", "@mut", [["get", "model.name", ["loc", [null, [10, 47], [10, 57]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.name", ["loc", [null, [10, 80], [10, 90]]]]], [], ["loc", [null, [10, 75], [10, 91]]]]], [], ["loc", [null, [10, 67], [10, 92]]]]], ["loc", [null, [10, 6], [10, 94]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Job Title", "value", ["subexpr", "@mut", [["get", "model.jobTitle", ["loc", [null, [11, 52], [11, 66]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.jobTitle", ["loc", [null, [11, 89], [11, 103]]]]], [], ["loc", [null, [11, 84], [11, 104]]]]], [], ["loc", [null, [11, 76], [11, 105]]]]], ["loc", [null, [11, 6], [11, 107]]]], ["inline", "paper-input", [], ["flex", 100, "label", "Address", "value", ["subexpr", "@mut", [["get", "model.address", ["loc", [null, [14, 51], [14, 64]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.address", ["loc", [null, [14, 87], [14, 100]]]]], [], ["loc", [null, [14, 82], [14, 101]]]]], [], ["loc", [null, [14, 74], [14, 102]]]]], ["loc", [null, [14, 6], [14, 104]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Direct phone", "value", ["subexpr", "@mut", [["get", "model.directPhone", ["loc", [null, [17, 55], [17, 72]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.directPhone", ["loc", [null, [17, 95], [17, 112]]]]], [], ["loc", [null, [17, 90], [17, 113]]]]], [], ["loc", [null, [17, 82], [17, 114]]]]], ["loc", [null, [17, 6], [17, 116]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Office phone", "value", ["subexpr", "@mut", [["get", "model.officePhone", ["loc", [null, [18, 55], [18, 72]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.officePhone", ["loc", [null, [18, 95], [18, 112]]]]], [], ["loc", [null, [18, 90], [18, 113]]]]], [], ["loc", [null, [18, 82], [18, 114]]]]], ["loc", [null, [18, 6], [18, 116]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Facebook", "value", ["subexpr", "@mut", [["get", "model.facebook", ["loc", [null, [24, 51], [24, 65]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.facebook", ["loc", [null, [24, 88], [24, 102]]]]], [], ["loc", [null, [24, 83], [24, 103]]]]], [], ["loc", [null, [24, 75], [24, 104]]]]], ["loc", [null, [24, 6], [24, 106]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Twitter", "value", ["subexpr", "@mut", [["get", "model.twitter", ["loc", [null, [25, 50], [25, 63]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.twitter", ["loc", [null, [25, 86], [25, 99]]]]], [], ["loc", [null, [25, 81], [25, 100]]]]], [], ["loc", [null, [25, 73], [25, 101]]]]], ["loc", [null, [25, 6], [25, 103]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Linkedin", "value", ["subexpr", "@mut", [["get", "model.linkedin", ["loc", [null, [26, 51], [26, 65]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.linkedin", ["loc", [null, [26, 88], [26, 102]]]]], [], ["loc", [null, [26, 83], [26, 103]]]]], [], ["loc", [null, [26, 75], [26, 104]]]]], ["loc", [null, [26, 6], [26, 106]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Skype", "value", ["subexpr", "@mut", [["get", "model.skype", ["loc", [null, [30, 48], [30, 59]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.skype", ["loc", [null, [30, 82], [30, 93]]]]], [], ["loc", [null, [30, 77], [30, 94]]]]], [], ["loc", [null, [30, 69], [30, 95]]]]], ["loc", [null, [30, 6], [30, 97]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Googleplus", "value", ["subexpr", "@mut", [["get", "model.googlePlus", ["loc", [null, [31, 53], [31, 69]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.googlePlus", ["loc", [null, [31, 92], [31, 108]]]]], [], ["loc", [null, [31, 87], [31, 109]]]]], [], ["loc", [null, [31, 79], [31, 110]]]]], ["loc", [null, [31, 6], [31, 112]]]], ["inline", "paper-input", [], ["flex", 50, "label", "Youtube", "value", ["subexpr", "@mut", [["get", "model.youtube", ["loc", [null, [32, 50], [32, 63]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.youtube", ["loc", [null, [32, 86], [32, 99]]]]], [], ["loc", [null, [32, 81], [32, 100]]]]], [], ["loc", [null, [32, 73], [32, 101]]]]], ["loc", [null, [32, 6], [32, 103]]]]],
          locals: [],
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
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 37,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "card.title", [], [], 0, null, ["loc", [null, [3, 2], [7, 17]]]], ["block", "card.content", [], [], 1, null, ["loc", [null, [8, 2], [36, 19]]]]],
        locals: ["card"],
        templates: [child0, child1]
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
            "line": 50,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/components/ls-generator/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "m-t-md");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-12");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Adding to your email client");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("In your email client, open the email signature settings and copy paste the signature preview from this page into your email client's new signature box. ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("For more instructions please see our ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "https://htmlsig.zendesk.com/hc/en-us/sections/200647278-Installing-Signature");
        dom.setAttribute(el4, "target", "_blank");
        var el5 = dom.createTextNode("instructions");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" on our help page.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("For Outlook 2003-2010 and Thunderbird please download your signature and follow these ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "https://htmlsig.zendesk.com/hc/en-us/articles/204983037-How-do-I-add-a-email-signature-to-Outlook-2003-2013-");
        dom.setAttribute(el4, "target", "_blank");
        var el5 = dom.createTextNode("instructions");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" to install it to your email client.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
      statements: [["block", "paper-card", [], [], 0, null, ["loc", [null, [2, 0], [37, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('email-signature-generator/components/ls-preview/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("email-signature-generator/components/ls-preview/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 4
            },
            "end": {
              "line": 30,
              "column": 4
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Direct ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element7, 'href');
          morphs[1] = dom.createMorphAt(element7, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", ["tel:", ["get", "model.directPhone", ["loc", [null, [29, 28], [29, 45]]]]]]], ["content", "model.directPhone", ["loc", [null, [29, 49], [29, 70]]]]],
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
              "line": 31,
              "column": 4
            },
            "end": {
              "line": 31,
              "column": 56
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" - ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
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
              "line": 32,
              "column": 4
            },
            "end": {
              "line": 34,
              "column": 4
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Office ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element6, 'href');
          morphs[1] = dom.createMorphAt(element6, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["concat", ["tel:", ["get", "model.officePhone", ["loc", [null, [33, 28], [33, 45]]]]]]], ["content", "model.officePhone", ["loc", [null, [33, 49], [33, 70]]]]],
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
              "line": 47,
              "column": 2
            },
            "end": {
              "line": 55,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "facebook.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Facebook%403x.png");
          dom.setAttribute(el2, "alt", "Facebook");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element5, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.facebook", ["loc", [null, [52, 113], [52, 127]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 2
            },
            "end": {
              "line": 65,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "linkedin.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+LinkedIn%403x.png");
          dom.setAttribute(el2, "alt", "Linkedin");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element4, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.linkedin", ["loc", [null, [62, 113], [62, 127]]]]]]]],
        locals: [],
        templates: []
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
              "line": 67,
              "column": 2
            },
            "end": {
              "line": 75,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "twitter.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Twitter%403x.png");
          dom.setAttribute(el2, "alt", "Twitter");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element3, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.twitter", ["loc", [null, [72, 113], [72, 126]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 77,
              "column": 2
            },
            "end": {
              "line": 85,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "skype.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Skype%403x.png");
          dom.setAttribute(el2, "alt", "Skype");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element2, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.skype", ["loc", [null, [82, 113], [82, 124]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 87,
              "column": 2
            },
            "end": {
              "line": 95,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "googleplus.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Google+Plus%403x.png");
          dom.setAttribute(el2, "alt", "GooglePlus");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.googlePlus", ["loc", [null, [92, 113], [92, 129]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 97,
              "column": 2
            },
            "end": {
              "line": 105,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "style", "white-space: nowrap; display: inline;");
          dom.setAttribute(el1, "class", "signature_facebook-sep social-sep");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
          dom.setAttribute(el2, "width", "8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "style", "text-decoration: none; display: inline;");
          dom.setAttribute(el1, "class", "social signature_facebook-target sig-hide");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "style", "margin-bottom:2px; border:none; display:inline;");
          dom.setAttribute(el2, "data-filename", "youtube.png");
          dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+YouTube+2%403x.png");
          dom.setAttribute(el2, "alt", "Youtube");
          dom.setAttribute(el2, "height", "24");
          dom.setAttribute(el2, "width", "24");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "model.youtube", ["loc", [null, [102, 113], [102, 126]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 107,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/components/ls-preview/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "style", "font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "font-weight: bold; font-size: 14px; color: #1491d8; display: inline;");
        dom.setAttribute(el2, "class", "txt signature_name-target sig-hide");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "email-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "color: rgb(144, 144, 144); display: inline;");
        dom.setAttribute(el2, "class", "txt signature_jobtitle-target sig-hide");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "email-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "email-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "style", "font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Asset+1.png");
        dom.setAttribute(el2, "alt", "");
        dom.setAttribute(el2, "class", "sig-logo");
        dom.setAttribute(el2, "height", "24");
        dom.setAttribute(el2, "border", "0");
        dom.setAttribute(el2, "width", "146");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "email-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "color: rgb(144, 144, 144); display: inline;");
        dom.setAttribute(el2, "class", "txt signature_address-target sig-hide");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "email-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "color: rgb(144, 144, 144); display: inline;");
        dom.setAttribute(el2, "class", "txt signature_mobilephone-target sig-hide");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "address-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "style", "display: inline;");
        dom.setAttribute(el2, "class", "website-sep break");
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "social-list");
        dom.setAttribute(el1, "style", "font-size: 0px; line-height: 0; font-family: Helvetica,Arial,sans-serif;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "style", "text-decoration: none; display: inline;");
        dom.setAttribute(el2, "class", "social signature_facebook-target sig-hide");
        dom.setAttribute(el2, "href", "http://www.stormgroup.net/en/");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "style", "margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el3, "data-filename", "stormgroup.png");
        dom.setAttribute(el3, "src", "https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Storm+O%403x.png");
        dom.setAttribute(el3, "alt", "Stormgroup");
        dom.setAttribute(el3, "height", "24");
        dom.setAttribute(el3, "width", "24");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element8 = dom.childAt(fragment, [0]);
        var element9 = dom.childAt(fragment, [2]);
        var element10 = dom.childAt(element9, [9]);
        var element11 = dom.childAt(fragment, [4]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element8, [5]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element9, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(element10, 1, 1);
        morphs[4] = dom.createMorphAt(element10, 3, 3);
        morphs[5] = dom.createMorphAt(element10, 5, 5);
        morphs[6] = dom.createMorphAt(element11, 3, 3);
        morphs[7] = dom.createMorphAt(element11, 5, 5);
        morphs[8] = dom.createMorphAt(element11, 7, 7);
        morphs[9] = dom.createMorphAt(element11, 9, 9);
        morphs[10] = dom.createMorphAt(element11, 11, 11);
        morphs[11] = dom.createMorphAt(element11, 13, 13);
        return morphs;
      },
      statements: [["content", "model.name", ["loc", [null, [4, 4], [4, 18]]]], ["content", "model.jobTitle", ["loc", [null, [10, 4], [10, 22]]]], ["content", "model.address", ["loc", [null, [22, 4], [22, 21]]]], ["block", "if", [["get", "model.directPhone", ["loc", [null, [28, 10], [28, 27]]]]], [], 0, null, ["loc", [null, [28, 4], [30, 11]]]], ["block", "if", [["subexpr", "and", [["get", "model.directPhone", ["loc", [null, [31, 15], [31, 32]]]], ["get", "model.officePhone", ["loc", [null, [31, 33], [31, 50]]]]], [], ["loc", [null, [31, 10], [31, 51]]]]], [], 1, null, ["loc", [null, [31, 4], [31, 63]]]], ["block", "if", [["get", "model.officePhone", ["loc", [null, [32, 10], [32, 27]]]]], [], 2, null, ["loc", [null, [32, 4], [34, 11]]]], ["block", "if", [["get", "model.facebook", ["loc", [null, [47, 8], [47, 22]]]]], [], 3, null, ["loc", [null, [47, 2], [55, 9]]]], ["block", "if", [["get", "model.linkedin", ["loc", [null, [57, 8], [57, 22]]]]], [], 4, null, ["loc", [null, [57, 2], [65, 9]]]], ["block", "if", [["get", "model.twitter", ["loc", [null, [67, 8], [67, 21]]]]], [], 5, null, ["loc", [null, [67, 2], [75, 9]]]], ["block", "if", [["get", "model.skype", ["loc", [null, [77, 8], [77, 19]]]]], [], 6, null, ["loc", [null, [77, 2], [85, 9]]]], ["block", "if", [["get", "model.googlePlus", ["loc", [null, [87, 8], [87, 24]]]]], [], 7, null, ["loc", [null, [87, 2], [95, 9]]]], ["block", "if", [["get", "model.youtube", ["loc", [null, [97, 8], [97, 21]]]]], [], 8, null, ["loc", [null, [97, 2], [105, 9]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  })());
});
define('email-signature-generator/components/ls-the-code/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      new Clipboard('.clipboard');
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        _this.$().find('.clipboard').attr('data-clipboard-target', '#toClipboard');
      });
    },

    theCode: _ember['default'].computed('model.name', 'model.jobTitle', 'model.address', 'model.directPhone', 'model.officePhone', 'model.facebook', 'model.twitter', 'model.linkedin', 'model.skype', 'model.googlePlus', 'model.youtube', function () {
      var directPhone = '';
      var officePhone = '';
      var linePhone = '';
      var facebook = '';
      var twitter = '';
      var linkedin = '';
      var skype = '';
      var googlePlus = '';
      var youtube = '';

      if (this.get('model.directPhone')) {
        directPhone = 'Direct <a href="tel:' + this.get('model.directPhone') + '">' + this.get('model.directPhone') + '</a>';
      }

      if (this.get('model.officePhone')) {
        officePhone = 'Office <a href="tel:' + this.get('model.officePhone') + '">' + this.get('model.officePhone') + '</a>';
      }

      if (this.get('model.officePhone') && this.get('model.directPhone')) {
        linePhone = ' - ';
      }

      if (this.get('model.facebook')) {
        facebook = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.facebook') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="facebook.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Facebook%403x.png" alt="Facebook" height="24" width="24">\n        </a>';
      }

      if (this.get('model.twitter')) {
        twitter = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.twitter') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="twitter.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Twitter%403x.png" alt="Twitter" height="24" width="24">\n        </a>';
      }

      if (this.get('model.linkedin')) {
        linkedin = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.linkedin') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="linkedin.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+LinkedIn%403x.png" alt="Linkedin" height="24" width="24">\n        </a>';
      }

      if (this.get('model.skype')) {
        skype = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.skype') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="skype.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Skype%403x.png" alt="Skype" height="24" width="24">\n        </a>';
      }

      if (this.get('model.googlePlus')) {
        googlePlus = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.googlePlus') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="googlePlus.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Google+Plus%403x.png" alt="GooglePlus" height="24" width="24">\n        </a>';
      }

      if (this.get('model.youtube')) {
        youtube = '\n        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">\n          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">\n        </span>\n\n        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="' + this.get('model.youtube') + '">\n          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="youtube.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+YouTube+2%403x.png" alt="Youtube" height="24" width="24">\n        </a>';
      }

      return '<p style="font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;">\n      <span style="font-weight: bold; font-size: 14px; color: #1491d8; display: inline;" class="txt signature_name-target sig-hide">' + this.get('model.name') + '\n      </span>\n      <span style="display: inline;" class="email-sep break"><br></span>\n      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_jobtitle-target sig-hide">\n        ' + this.get('model.jobTitle') + '\n      </span>\n      <span style="display: inline;" class="email-sep break"><br></span>\n      <span style="display: inline;" class="email-sep break"><br></span>\n    </p>\n    <p style="font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;">\n      <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Asset+1.png" alt="" class="sig-logo" height="24" border="0" width="146">\n      <span style="display: inline;" class="email-sep break"><br></span>\n      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_address-target sig-hide">\n        ' + this.get('model.address') + '\n      </span>\n      <span style="display: inline;" class="email-sep break"><br></span>\n      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_mobilephone-target sig-hide">\n        ' + directPhone + linePhone + officePhone + '\n      </span>\n      <span style="display: inline;" class="address-sep break"><br></span>\n      <span style="display: inline;" class="website-sep break"><br></span>\n    </p>\n    <p class="social-list" style="font-size: 0px; line-height: 0; font-family: Helvetica,Arial,sans-serif;">\n      <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="http://www.stormgroup.net/en/">\n        <img style="margin-bottom:2px; border:none; display:inline;" data-filename="stormgroup.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Storm+O%403x.png" alt="Stormgroup" height="24" width="24">\n      </a>\n      ' + facebook + linkedin + twitter + skype + googlePlus + youtube + '\n    </p>\n';
    }),

    theCodeForDownload: _ember['default'].computed('theCode', function () {
      return 'data:html/plain;charset=utf-8,' + encodeURIComponent('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><body>' + this.get('theCode') + '</body></html>');
    })

  });
});
define("email-signature-generator/components/ls-the-code/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 78
            }
          },
          "moduleName": "email-signature-generator/components/ls-the-code/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Copy to clipboard");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
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
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/components/ls-the-code/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-lg-12");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Please copy the code and paste it in your Email Client app in the signature section.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        dom.setAttribute(el2, "id", "toClipboard");
        dom.setAttribute(el2, "class", "the-code");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "m-t-xl");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "style", "display: inline-flex;");
        dom.setAttribute(el3, "class", "clipboard ember-view paper-button md-default-theme md-button md-primary md-raised");
        dom.setAttribute(el3, "download", "signature.html");
        var el4 = dom.createTextNode("\n      Download Template\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-ripple-container");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createAttrMorph(element2, 'href');
        return morphs;
      },
      statements: [["content", "theCode", ["loc", [null, [4, 4], [4, 15]]]], ["block", "paper-button", [], ["raised", true, "warn", true, "class", "clipboard"], 0, null, ["loc", [null, [7, 4], [7, 95]]]], ["attribute", "href", ["concat", [["get", "theCodeForDownload", ["loc", [null, [9, 161], [9, 179]]]]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('email-signature-generator/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _emberPaperComponentsPaperAutocompleteHighlight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteHighlight['default'];
    }
  });
});
define('email-signature-generator/components/paper-autocomplete-item', ['exports', 'ember-paper/components/paper-autocomplete-item'], function (exports, _emberPaperComponentsPaperAutocompleteItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteItem['default'];
    }
  });
});
define('email-signature-generator/components/paper-autocomplete-list', ['exports', 'ember-paper/components/paper-autocomplete-list'], function (exports, _emberPaperComponentsPaperAutocompleteList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteList['default'];
    }
  });
});
define('email-signature-generator/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _emberPaperComponentsPaperAutocomplete) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocomplete['default'];
    }
  });
});
define('email-signature-generator/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _emberPaperComponentsPaperBackdrop) {
  exports['default'] = _emberPaperComponentsPaperBackdrop['default'];
});
define('email-signature-generator/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _emberPaperComponentsPaperButton) {
  exports['default'] = _emberPaperComponentsPaperButton['default'];
});
define('email-signature-generator/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _emberPaperComponentsPaperCardActions) {
  exports['default'] = _emberPaperComponentsPaperCardActions['default'];
});
define('email-signature-generator/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _emberPaperComponentsPaperCardAvatar) {
  exports['default'] = _emberPaperComponentsPaperCardAvatar['default'];
});
define('email-signature-generator/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _emberPaperComponentsPaperCardContent) {
  exports['default'] = _emberPaperComponentsPaperCardContent['default'];
});
define('email-signature-generator/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _emberPaperComponentsPaperCardHeaderHeadline) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderHeadline['default'];
});
define('email-signature-generator/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _emberPaperComponentsPaperCardHeaderSubhead) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderSubhead['default'];
});
define('email-signature-generator/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _emberPaperComponentsPaperCardHeaderText) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderText['default'];
});
define('email-signature-generator/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _emberPaperComponentsPaperCardHeaderTitle) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderTitle['default'];
});
define('email-signature-generator/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _emberPaperComponentsPaperCardHeader) {
  exports['default'] = _emberPaperComponentsPaperCardHeader['default'];
});
define('email-signature-generator/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _emberPaperComponentsPaperCardIconActions) {
  exports['default'] = _emberPaperComponentsPaperCardIconActions['default'];
});
define('email-signature-generator/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _emberPaperComponentsPaperCardImage) {
  exports['default'] = _emberPaperComponentsPaperCardImage['default'];
});
define('email-signature-generator/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _emberPaperComponentsPaperCardMedia) {
  exports['default'] = _emberPaperComponentsPaperCardMedia['default'];
});
define('email-signature-generator/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _emberPaperComponentsPaperCardTitleMedia) {
  exports['default'] = _emberPaperComponentsPaperCardTitleMedia['default'];
});
define('email-signature-generator/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _emberPaperComponentsPaperCardTitleText) {
  exports['default'] = _emberPaperComponentsPaperCardTitleText['default'];
});
define('email-signature-generator/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _emberPaperComponentsPaperCardTitle) {
  exports['default'] = _emberPaperComponentsPaperCardTitle['default'];
});
define('email-signature-generator/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _emberPaperComponentsPaperCard) {
  exports['default'] = _emberPaperComponentsPaperCard['default'];
});
define('email-signature-generator/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _emberPaperComponentsPaperCheckbox) {
  exports['default'] = _emberPaperComponentsPaperCheckbox['default'];
});
define('email-signature-generator/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _emberPaperComponentsPaperContent) {
  exports['default'] = _emberPaperComponentsPaperContent['default'];
});
define('email-signature-generator/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _emberPaperComponentsPaperDialogActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogActions['default'];
    }
  });
});
define('email-signature-generator/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _emberPaperComponentsPaperDialogContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContainer['default'];
    }
  });
});
define('email-signature-generator/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _emberPaperComponentsPaperDialogContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContent['default'];
    }
  });
});
define('email-signature-generator/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _emberPaperComponentsPaperDialogInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogInner['default'];
    }
  });
});
define('email-signature-generator/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _emberPaperComponentsPaperDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialog['default'];
    }
  });
});
define('email-signature-generator/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _emberPaperComponentsPaperDivider) {
  exports['default'] = _emberPaperComponentsPaperDivider['default'];
});
define('email-signature-generator/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _emberPaperComponentsPaperForm) {
  exports['default'] = _emberPaperComponentsPaperForm['default'];
});
define('email-signature-generator/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _emberPaperComponentsPaperGridList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridList['default'];
    }
  });
});
define('email-signature-generator/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _emberPaperComponentsPaperGridTileFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTileFooter['default'];
    }
  });
});
define('email-signature-generator/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _emberPaperComponentsPaperGridTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTile['default'];
    }
  });
});
define('email-signature-generator/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _emberPaperComponentsPaperIcon) {
  exports['default'] = _emberPaperComponentsPaperIcon['default'];
});
define('email-signature-generator/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _emberPaperComponentsPaperInput) {
  exports['default'] = _emberPaperComponentsPaperInput['default'];
});
define('email-signature-generator/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _emberPaperComponentsPaperItem) {
  exports['default'] = _emberPaperComponentsPaperItem['default'];
});
define('email-signature-generator/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _emberPaperComponentsPaperList) {
  exports['default'] = _emberPaperComponentsPaperList['default'];
});
define('email-signature-generator/components/paper-menu-container-wrap', ['exports', 'ember-paper/components/paper-menu-container-wrap'], function (exports, _emberPaperComponentsPaperMenuContainerWrap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContainerWrap['default'];
    }
  });
});
define('email-signature-generator/components/paper-menu-container', ['exports', 'ember-paper/components/paper-menu-container'], function (exports, _emberPaperComponentsPaperMenuContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContainer['default'];
    }
  });
});
define('email-signature-generator/components/paper-menu-content-pane', ['exports', 'ember-paper/components/paper-menu-content-pane'], function (exports, _emberPaperComponentsPaperMenuContentPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContentPane['default'];
    }
  });
});
define('email-signature-generator/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _emberPaperComponentsPaperMenuContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContent['default'];
    }
  });
});
define('email-signature-generator/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _emberPaperComponentsPaperMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuItem['default'];
    }
  });
});
define('email-signature-generator/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _emberPaperComponentsPaperMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenu['default'];
    }
  });
});
define('email-signature-generator/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _emberPaperComponentsPaperOptgroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperOptgroup['default'];
    }
  });
});
define('email-signature-generator/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _emberPaperComponentsPaperOption) {
  exports['default'] = _emberPaperComponentsPaperOption['default'];
});
define('email-signature-generator/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _emberPaperComponentsPaperProgressCircular) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressCircular['default'];
    }
  });
});
define('email-signature-generator/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _emberPaperComponentsPaperProgressLinear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressLinear['default'];
    }
  });
});
define('email-signature-generator/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _emberPaperComponentsPaperRadioGroup) {
  exports['default'] = _emberPaperComponentsPaperRadioGroup['default'];
});
define('email-signature-generator/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _emberPaperComponentsPaperRadio) {
  exports['default'] = _emberPaperComponentsPaperRadio['default'];
});
define('email-signature-generator/components/paper-select-container', ['exports', 'ember-paper/components/paper-select-container'], function (exports, _emberPaperComponentsPaperSelectContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectContainer['default'];
    }
  });
});
define('email-signature-generator/components/paper-select-core', ['exports', 'ember-paper/components/paper-select-core'], function (exports, _emberPaperComponentsPaperSelectCore) {
  exports['default'] = _emberPaperComponentsPaperSelectCore['default'];
});
define('email-signature-generator/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _emberPaperComponentsPaperSelectHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectHeader['default'];
    }
  });
});
define('email-signature-generator/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _emberPaperComponentsPaperSelectMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenu['default'];
    }
  });
});
define('email-signature-generator/components/paper-select-value', ['exports', 'ember-paper/components/paper-select-value'], function (exports, _emberPaperComponentsPaperSelectValue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectValue['default'];
    }
  });
});
define('email-signature-generator/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _emberPaperComponentsPaperSelect) {
  exports['default'] = _emberPaperComponentsPaperSelect['default'];
});
define('email-signature-generator/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _emberPaperComponentsPaperSidenavContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSidenavContainer['default'];
    }
  });
});
define('email-signature-generator/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _emberPaperComponentsPaperSidenavInner) {
  exports['default'] = _emberPaperComponentsPaperSidenavInner['default'];
});
define('email-signature-generator/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _emberPaperComponentsPaperSidenavToggle) {
  exports['default'] = _emberPaperComponentsPaperSidenavToggle['default'];
});
define('email-signature-generator/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _emberPaperComponentsPaperSidenav) {
  exports['default'] = _emberPaperComponentsPaperSidenav['default'];
});
define('email-signature-generator/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _emberPaperComponentsPaperSlider) {
  exports['default'] = _emberPaperComponentsPaperSlider['default'];
});
define('email-signature-generator/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _emberPaperComponentsPaperSubheader) {
  exports['default'] = _emberPaperComponentsPaperSubheader['default'];
});
define('email-signature-generator/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _emberPaperComponentsPaperSwitch) {
  exports['default'] = _emberPaperComponentsPaperSwitch['default'];
});
define('email-signature-generator/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _emberPaperComponentsPaperToolbarTools) {
  exports['default'] = _emberPaperComponentsPaperToolbarTools['default'];
});
define('email-signature-generator/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _emberPaperComponentsPaperToolbar) {
  exports['default'] = _emberPaperComponentsPaperToolbar['default'];
});
define('email-signature-generator/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _emberCssTransitionsComponentsTransitionGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsComponentsTransitionGroup['default'];
    }
  });
});
define('email-signature-generator/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('email-signature-generator/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('email-signature-generator/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _emberPaperHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore.underscore;
    }
  });
});
define('email-signature-generator/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('email-signature-generator/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('email-signature-generator/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('email-signature-generator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'email-signature-generator/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emailSignatureGeneratorConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emailSignatureGeneratorConfigEnvironment['default'].APP.name, _emailSignatureGeneratorConfigEnvironment['default'].APP.version)
  };
});
define('email-signature-generator/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('email-signature-generator/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('email-signature-generator/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('email-signature-generator/initializers/export-application-global', ['exports', 'ember', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emailSignatureGeneratorConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emailSignatureGeneratorConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emailSignatureGeneratorConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('email-signature-generator/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("email-signature-generator/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('email-signature-generator/initializers/paper-wormhole', ['exports', 'ember-paper/initializers/paper-wormhole'], function (exports, _emberPaperInitializersPaperWormhole) {
  exports['default'] = {
    name: 'paper-wormhole',
    initialize: _emberPaperInitializersPaperWormhole['default']
  };
});
define('email-signature-generator/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('email-signature-generator/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('email-signature-generator/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("email-signature-generator/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('email-signature-generator/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _emberCssTransitionsMixinsTransitionMixin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsMixinsTransitionMixin['default'];
    }
  });
});
define('email-signature-generator/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('email-signature-generator/router', ['exports', 'ember', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emailSignatureGeneratorConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('email-signature-generator/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('email-signature-generator/services/constants', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    sniffer: _ember['default'].inject.service('sniffer'),

    webkit: _ember['default'].computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },

    CSS: _ember['default'].computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: _ember['default'].Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define("email-signature-generator/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('email-signature-generator/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _emberPaperServicesPaperSidenav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperServicesPaperSidenav['default'];
    }
  });
});
define('email-signature-generator/services/sniffer', ['exports', 'ember'], function (exports, _ember) {

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports['default'] = _ember['default'].Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: _ember['default'].computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = undefined;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = undefined;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
/* globals FastBoot */
define('email-signature-generator/services/transition-events', ['exports', 'ember-css-transitions/services/transition-events'], function (exports, _emberCssTransitionsServicesTransitionEvents) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsServicesTransitionEvents['default'];
    }
  });
});
define('email-signature-generator/services/util', ['exports', 'ember'], function (exports, _ember) {

  var Util = _ember['default'].Service.extend({

    // Disables scroll around the passed element.
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = _ember['default'].$(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0);

      var body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = _ember['default'].$('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;

        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },

    /*
     * supplant() method from Crockford's `Remedial Javascript`
     * Equivalent to use of $interpolate; without dependency on
     * interpolation symbols and scope. Note: the '{<token>}' can
     * be property names, property chains, or array indices.
     */
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },
    nextTick: (function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    })(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports['default'] = Util;
});
define("email-signature-generator/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/application.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/base-focusable", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/base-focusable.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-autocomplete-highlight", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-autocomplete-highlight.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "highlight", ["loc", [null, [1, 0], [1, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-autocomplete-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-autocomplete-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "label", ["loc", [null, [1, 8], [1, 13]]]]], [], ["loc", [null, [1, 0], [1, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-autocomplete", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["inline", "paper-input", [], ["type", "search", "label", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [5, 12], [5, 23]]]]], [], []], "focus-in", "inputFocusIn", "focus-out", "inputFocusOut", "key-down", "inputKeyDown", "value", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [9, 12], [9, 22]]]]], [], []], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchText", ["loc", [null, [10, 28], [10, 38]]]]], [], ["loc", [null, [10, 23], [10, 39]]]]], [], ["loc", [null, [10, 15], [10, 40]]]], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [11, 15], [11, 23]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [12, 15], [12, 23]]]]], [], []], "flex", true], ["loc", [null, [3, 4], [13, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 31,
                  "column": 6
                },
                "end": {
                  "line": 33,
                  "column": 6
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
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
            statements: [["inline", "paper-icon", ["close"], [], ["loc", [null, [32, 8], [32, 30]]]]],
            locals: [],
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
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 34,
                "column": 4
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "paper-button", [], ["iconButton", true, "themed", false, "onClick", ["subexpr", "action", ["clear"], [], ["loc", [null, [31, 59], [31, 75]]]]], 0, null, ["loc", [null, [31, 6], [33, 23]]]]],
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
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 36,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "search", "flex", true, "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 18], [17, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [18, 12], [18, 22]]]]], [], []], "focus-in", "inputFocusIn", "focus-out", "inputFocusOut", "key-down", "inputKeyDown", "autocomplete", "off", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [23, 15], [23, 23]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [24, 15], [24, 23]]]]], [], []], "aria-haspopup", true, "aria-autocomplete", "list", "aria-activedescendant", "", "aria-expanded", ["subexpr", "@mut", [["get", "notHidden", ["loc", [null, [28, 20], [28, 29]]]]], [], []]], ["loc", [null, [15, 4], [28, 31]]]], ["block", "if", [["get", "enableClearButton", ["loc", [null, [30, 10], [30, 27]]]]], [], 0, null, ["loc", [null, [30, 4], [34, 11]]]]],
        locals: [],
        templates: [child0]
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
              "line": 38,
              "column": 2
            },
            "end": {
              "line": 40,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
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
        statements: [["content", "paper-progress-linear", ["loc", [null, [39, 4], [39, 29]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.6",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 49,
                      "column": 12
                    },
                    "end": {
                      "line": 51,
                      "column": 12
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("              ");
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
                statements: [["inline", "yield", [["get", "searchText", ["loc", [null, [50, 22], [50, 32]]]], ["get", "item", ["loc", [null, [50, 33], [50, 37]]]], ["get", "index", ["loc", [null, [50, 38], [50, 43]]]]], [], ["loc", [null, [50, 14], [50, 45]]]]],
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
                        "line": 52,
                        "column": 14
                      },
                      "end": {
                        "line": 54,
                        "column": 14
                      }
                    },
                    "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                ");
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
                  statements: [["inline", "component", [["get", "itemComponent", ["loc", [null, [53, 28], [53, 41]]]]], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [53, 53], [53, 63]]]]], [], []], "label", ["subexpr", "@mut", [["get", "label", ["loc", [null, [53, 70], [53, 75]]]]], [], []], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [53, 82], [53, 87]]]]], [], []]], ["loc", [null, [53, 16], [53, 89]]]]],
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
                        "line": 54,
                        "column": 14
                      },
                      "end": {
                        "line": 56,
                        "column": 14
                      }
                    },
                    "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                ");
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
                  statements: [["inline", "paper-autocomplete-highlight", [], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [55, 58], [55, 68]]]]], [], []], "label", ["subexpr", "@mut", [["get", "label", ["loc", [null, [55, 75], [55, 80]]]]], [], []]], ["loc", [null, [55, 16], [55, 82]]]]],
                  locals: [],
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
                      "line": 51,
                      "column": 12
                    },
                    "end": {
                      "line": 57,
                      "column": 12
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["block", "if", [["get", "itemComponent", ["loc", [null, [52, 20], [52, 33]]]]], [], 0, 1, ["loc", [null, [52, 14], [56, 21]]]]],
                locals: [],
                templates: [child0, child1]
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 47,
                    "column": 10
                  },
                  "end": {
                    "line": 58,
                    "column": 10
                  }
                },
                "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [49, 18], [49, 26]]]]], [], 0, 1, ["loc", [null, [49, 12], [57, 19]]]]],
              locals: ["label"],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 8
                },
                "end": {
                  "line": 60,
                  "column": 8
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n");
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
            statements: [["block", "paper-autocomplete-item", [], ["lookupKey", ["subexpr", "@mut", [["get", "lookupKey", ["loc", [null, [47, 47], [47, 56]]]]], [], []], "item", ["subexpr", "@mut", [["get", "item", ["loc", [null, [47, 62], [47, 66]]]]], [], []], "selectedIndex", ["subexpr", "@mut", [["get", "selectedIndex", ["loc", [null, [47, 81], [47, 94]]]]], [], []], "index", ["subexpr", "@mut", [["get", "index", ["loc", [null, [47, 101], [47, 106]]]]], [], []], "pick", "pickModel"], 0, null, ["loc", [null, [47, 10], [58, 38]]]]],
            locals: ["item", "index"],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.6",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 63,
                      "column": 12
                    },
                    "end": {
                      "line": 65,
                      "column": 12
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("li");
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
                statements: [["inline", "yield", [["get", "searchText", ["loc", [null, [64, 28], [64, 38]]]]], ["to", "inverse"], ["loc", [null, [64, 20], [64, 53]]]]],
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
                        "line": 66,
                        "column": 14
                      },
                      "end": {
                        "line": 68,
                        "column": 14
                      }
                    },
                    "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
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
                  statements: [["inline", "component", [["get", "notFoundComponent", ["loc", [null, [67, 34], [67, 51]]]]], ["searchText", ["subexpr", "@mut", [["get", "searchText", ["loc", [null, [67, 63], [67, 73]]]]], [], []]], ["loc", [null, [67, 22], [67, 75]]]]],
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
                        "line": 68,
                        "column": 14
                      },
                      "end": {
                        "line": 70,
                        "column": 14
                      }
                    },
                    "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
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
                  statements: [["content", "notFoundMsg", ["loc", [null, [69, 22], [69, 37]]]]],
                  locals: [],
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
                      "line": 65,
                      "column": 12
                    },
                    "end": {
                      "line": 71,
                      "column": 12
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["block", "if", [["get", "notFoundComponent", ["loc", [null, [66, 20], [66, 37]]]]], [], 0, 1, ["loc", [null, [66, 14], [70, 21]]]]],
                locals: [],
                templates: [child0, child1]
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 61,
                    "column": 10
                  },
                  "end": {
                    "line": 72,
                    "column": 10
                  }
                },
                "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [63, 18], [63, 26]]]]], [], 0, 1, ["loc", [null, [63, 12], [71, 19]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 8
                },
                "end": {
                  "line": 73,
                  "column": 8
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "showLoadingBar", ["loc", [null, [61, 16], [61, 30]]]]], [], 0, null, ["loc", [null, [61, 10], [72, 17]]]]],
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
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 74,
                "column": 4
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "each", [["get", "suggestions", ["loc", [null, [45, 16], [45, 27]]]]], [], 0, 1, ["loc", [null, [45, 8], [73, 17]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 2
            },
            "end": {
              "line": 75,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-autocomplete-list", [], ["suggestions", ["subexpr", "@mut", [["get", "suggestions", ["loc", [null, [43, 43], [43, 54]]]]], [], []], "selectedIndex", ["subexpr", "@mut", [["get", "selectedIndex", ["loc", [null, [43, 69], [43, 82]]]]], [], []], "wrapToElementId", ["subexpr", "@mut", [["get", "autocompleteWrapperId", ["loc", [null, [43, 99], [43, 120]]]]], [], []], "mouse-up", "listMouseUp", "mouse-leave", "listMouseLeave", "mouse-enter", "listMouseEnter"], 0, null, ["loc", [null, [43, 4], [74, 32]]]]],
        locals: [],
        templates: [child0]
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
                "line": 80,
                "column": 4
              },
              "end": {
                "line": 82,
                "column": 4
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
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
          statements: [["content", "message", ["loc", [null, [81, 11], [81, 22]]]]],
          locals: [],
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
              "line": 79,
              "column": 2
            },
            "end": {
              "line": 83,
              "column": 2
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "message", ["loc", [null, [80, 10], [80, 17]]]]], [], 0, null, ["loc", [null, [80, 4], [82, 11]]]]],
        locals: ["message", "index"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 85,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-autocomplete.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("md-autocomplete-wrap");
        dom.setAttribute(el1, "role", "listbox");
        dom.setAttribute(el1, "layout", "row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("aria-status");
        dom.setAttribute(el1, "class", "md-visually-hidden");
        dom.setAttribute(el1, "role", "status");
        dom.setAttribute(el1, "aria-live", "assertive");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "id", ["get", "autocompleteWrapperId", ["loc", [null, [1, 27], [1, 48]]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "notFloating", ["loc", [null, [1, 91], [1, 102]]]], "md-whiteframe-z1"], [], ["loc", [null, [1, 86], [1, 123]]]], " ", ["subexpr", "if", [["get", "notHidden", ["loc", [null, [1, 129], [1, 138]]]], "md-menu-showing"], [], ["loc", [null, [1, 124], [1, 158]]]]]]], ["block", "if", [["get", "floating", ["loc", [null, [2, 8], [2, 16]]]]], [], 0, 1, ["loc", [null, [2, 2], [36, 9]]]], ["block", "if", [["get", "loading", ["loc", [null, [38, 8], [38, 15]]]]], [], 2, null, ["loc", [null, [38, 2], [40, 9]]]], ["block", "if", [["get", "notHidden", ["loc", [null, [42, 8], [42, 17]]]]], [], 3, null, ["loc", [null, [42, 2], [75, 9]]]], ["block", "each", [["get", "messages", ["loc", [null, [79, 10], [79, 18]]]]], [], 4, null, ["loc", [null, [79, 2], [83, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("email-signature-generator/templates/components/paper-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
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
          "moduleName": "email-signature-generator/templates/components/paper-button.hbs"
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
        statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
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
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-button.hbs"
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
        statements: [["content", "label", ["loc", [null, [4, 2], [4, 11]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-actions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
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
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-actions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["icons", ["subexpr", "component", ["paper-card-icon-actions"], [], ["loc", [null, [2, 8], [2, 45]]]]], ["loc", [null, [1, 8], [3, 1]]]]], [], ["loc", [null, [1, 0], [3, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-header-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-header-text.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["title", ["subexpr", "component", ["paper-card-header-title"], [], ["loc", [null, [2, 8], [2, 45]]]], "subhead", ["subexpr", "component", ["paper-card-header-subhead"], [], ["loc", [null, [3, 10], [3, 49]]]]], ["loc", [null, [1, 8], [4, 1]]]]], [], ["loc", [null, [1, 0], [4, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["text", ["subexpr", "component", ["paper-card-header-text"], [], ["loc", [null, [2, 7], [2, 43]]]], "avatar", ["subexpr", "component", ["paper-card-avatar"], [], ["loc", [null, [3, 9], [3, 40]]]]], ["loc", [null, [1, 8], [4, 1]]]]], [], ["loc", [null, [1, 0], [4, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-media", ["exports"], function (exports) {
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
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-card-media.hbs"
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
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [2, 25], [2, 29]]]]]]], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
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
          "moduleName": "email-signature-generator/templates/components/paper-card-media.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'src');
          morphs[2] = dom.createAttrMorph(element0, 'alt');
          morphs[3] = dom.createAttrMorph(element0, 'title');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [6, 25], [6, 29]]]]]]], ["attribute", "src", ["get", "src", ["loc", [null, [6, 39], [6, 42]]]]], ["attribute", "alt", ["get", "alt", ["loc", [null, [6, 51], [6, 54]]]]], ["attribute", "title", ["get", "title", ["loc", [null, [6, 65], [6, 70]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-media.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-title-media", ["exports"], function (exports) {
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
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-card-title-media.hbs"
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
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [2, 25], [2, 29]]]]]]], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
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
          "moduleName": "email-signature-generator/templates/components/paper-card-title-media.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'src');
          morphs[2] = dom.createAttrMorph(element0, 'alt');
          morphs[3] = dom.createAttrMorph(element0, 'title');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-media-", ["get", "size", ["loc", [null, [6, 25], [6, 29]]]]]]], ["attribute", "src", ["get", "src", ["loc", [null, [6, 39], [6, 42]]]]], ["attribute", "alt", ["get", "alt", ["loc", [null, [6, 51], [6, 54]]]]], ["attribute", "title", ["get", "title", ["loc", [null, [6, 65], [6, 70]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-title-media.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-title-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-title-text.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["headline", ["subexpr", "component", ["paper-card-header-headline"], [], ["loc", [null, [2, 11], [2, 51]]]], "subhead", ["subexpr", "component", ["paper-card-header-subhead"], [], ["loc", [null, [3, 10], [3, 49]]]]], ["loc", [null, [1, 8], [4, 1]]]]], [], ["loc", [null, [1, 0], [4, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-card-title", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card-title.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["text", ["subexpr", "component", ["paper-card-title-text"], [], ["loc", [null, [2, 7], [2, 42]]]], "media", ["subexpr", "component", ["paper-card-title-media"], [], ["loc", [null, [3, 8], [3, 44]]]]], ["loc", [null, [1, 8], [4, 1]]]]], [], ["loc", [null, [1, 0], [4, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["title", ["subexpr", "component", ["paper-card-title"], [], ["loc", [null, [2, 8], [2, 38]]]], "content", ["subexpr", "component", ["paper-card-content"], [], ["loc", [null, [3, 10], [3, 42]]]], "actions", ["subexpr", "component", ["paper-card-actions"], [], ["loc", [null, [4, 10], [4, 42]]]], "header", ["subexpr", "component", ["paper-card-header"], [], ["loc", [null, [5, 9], [5, 40]]]], "image", ["subexpr", "component", ["paper-card-image"], [], ["loc", [null, [6, 8], [6, 38]]]], "media", ["subexpr", "component", ["paper-card-media"], [], ["loc", [null, [7, 8], [7, 38]]]]], ["loc", [null, [1, 8], [8, 1]]]]], [], ["loc", [null, [1, 0], [8, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-checkbox.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [7, 6], [7, 15]]]]],
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
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-checkbox.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [13, 6], [13, 15]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 0, 1, ["loc", [null, [4, 0], [16, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 4
                },
                "end": {
                  "line": 20,
                  "column": 4
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-dialog.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
            statements: [["content", "yield", ["loc", [null, [19, 6], [19, 15]]]]],
            locals: [],
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
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 21,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "paper-dialog-inner", [], ["origin", ["subexpr", "@mut", [["get", "origin", ["loc", [null, [11, 13], [11, 19]]]]], [], []], "defaultedParent", ["subexpr", "@mut", [["get", "defaultedParent", ["loc", [null, [12, 22], [12, 37]]]]], [], []], "defaultedOpenFrom", ["subexpr", "@mut", [["get", "defaultedOpenFrom", ["loc", [null, [13, 24], [13, 41]]]]], [], []], "defaultedCloseTo", ["subexpr", "@mut", [["get", "defaultedCloseTo", ["loc", [null, [14, 23], [14, 39]]]]], [], []], "fullscreen", ["subexpr", "@mut", [["get", "fullscreen", ["loc", [null, [15, 17], [15, 27]]]]], [], []], "clickOutsideToClose", ["subexpr", "@mut", [["get", "clickOutsideToClose", ["loc", [null, [16, 26], [16, 45]]]]], [], []], "focusOnOpen", ["subexpr", "@mut", [["get", "focusOnOpen", ["loc", [null, [17, 18], [17, 29]]]]], [], []]], 0, null, ["loc", [null, [10, 4], [20, 27]]]]],
          locals: [],
          templates: [child0]
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
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-dialog.hbs"
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "paper-backdrop", [], ["locked-open", ["subexpr", "@mut", [["get", "isLockedOpen", ["loc", [null, [3, 16], [3, 28]]]]], [], []], "opaque", true, "fixed", ["subexpr", "unless", [["get", "parent", ["loc", [null, [5, 18], [5, 24]]]], true], [], ["loc", [null, [5, 10], [5, 30]]]], "class", "md-dialog-backdrop", "onClick", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [7, 12], [7, 37]]]]], ["loc", [null, [2, 2], [8, 4]]]], ["block", "paper-dialog-container", [], ["outsideClicked", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [9, 43], [9, 68]]]]], 0, null, ["loc", [null, [9, 2], [21, 29]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", ["subexpr", "@mut", [["get", "destinationId", ["loc", [null, [1, 21], [1, 34]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [22, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("email-signature-generator/templates/components/paper-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["isValid", ["get", "isValid", ["loc", [null, [2, 10], [2, 17]]]], "isInvalid", ["get", "isInvalid", ["loc", [null, [3, 12], [3, 21]]]], "input", ["subexpr", "component", ["paper-input"], ["parentComponent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [5, 20], [5, 24]]]]], [], []], "onValidityChange", ["subexpr", "action", ["onValidityChange"], [], ["loc", [null, [6, 21], [6, 48]]]]], ["loc", [null, [4, 8], [7, 3]]]], "onSubmit", ["subexpr", "action", ["onSubmit"], [], ["loc", [null, [8, 11], [8, 30]]]]], ["loc", [null, [1, 8], [9, 1]]]]], [], ["loc", [null, [1, 0], [9, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-grid-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-grid-list.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-grid-tile-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-grid-tile-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("figcaption");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-grid-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-grid-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("figure");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "-paper-underscore", [["get", "iconClass", ["loc", [null, [1, 20], [1, 29]]]]], [], ["loc", [null, [1, 0], [1, 31]]]]],
      locals: [],
      templates: []
    };
  })());
});
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
define("email-signature-generator/templates/components/paper-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-no-style md-list-item-inner");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 0], [2, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-menu-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-menu-container.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]], ["inline", "paper-backdrop", [], ["class", "md-menu-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [2, 50], [2, 71]]]]], ["loc", [null, [2, 0], [2, 73]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-menu-content-pane", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-menu-content-pane.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-menu-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
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
          "moduleName": "email-signature-generator/templates/components/paper-menu-content.hbs"
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
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 10], [2, 14]]]]], [], ["loc", [null, [2, 2], [2, 16]]]]],
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
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-menu-content.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["class", "md-menu-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [5, 52], [5, 73]]]]], ["loc", [null, [5, 2], [5, 75]]]]],
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-menu-content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "paper-menu-content-pane", [], ["width", ["subexpr", "@mut", [["get", "width", ["loc", [null, [1, 33], [1, 38]]]]], [], []], "dense", ["subexpr", "@mut", [["get", "dense", ["loc", [null, [1, 45], [1, 50]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [3, 28]]]], ["block", "ember-wormhole", [], ["to", "paper-wormhole"], 1, null, ["loc", [null, [4, 0], [6, 19]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-menu-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-menu-item.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
          statements: [["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-menu-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-button", [], ["onClick", "handleClick", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [2, 49], [2, 57]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [4, 19]]]]],
        locals: [],
        templates: [child0]
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
          "moduleName": "email-signature-generator/templates/components/paper-menu-item.hbs"
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
        statements: [["content", "yield", ["loc", [null, [6, 2], [6, 11]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-menu-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "onClick", ["loc", [null, [1, 6], [1, 13]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
          statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [4, 4], [4, 26]]]]],
          locals: [],
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
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-menu-content", [], ["width", ["subexpr", "@mut", [["get", "width", ["loc", [null, [3, 30], [3, 35]]]]], [], []], "dense", ["subexpr", "@mut", [["get", "dense", ["loc", [null, [3, 42], [3, 47]]]]], [], []]], 0, null, ["loc", [null, [3, 2], [5, 25]]]]],
        locals: [],
        templates: [child0]
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-menu.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]], ["block", "if", [["get", "isOpen", ["loc", [null, [2, 6], [2, 12]]]]], [], 0, null, ["loc", [null, [2, 0], [6, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("email-signature-generator/templates/components/paper-nav-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-nav-container.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-optgroup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 9
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-optgroup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 7], [1, 16]]]], ["content", "yield", ["loc", [null, [2, 0], [2, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-option", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 1,
            "column": 36
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-option.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-text");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 21], [1, 30]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-progress-circular", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-progress-circular.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-spinner-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-inner ");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-gap");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-left");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "md-half-circle");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "md-right");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "md-half-circle");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3, 1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element0, 'style');
        morphs[2] = dom.createAttrMorph(element2, 'style');
        morphs[3] = dom.createAttrMorph(element3, 'style');
        morphs[4] = dom.createAttrMorph(element4, 'style');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["md-scale-wrapper ", ["get", "spinnerClass", ["loc", [null, [1, 31], [1, 43]]]]]]], ["attribute", "style", ["get", "scaleWrapperStyle", ["loc", [null, [1, 55], [1, 72]]]]], ["attribute", "style", ["get", "gapStyle", ["loc", [null, [4, 34], [4, 42]]]]], ["attribute", "style", ["get", "leftStyle", ["loc", [null, [6, 44], [6, 53]]]]], ["attribute", "style", ["get", "rightStyle", ["loc", [null, [9, 44], [9, 54]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-progress-linear", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-progress-linear.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-dashed");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar md-bar1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar md-bar2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'style');
        morphs[2] = dom.createAttrMorph(element2, 'style');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["md-container ", ["get", "queryModeClass", ["loc", [null, [1, 27], [1, 41]]]]]]], ["attribute", "style", ["get", "bar1Style", ["loc", [null, [3, 38], [3, 47]]]]], ["attribute", "style", ["get", "bar2Style", ["loc", [null, [4, 38], [4, 47]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-radio-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 3
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-radio-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["radio", ["subexpr", "component", ["paper-radio"], ["toggle", ["subexpr", "@mut", [["get", "toggle", ["loc", [null, [3, 11], [3, 17]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 13], [4, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [5, 15], [5, 25]]]]], [], []], "onChange", ["subexpr", "action", ["onChange"], [], ["loc", [null, [6, 13], [6, 32]]]], "parentGroup", ["subexpr", "@mut", [["get", "this", ["loc", [null, [7, 16], [7, 20]]]]], [], []]], ["loc", [null, [2, 10], [7, 21]]]]], ["loc", [null, [1, 8], [8, 1]]]]], [], ["loc", [null, [1, 0], [8, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-radio.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [8, 6], [8, 15]]]]],
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
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-radio.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [14, 6], [14, 15]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-off");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-on");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [5, 6], [5, 14]]]]], [], 0, 1, ["loc", [null, [5, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-select-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-select-container.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["class", "md-select-backdrop", "onClick", ["subexpr", "action", ["toggleMenu"], [], ["loc", [null, [3, 54], [3, 75]]]]], ["loc", [null, [3, 2], [3, 77]]]]],
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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-select-container.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]], ["block", "ember-wormhole", [], ["to", "paper-wormhole"], 0, null, ["loc", [null, [2, 0], [4, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("email-signature-generator/templates/components/paper-select-core", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.6",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 6,
                      "column": 8
                    },
                    "end": {
                      "line": 8,
                      "column": 8
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
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
                statements: [["content", "paper-progress-circular", ["loc", [null, [7, 15], [7, 42]]]]],
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
                      "line": 8,
                      "column": 8
                    },
                    "end": {
                      "line": 10,
                      "column": 8
                    }
                  },
                  "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
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
                statements: [["inline", "yield", [["get", "items", ["loc", [null, [9, 18], [9, 23]]]]], [], ["loc", [null, [9, 10], [9, 25]]]]],
                locals: [],
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
                    "line": 5,
                    "column": 6
                  },
                  "end": {
                    "line": 11,
                    "column": 6
                  }
                },
                "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["get", "isLoading", ["loc", [null, [6, 14], [6, 23]]]]], [], 0, 1, ["loc", [null, [6, 8], [10, 15]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 12,
                  "column": 4
                }
              },
              "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "paper-content", [], ["class", "md-default-theme"], 0, null, ["loc", [null, [5, 6], [11, 24]]]]],
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
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "paper-select-menu", [], [], 0, null, ["loc", [null, [4, 4], [12, 26]]]]],
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
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "paper-select-container", [], [], 0, null, ["loc", [null, [3, 2], [13, 29]]]]],
        locals: [],
        templates: [child0]
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
            "line": 14,
            "column": 7
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-select-core.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "paper-select-value", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [1, 33], [1, 44]]]]], [], []], "value", ["subexpr", "@mut", [["get", "label", ["loc", [null, [1, 51], [1, 56]]]]], [], []]], ["loc", [null, [1, 0], [1, 58]]]], ["block", "if", [["get", "isOpen", ["loc", [null, [2, 6], [2, 12]]]]], [], 0, null, ["loc", [null, [2, 0], [14, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("email-signature-generator/templates/components/paper-select-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-select-header.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-select-value", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 55
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-select-value.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "md-select-icon");
        dom.setAttribute(el1, "aria-hidden", "true");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "label", ["loc", [null, [1, 6], [1, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
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
          "moduleName": "email-signature-generator/templates/components/paper-select.hbs"
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
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["subexpr", "if", [["get", "value", ["loc", [null, [2, 20], [2, 25]]]], "md-static", "md-placeholder"], [], ["loc", [null, [2, 15], [2, 56]]]]], ["attribute", "for", ["get", "inputElementId", ["loc", [null, [2, 63], [2, 77]]]]], ["content", "label", ["loc", [null, [2, 80], [2, 89]]]]],
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
          "moduleName": "email-signature-generator/templates/components/paper-select.hbs"
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
        statements: [["inline", "paper-icon", [["get", "icon", ["loc", [null, [6, 15], [6, 19]]]]], ["class", ["subexpr", "@mut", [["get", "icon-class", ["loc", [null, [6, 26], [6, 36]]]]], [], []]], ["loc", [null, [6, 2], [6, 38]]]]],
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
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-select.hbs"
        },
        isEmpty: false,
        arity: 1,
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
        statements: [["inline", "yield", [["get", "items", ["loc", [null, [10, 10], [10, 15]]]]], [], ["loc", [null, [10, 2], [10, 17]]]]],
        locals: ["items"],
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
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-select.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "label", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [5, 6], [5, 10]]]]], [], 1, null, ["loc", [null, [5, 0], [7, 7]]]], ["block", "paper-select-core", [], ["placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [9, 33], [9, 44]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 51], [9, 56]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [9, 66], [9, 74]]]]], [], []], "onChange", ["subexpr", "@mut", [["get", "onChange", ["loc", [null, [9, 84], [9, 92]]]]], [], []], "getItems", ["subexpr", "@mut", [["get", "getItems", ["loc", [null, [9, 102], [9, 110]]]]], [], []], "itemLabelCallback", ["subexpr", "@mut", [["get", "itemLabelCallback", ["loc", [null, [9, 129], [9, 146]]]]], [], []]], 2, null, ["loc", [null, [9, 0], [11, 22]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("email-signature-generator/templates/components/paper-sidenav-toggle", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 25
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-sidenav-toggle.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", [["get", "toggle", ["loc", [null, [1, 16], [1, 22]]]]], [], ["loc", [null, [1, 8], [1, 23]]]]], [], ["loc", [null, [1, 0], [1, 25]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-sidenav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-sidenav.hbs"
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
        statements: [["inline", "paper-backdrop", [], ["locked-open", ["subexpr", "@mut", [["get", "isLockedOpen", ["loc", [null, [3, 16], [3, 28]]]]], [], []], "opaque", true, "class", "md-sidenav-backdrop", "onClick", ["subexpr", "action", ["onBackdropTap"], [], ["loc", [null, [6, 12], [6, 36]]]]], ["loc", [null, [2, 2], [7, 4]]]]],
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
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-sidenav.hbs"
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
        statements: [["content", "yield", ["loc", [null, [18, 2], [18, 11]]]]],
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
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-sidenav.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "closed", ["loc", [null, [1, 10], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [8, 11]]]], ["block", "paper-sidenav-inner", [], ["class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [11, 8], [11, 13]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [12, 7], [12, 11]]]]], [], []], "position", ["subexpr", "@mut", [["get", "position", ["loc", [null, [13, 11], [13, 19]]]]], [], []], "lockedOpen", ["subexpr", "@mut", [["get", "lockedOpen", ["loc", [null, [14, 13], [14, 23]]]]], [], []], "closed", ["subexpr", "@mut", [["get", "closed", ["loc", [null, [15, 9], [15, 15]]]]], [], []], "closeOnClick", ["subexpr", "@mut", [["get", "closeOnClick", ["loc", [null, [16, 15], [16, 27]]]]], [], []], "onToggle", ["subexpr", "action", ["onToggle"], [], ["loc", [null, [17, 11], [17, 30]]]]], 1, null, ["loc", [null, [10, 0], [19, 24]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-slider", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-slider.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-slider-wrapper");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-track-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track md-track-fill");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-track-ticks");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-thumb-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-focus-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-focus-ring");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-sign");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "md-thumb-text");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-disabled-thumb");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 3]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'style');
        morphs[1] = dom.createAttrMorph(element2, 'style');
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [7, 1]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "style", ["get", "activeTrackStyle", ["loc", [null, [4, 52], [4, 68]]]]], ["attribute", "style", ["get", "thumbContainerStyle", ["loc", [null, [7, 44], [7, 63]]]]], ["content", "value", ["loc", [null, [12, 40], [12, 49]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-subheader", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-subheader.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-subheader-inner");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "md-subheader-content");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [3, 6], [3, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/paper-switch", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
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
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-switch.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
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
        statements: [["content", "yield", ["loc", [null, [11, 4], [11, 13]]]]],
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
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "email-signature-generator/templates/components/paper-switch.hbs"
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
          dom.setAttribute(el1, "class", "md-label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
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
        statements: [["content", "label", ["loc", [null, [15, 4], [15, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-switch.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-switch-bar");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "md-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-bar");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "md-thumb-container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "md-thumb");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "style", ["get", "thumbContainerStyle", ["loc", [null, [4, 42], [4, 61]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [9, 6], [9, 14]]]]], [], 0, 1, ["loc", [null, [9, 0], [17, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("email-signature-generator/templates/components/paper-toolbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/paper-toolbar.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["tools", ["subexpr", "component", ["paper-toolbar-tools"], [], ["loc", [null, [2, 8], [2, 41]]]]], ["loc", [null, [1, 8], [3, 1]]]]], [], ["loc", [null, [1, 0], [3, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("email-signature-generator/templates/components/transition-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "email-signature-generator/templates/components/transition-group.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('email-signature-generator/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('email-signature-generator/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('email-signature-generator/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('email-signature-generator/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('email-signature-generator/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('email-signature-generator/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('email-signature-generator/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('email-signature-generator/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('email-signature-generator/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('email-signature-generator/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('email-signature-generator/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('email-signature-generator/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('email-signature-generator/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('email-signature-generator/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('email-signature-generator/utils/grid-layout', ['exports', 'ember-paper/utils/grid-layout'], function (exports, _emberPaperUtilsGridLayout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperUtilsGridLayout['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('email-signature-generator/config/environment', ['ember'], function(Ember) {
  var prefix = 'email-signature-generator';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("email-signature-generator/app")["default"].create({"name":"email-signature-generator","version":"0.0.0+fc2cc351","rootElement":"body"});
}

/* jshint ignore:end */
//# sourceMappingURL=email-signature-generator.map