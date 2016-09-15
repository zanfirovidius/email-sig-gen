import { routeName, routeModel } from "liquid-fire/ember-internals";

export default {
  oldValue: {
    reversesTo: 'newValue',
    accessor: function accessor(conditions) {
      return [versionValue(conditions, 1)];
    }
  },
  newValue: {
    reversesTo: 'oldValue',
    accessor: function accessor(conditions) {
      return [versionValue(conditions, 0)];
    }
  },
  oldRoute: {
    reversesTo: 'newRoute',
    accessor: function accessor(conditions) {
      return routeName(versionValue(conditions, 1));
    }
  },
  newRoute: {
    reversesTo: 'oldRoute',
    accessor: function accessor(conditions) {
      return routeName(versionValue(conditions, 0));
    }
  },
  oldModel: {
    reversesTo: 'newModel',
    accessor: function accessor(conditions) {
      return routeModel(versionValue(conditions, 1));
    }
  },
  newModel: {
    reversesTo: 'oldModel',
    accessor: function accessor(conditions) {
      return routeModel(versionValue(conditions, 0));
    }
  },
  helperName: {},
  outletName: {},
  parentElementClass: {
    accessor: function accessor(conditions) {
      var cls = conditions.parentElement.attr('class');
      if (cls) {
        return cls.split(/\s+/);
      }
    }
  },
  parentElement: {},
  firstTime: {},
  media: {}
};

function versionValue(conditions, index) {
  var versions = conditions.versions;
  return versions[index] ? versions[index].value : null;
}