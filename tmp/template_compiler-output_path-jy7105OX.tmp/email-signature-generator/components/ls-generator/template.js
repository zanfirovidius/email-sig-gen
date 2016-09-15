export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

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
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["block","text.headline",[],[],0,null,["loc",[null,[5,6],[5,42]]]]
          ],
          locals: ["text"],
          templates: [child0]
        };
      }());
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
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","title.text",[],[],0,null,["loc",[null,[4,4],[6,19]]]]
        ],
        locals: ["title"],
        templates: [child0]
      };
    }());
    var child1 = (function() {
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
          dom.setAttribute(el1,"layout","");
          dom.setAttribute(el1,"layout-sm","column");
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
          dom.setAttribute(el1,"layout","");
          dom.setAttribute(el1,"layout-sm","column");
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
          dom.setAttribute(el1,"layout","");
          dom.setAttribute(el1,"layout-sm","column");
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
          dom.setAttribute(el1,"layout","");
          dom.setAttribute(el1,"layout-sm","column");
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
          dom.setAttribute(el1,"layout","");
          dom.setAttribute(el1,"layout-sm","column");
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
          morphs[0] = dom.createMorphAt(element0,1,1);
          morphs[1] = dom.createMorphAt(element0,3,3);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
          morphs[3] = dom.createMorphAt(element1,1,1);
          morphs[4] = dom.createMorphAt(element1,3,3);
          morphs[5] = dom.createMorphAt(element2,1,1);
          morphs[6] = dom.createMorphAt(element2,3,3);
          morphs[7] = dom.createMorphAt(element2,5,5);
          morphs[8] = dom.createMorphAt(element3,1,1);
          morphs[9] = dom.createMorphAt(element3,3,3);
          morphs[10] = dom.createMorphAt(element3,5,5);
          return morphs;
        },
        statements: [
          ["inline","paper-input",[],["flex",50,"label","Name","value",["subexpr","@mut",[["get","model.name",["loc",[null,[10,47],[10,57]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.name",["loc",[null,[10,80],[10,90]]]]],[],["loc",[null,[10,75],[10,91]]]]],[],["loc",[null,[10,67],[10,92]]]]],["loc",[null,[10,6],[10,94]]]],
          ["inline","paper-input",[],["flex",50,"label","Job Title","value",["subexpr","@mut",[["get","model.jobTitle",["loc",[null,[11,52],[11,66]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.jobTitle",["loc",[null,[11,89],[11,103]]]]],[],["loc",[null,[11,84],[11,104]]]]],[],["loc",[null,[11,76],[11,105]]]]],["loc",[null,[11,6],[11,107]]]],
          ["inline","paper-input",[],["flex",100,"label","Address","value",["subexpr","@mut",[["get","model.address",["loc",[null,[14,51],[14,64]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.address",["loc",[null,[14,87],[14,100]]]]],[],["loc",[null,[14,82],[14,101]]]]],[],["loc",[null,[14,74],[14,102]]]]],["loc",[null,[14,6],[14,104]]]],
          ["inline","paper-input",[],["flex",50,"label","Direct phone","value",["subexpr","@mut",[["get","model.directPhone",["loc",[null,[17,55],[17,72]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.directPhone",["loc",[null,[17,95],[17,112]]]]],[],["loc",[null,[17,90],[17,113]]]]],[],["loc",[null,[17,82],[17,114]]]]],["loc",[null,[17,6],[17,116]]]],
          ["inline","paper-input",[],["flex",50,"label","Office phone","value",["subexpr","@mut",[["get","model.officePhone",["loc",[null,[18,55],[18,72]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.officePhone",["loc",[null,[18,95],[18,112]]]]],[],["loc",[null,[18,90],[18,113]]]]],[],["loc",[null,[18,82],[18,114]]]]],["loc",[null,[18,6],[18,116]]]],
          ["inline","paper-input",[],["flex",50,"label","Facebook","value",["subexpr","@mut",[["get","model.facebook",["loc",[null,[24,51],[24,65]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.facebook",["loc",[null,[24,88],[24,102]]]]],[],["loc",[null,[24,83],[24,103]]]]],[],["loc",[null,[24,75],[24,104]]]]],["loc",[null,[24,6],[24,106]]]],
          ["inline","paper-input",[],["flex",50,"label","Twitter","value",["subexpr","@mut",[["get","model.twitter",["loc",[null,[25,50],[25,63]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.twitter",["loc",[null,[25,86],[25,99]]]]],[],["loc",[null,[25,81],[25,100]]]]],[],["loc",[null,[25,73],[25,101]]]]],["loc",[null,[25,6],[25,103]]]],
          ["inline","paper-input",[],["flex",50,"label","Linkedin","value",["subexpr","@mut",[["get","model.linkedin",["loc",[null,[26,51],[26,65]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.linkedin",["loc",[null,[26,88],[26,102]]]]],[],["loc",[null,[26,83],[26,103]]]]],[],["loc",[null,[26,75],[26,104]]]]],["loc",[null,[26,6],[26,106]]]],
          ["inline","paper-input",[],["flex",50,"label","Skype","value",["subexpr","@mut",[["get","model.skype",["loc",[null,[30,48],[30,59]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.skype",["loc",[null,[30,82],[30,93]]]]],[],["loc",[null,[30,77],[30,94]]]]],[],["loc",[null,[30,69],[30,95]]]]],["loc",[null,[30,6],[30,97]]]],
          ["inline","paper-input",[],["flex",50,"label","Googleplus","value",["subexpr","@mut",[["get","model.googlePlus",["loc",[null,[31,53],[31,69]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.googlePlus",["loc",[null,[31,92],[31,108]]]]],[],["loc",[null,[31,87],[31,109]]]]],[],["loc",[null,[31,79],[31,110]]]]],["loc",[null,[31,6],[31,112]]]],
          ["inline","paper-input",[],["flex",50,"label","Youtube","value",["subexpr","@mut",[["get","model.youtube",["loc",[null,[32,50],[32,63]]]]],[],[]],"onChange",["subexpr","action",[["subexpr","mut",[["get","model.youtube",["loc",[null,[32,86],[32,99]]]]],[],["loc",[null,[32,81],[32,100]]]]],[],["loc",[null,[32,73],[32,101]]]]],["loc",[null,[32,6],[32,103]]]]
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","card.title",[],[],0,null,["loc",[null,[3,2],[7,17]]]],
        ["block","card.content",[],[],1,null,["loc",[null,[8,2],[36,19]]]]
      ],
      locals: ["card"],
      templates: [child0, child1]
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
      dom.setAttribute(el1,"class","m-t-md");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-12");
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
      dom.setAttribute(el4,"href","https://htmlsig.zendesk.com/hc/en-us/sections/200647278-Installing-Signature");
      dom.setAttribute(el4,"target","_blank");
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
      dom.setAttribute(el4,"href","https://htmlsig.zendesk.com/hc/en-us/articles/204983037-How-do-I-add-a-email-signature-to-Outlook-2003-2013-");
      dom.setAttribute(el4,"target","_blank");
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
      morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
      return morphs;
    },
    statements: [
      ["block","paper-card",[],[],0,null,["loc",[null,[2,0],[37,15]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));