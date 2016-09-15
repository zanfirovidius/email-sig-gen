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