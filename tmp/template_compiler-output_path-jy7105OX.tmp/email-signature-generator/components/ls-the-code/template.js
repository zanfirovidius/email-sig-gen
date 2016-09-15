export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
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
      dom.setAttribute(el1,"class","col-lg-12");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Please copy the code and paste it in your Email Client app in the signature section.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"id","toClipboard");
      dom.setAttribute(el2,"class","the-code");
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
      dom.setAttribute(el2,"class","m-t-xl");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"style","display: inline-flex;");
      dom.setAttribute(el3,"class","clipboard ember-view paper-button md-default-theme md-button md-primary md-raised");
      dom.setAttribute(el3,"download","signature.html");
      var el4 = dom.createTextNode("\n      Download Template\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","md-ripple-container");
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
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      morphs[1] = dom.createMorphAt(element1,1,1);
      morphs[2] = dom.createAttrMorph(element2, 'href');
      return morphs;
    },
    statements: [
      ["content","theCode",["loc",[null,[4,4],[4,15]]]],
      ["block","paper-button",[],["raised",true,"warn",true,"class","clipboard"],0,null,["loc",[null,[7,4],[7,95]]]],
      ["attribute","href",["concat",[["get","theCodeForDownload",["loc",[null,[9,161],[9,179]]]]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));