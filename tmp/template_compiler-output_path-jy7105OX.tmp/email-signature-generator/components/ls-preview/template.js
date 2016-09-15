export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        morphs[1] = dom.createMorphAt(element7,0,0);
        return morphs;
      },
      statements: [
        ["attribute","href",["concat",["tel:",["get","model.directPhone",["loc",[null,[29,28],[29,45]]]]]]],
        ["content","model.directPhone",["loc",[null,[29,49],[29,70]]]]
      ],
      locals: [],
      templates: []
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
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
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
        morphs[1] = dom.createMorphAt(element6,0,0);
        return morphs;
      },
      statements: [
        ["attribute","href",["concat",["tel:",["get","model.officePhone",["loc",[null,[33,28],[33,45]]]]]]],
        ["content","model.officePhone",["loc",[null,[33,49],[33,70]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","facebook.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Facebook%403x.png");
        dom.setAttribute(el2,"alt","Facebook");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.facebook",["loc",[null,[52,113],[52,127]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child4 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","linkedin.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+LinkedIn%403x.png");
        dom.setAttribute(el2,"alt","Linkedin");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.linkedin",["loc",[null,[62,113],[62,127]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child5 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","twitter.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Twitter%403x.png");
        dom.setAttribute(el2,"alt","Twitter");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.twitter",["loc",[null,[72,113],[72,126]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child6 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","skype.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Skype%403x.png");
        dom.setAttribute(el2,"alt","Skype");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.skype",["loc",[null,[82,113],[82,124]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child7 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","googleplus.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Google+Plus%403x.png");
        dom.setAttribute(el2,"alt","GooglePlus");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.googlePlus",["loc",[null,[92,113],[92,129]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child8 = (function() {
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
        dom.setAttribute(el1,"style","white-space: nowrap; display: inline;");
        dom.setAttribute(el1,"class","signature_facebook-sep social-sep");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif");
        dom.setAttribute(el2,"width","8");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","text-decoration: none; display: inline;");
        dom.setAttribute(el1,"class","social signature_facebook-target sig-hide");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin-bottom:2px; border:none; display:inline;");
        dom.setAttribute(el2,"data-filename","youtube.png");
        dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+YouTube+2%403x.png");
        dom.setAttribute(el2,"alt","Youtube");
        dom.setAttribute(el2,"height","24");
        dom.setAttribute(el2,"width","24");
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
      statements: [
        ["attribute","href",["concat",[["get","model.youtube",["loc",[null,[102,113],[102,126]]]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
      dom.setAttribute(el1,"style","font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;");
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","font-weight: bold; font-size: 14px; color: #1491d8; display: inline;");
      dom.setAttribute(el2,"class","txt signature_name-target sig-hide");
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
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","email-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","color: rgb(144, 144, 144); display: inline;");
      dom.setAttribute(el2,"class","txt signature_jobtitle-target sig-hide");
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
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","email-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","email-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      dom.setAttribute(el1,"style","font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("img");
      dom.setAttribute(el2,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Asset+1.png");
      dom.setAttribute(el2,"alt","");
      dom.setAttribute(el2,"class","sig-logo");
      dom.setAttribute(el2,"height","24");
      dom.setAttribute(el2,"border","0");
      dom.setAttribute(el2,"width","146");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","email-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","color: rgb(144, 144, 144); display: inline;");
      dom.setAttribute(el2,"class","txt signature_address-target sig-hide");
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
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","email-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","color: rgb(144, 144, 144); display: inline;");
      dom.setAttribute(el2,"class","txt signature_mobilephone-target sig-hide");
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
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","address-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"style","display: inline;");
      dom.setAttribute(el2,"class","website-sep break");
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      dom.setAttribute(el1,"class","social-list");
      dom.setAttribute(el1,"style","font-size: 0px; line-height: 0; font-family: Helvetica,Arial,sans-serif;");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"style","text-decoration: none; display: inline;");
      dom.setAttribute(el2,"class","social signature_facebook-target sig-hide");
      dom.setAttribute(el2,"href","http://www.stormgroup.net/en/");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"style","margin-bottom:2px; border:none; display:inline;");
      dom.setAttribute(el3,"data-filename","stormgroup.png");
      dom.setAttribute(el3,"src","https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Storm+O%403x.png");
      dom.setAttribute(el3,"alt","Stormgroup");
      dom.setAttribute(el3,"height","24");
      dom.setAttribute(el3,"width","24");
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
      morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element8, [5]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element9, [5]),1,1);
      morphs[3] = dom.createMorphAt(element10,1,1);
      morphs[4] = dom.createMorphAt(element10,3,3);
      morphs[5] = dom.createMorphAt(element10,5,5);
      morphs[6] = dom.createMorphAt(element11,3,3);
      morphs[7] = dom.createMorphAt(element11,5,5);
      morphs[8] = dom.createMorphAt(element11,7,7);
      morphs[9] = dom.createMorphAt(element11,9,9);
      morphs[10] = dom.createMorphAt(element11,11,11);
      morphs[11] = dom.createMorphAt(element11,13,13);
      return morphs;
    },
    statements: [
      ["content","model.name",["loc",[null,[4,4],[4,18]]]],
      ["content","model.jobTitle",["loc",[null,[10,4],[10,22]]]],
      ["content","model.address",["loc",[null,[22,4],[22,21]]]],
      ["block","if",[["get","model.directPhone",["loc",[null,[28,10],[28,27]]]]],[],0,null,["loc",[null,[28,4],[30,11]]]],
      ["block","if",[["subexpr","and",[["get","model.directPhone",["loc",[null,[31,15],[31,32]]]],["get","model.officePhone",["loc",[null,[31,33],[31,50]]]]],[],["loc",[null,[31,10],[31,51]]]]],[],1,null,["loc",[null,[31,4],[31,63]]]],
      ["block","if",[["get","model.officePhone",["loc",[null,[32,10],[32,27]]]]],[],2,null,["loc",[null,[32,4],[34,11]]]],
      ["block","if",[["get","model.facebook",["loc",[null,[47,8],[47,22]]]]],[],3,null,["loc",[null,[47,2],[55,9]]]],
      ["block","if",[["get","model.linkedin",["loc",[null,[57,8],[57,22]]]]],[],4,null,["loc",[null,[57,2],[65,9]]]],
      ["block","if",[["get","model.twitter",["loc",[null,[67,8],[67,21]]]]],[],5,null,["loc",[null,[67,2],[75,9]]]],
      ["block","if",[["get","model.skype",["loc",[null,[77,8],[77,19]]]]],[],6,null,["loc",[null,[77,2],[85,9]]]],
      ["block","if",[["get","model.googlePlus",["loc",[null,[87,8],[87,24]]]]],[],7,null,["loc",[null,[87,2],[95,9]]]],
      ["block","if",[["get","model.youtube",["loc",[null,[97,8],[97,21]]]]],[],8,null,["loc",[null,[97,2],[105,9]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
  };
}()));