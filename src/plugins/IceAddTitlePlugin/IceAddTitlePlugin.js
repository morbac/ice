(function() {

var exports = this, IceAddTitlePlugin;
  
IceAddTitlePlugin = function(ice_instance) {
  this._ice = ice_instance;
};

IceAddTitlePlugin.prototype = {
  nodeCreated: function(node, option) {
    var title = (option.action || 'Modified') + ' by ' + node.getAttribute(this._ice.userNameAttribute) + ' - ';
    if (typeof this._ice.titleDateFormat == "function") {
      title += this._ice.titleDateFormat(parseInt(node.getAttribute(this._ice.timeAttribute)));
    } else {
      title += ice.dom.date(this._ice.titleDateFormat, parseInt(node.getAttribute(this._ice.timeAttribute)));
    }
    node.setAttribute('title', title);
  }
};

ice.dom.noInclusionInherits(IceAddTitlePlugin, ice.IcePlugin);
exports._plugin.IceAddTitlePlugin = IceAddTitlePlugin;

}).call(this.ice);
