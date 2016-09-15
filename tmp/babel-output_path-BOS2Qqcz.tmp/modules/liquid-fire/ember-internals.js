export { containingElement };
export { routeName };
export { routeModel };
export { registerKeywords };
export { getComponentFactory };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  This module is intended to encapsulate all the known places where
  liquid-fire depends on non-public Ember APIs.
 */

import Ember from "ember";
var emberRequire = Ember.__loader.require;
var internal = emberRequire('htmlbars-runtime').internal;
var registerKeyword = emberRequire('ember-htmlbars/keywords').registerKeyword;
var _Stream = Ember.__loader.registry['ember-metal/streams/stream'] ? emberRequire('ember-metal/streams/stream') : emberRequire('ember-htmlbars/streams/stream');
var BasicStream = _Stream['default'];
var Stream = _Stream.Stream;

var routeIsStable;
try {
  routeIsStable = emberRequire('ember-htmlbars/keywords/real_outlet')['default'].isStable;
} catch (err) {
  routeIsStable = emberRequire('ember-htmlbars/keywords/outlet')['default'].isStable;
}

// Given an Ember Component, return the containing element

function containingElement(view) {
  return view._renderNode.contextualElement;
}

// This is Ember's {{#if}} predicate semantics (where empty lists
// count as false, etc).
var shouldDisplay = Ember.__loader.registry['ember-metal/streams/stream'] ? emberRequire('ember-views/streams/should_display')['default'] : emberRequire('ember-htmlbars/streams/should_display')['default'];

export { shouldDisplay };
// Finds the route name from a route state so we can apply our
// matching rules to it.

function routeName(routeIdentity) {
  var o, r;
  if (routeIdentity && (o = routeIdentity.outletState) && (r = o.render)) {
    return [r.name];
  }
}

// Finds the route's model from a route state so we can apply our
// matching rules to it.

function routeModel(routeIdentity) {
  var o;
  if (routeIdentity && (o = routeIdentity.outletState)) {
    return [o._lf_model];
  }
}

function withLockedModel(outletState) {
  var r, c;
  if (outletState && (r = outletState.render) && (c = r.controller) && !outletState._lf_model) {
    outletState = Ember.copy(outletState);
    outletState._lf_model = c.get('model');
  }
  return outletState;
}

function registerKeywords() {
  registerKeyword('get-outlet-state', {
    willRender: function willRender(renderNode, env) {
      env.view.ownerView._outlets.push(renderNode);
    },

    setupState: function setupState(lastState, env, scope, params, hash) {
      var outletName = env.hooks.getValue(params[0]);
      var watchModels = env.hooks.getValue(hash.watchModels);
      var stream = lastState.stream;
      var source = lastState.source;
      if (!stream) {
        source = { identity: {
            outletState: withLockedModel(env.outletState[outletName])
          } };

        if (!!Stream) {
          stream = new Stream(function () {
            return source.identity;
          });
        } else {
          stream = new BasicStream(function () {
            return source.identity;
          });
        }
      }
      return { stream: stream, source: source, outletName: outletName, watchModels: watchModels };
    },

    render: function render(renderNode, env, scope, params, hash, template, inverse, visitor) {
      internal.hostBlock(renderNode, env, scope, template, null, null, visitor, function (options) {
        var stream = renderNode.getState ? renderNode.getState().stream : renderNode.state.stream;
        options.templates.template['yield']([stream]);
      });
    },
    rerender: function rerender(morph, env) {
      var state = morph._state ? morph._state : morph.state;
      var newState = withLockedModel(env.outletState[state.outletName]);

      if (isStable(state.source.identity, { outletState: newState }, state.watchModels)) {
        // If our own view was stable, we preserve the same object
        // identity so that liquid-versions will not animate us. But
        // we still need to propagate any child changes forward.
        Ember.set(state.source.identity, 'outletState', newState);
      } else {
        // If our own view has changed, we present a whole new object,
        // so that liquid-versions will see the change.
        state.source.identity = { outletState: newState };
      }

      state.stream.notify();
    },
    isStable: function isStable() {
      return true;
    }
  });

  registerKeyword('set-outlet-state', {
    setupState: function setupState(state, env, scope, params) {
      var outletName = env.hooks.getValue(params[0]);
      var outletState = env.hooks.getValue(params[1]);
      return { outletState: _defineProperty({}, outletName, outletState) };
    },

    childEnv: function childEnv(state, env) {
      return env.childWithOutletState(state.outletState);
    },

    render: function render(renderNode, env, scope, params, hash, template, inverse, visitor) {
      internal.hostBlock(renderNode, env, scope, template, null, null, visitor, function (options) {
        options.templates.template['yield']();
      });
    },

    isStable: function isStable() {
      return true;
    }
  });
}

function getComponentFactory(owner, name) {
  var looker = owner.lookup('component-lookup:main');
  if (looker.lookupFactory) {
    return looker.lookupFactory(name);
  } else {
    var Component = looker.componentFor(name, owner);
    var layout = looker.layoutFor(name, owner);
    return (Component || Ember.Component).extend({ layout: layout });
  }
}

function isStable(oldState, newState, watchModels) {
  return routeIsStable(oldState, newState) && (!watchModels || modelIsStable(oldState, newState));
}

function modelIsStable(oldState, newState) {
  var oldModel = routeModel(oldState) || [];
  var newModel = routeModel(newState) || [];
  return oldModel[0] === newModel[0];
}