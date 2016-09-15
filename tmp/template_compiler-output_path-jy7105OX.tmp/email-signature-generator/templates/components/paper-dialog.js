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
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","yield",["loc",[null,[19,6],[19,15]]]]
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","paper-dialog-inner",[],["origin",["subexpr","@mut",[["get","origin",["loc",[null,[11,13],[11,19]]]]],[],[]],"defaultedParent",["subexpr","@mut",[["get","defaultedParent",["loc",[null,[12,22],[12,37]]]]],[],[]],"defaultedOpenFrom",["subexpr","@mut",[["get","defaultedOpenFrom",["loc",[null,[13,24],[13,41]]]]],[],[]],"defaultedCloseTo",["subexpr","@mut",[["get","defaultedCloseTo",["loc",[null,[14,23],[14,39]]]]],[],[]],"fullscreen",["subexpr","@mut",[["get","fullscreen",["loc",[null,[15,17],[15,27]]]]],[],[]],"clickOutsideToClose",["subexpr","@mut",[["get","clickOutsideToClose",["loc",[null,[16,26],[16,45]]]]],[],[]],"focusOnOpen",["subexpr","@mut",[["get","focusOnOpen",["loc",[null,[17,18],[17,29]]]]],[],[]]],0,null,["loc",[null,[10,4],[20,27]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type",
            "multiple-nodes"
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
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","paper-backdrop",[],["locked-open",["subexpr","@mut",[["get","isLockedOpen",["loc",[null,[3,16],[3,28]]]]],[],[]],"opaque",true,"fixed",["subexpr","unless",[["get","parent",["loc",[null,[5,18],[5,24]]]],true],[],["loc",[null,[5,10],[5,30]]]],"class","md-dialog-backdrop","onClick",["subexpr","action",["outsideClicked"],[],["loc",[null,[7,12],[7,37]]]]],["loc",[null,[2,2],[8,4]]]],
        ["block","paper-dialog-container",[],["outsideClicked",["subexpr","action",["outsideClicked"],[],["loc",[null,[9,43],[9,68]]]]],0,null,["loc",[null,[9,2],[21,29]]]]
      ],
      locals: [],
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","destinationId",["loc",[null,[1,21],[1,34]]]]],[],[]]],0,null,["loc",[null,[1,0],[22,19]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));