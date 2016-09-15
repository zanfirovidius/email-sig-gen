export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 6
              },
              "end": {
                "line": 18,
                "column": 6
              }
            },
            "moduleName": "modules/liquid-fire/templates/components/liquid-outlet.hbs"
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
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["inline","outlet",[["get","outletName",["loc",[null,[17,17],[17,27]]]]],[],["loc",[null,[17,8],[17,29]]]]
          ],
          locals: [],
          templates: []
        };
      }());
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
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "modules/liquid-fire/templates/components/liquid-outlet.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","set-outlet-state",[["get","outletName",["loc",[null,[16,26],[16,36]]]],["get","version.outletState",["loc",[null,[16,37],[16,56]]]]],[],0,null,["loc",[null,[16,6],[18,28]]]]
        ],
        locals: ["version"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "modules/liquid-fire/templates/components/liquid-outlet.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","liquid-bind",[["get","outletState",["loc",[null,[2,17],[2,28]]]]],["containerId",["subexpr","@mut",[["get","containerId",["loc",[null,[3,18],[3,29]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[4,12],[4,17]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[5,10],[5,13]]]]],[],[]],"rules",["subexpr","@mut",[["get","rules",["loc",[null,[6,12],[6,17]]]]],[],[]],"name","liquid-outlet","outletName",["subexpr","@mut",[["get","outletName",["loc",[null,[8,17],[8,27]]]]],[],[]],"containerless",["subexpr","@mut",[["get","containerless",["loc",[null,[9,20],[9,33]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[10,19],[10,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[11,26],[11,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[12,17],[12,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[13,19],[13,31]]]]],[],[]]],0,null,["loc",[null,[2,2],[20,20]]]]
      ],
      locals: ["outletState"],
      templates: [child0]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
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
      "moduleName": "modules/liquid-fire/templates/components/liquid-outlet.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","get-outlet-state",[["get","outletName",["loc",[null,[1,21],[1,31]]]]],["watchModels",["subexpr","@mut",[["get","attrs.watchModels",["loc",[null,[1,44],[1,61]]]]],[],[]]],0,null,["loc",[null,[1,0],[21,21]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));