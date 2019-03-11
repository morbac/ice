var require = {
    "paths": {
      "jquery": "http://code.jquery.com/jquery-3.3.1.js",
      'tinymce': "tinymce/js/tinymce/tinymce",
      "tinymce.jquery": "tinymce/js/tinymce/jquery.tinymce.min",
   //    "rangy": "rangy/rangy-core",
   //    "ice": "ice/ice",
   //    "icePluginManager": "ice/icePluginManager",
   //    "IceAddTitlePlugin":'ice/plugins/IceAddTitlePlugin/IceAddTitlePlugin',
	  // "IceCopyPastePlugin":'ice/plugins/IceCopyPastePlugin/IceCopyPastePlugin.js',
	  // "IceEmdashPlugin":'ice/plugins/IceEmdashPlugin/IceEmdashPlugin.js',
	  // "IceSmartQuotesPlugin":'ice/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js',

  "jquery3.3": "http://code.jquery.com/jquery-3.3.1.js",
  "rangy-core": "../../lib/rangy/rangy-core",
  "polyfills": "../../src/polyfills",
  "ice":"../../src/ice",
  "dom":"../../src/dom",
  "icePlugin":"../../src/icePlugin",
  "icePluginManager":"../../src/icePluginManager",
  "bookmark":"../../src/bookmark",
  "selection":"../../src/selection",
  "IceAddTitlePlugin":"../../src/plugins/IceAddTitlePlugin/IceAddTitlePlugin",
  "IceCopyPastePlugin":"../../src/plugins/IceCopyPastePlugin/IceCopyPastePlugin",
  "IceEmdashPlugin":"../../src/plugins/IceEmdashPlugin/IceEmdashPlugin",
  "IceSmartQuotesPlugin":"../../src/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin",
  "tinymce":"../../lib/tinymce/jscripts/tinymce4/tinymce",
    },
    "shim": {
    	"jquery3.3": {
    		exports: "$"
    	},
      "rangy-core": {
        exports: "window.rangy"
      },
      "dom": {
        deps:['ice'],
        exports: "dom"
      },
      "selection" : {
        exports: "Selection"
      },
      "bookmark": {
        exports: "Bookmark"
      },
      "ice" : {
        exports: "ice"
      },
      "icePluginManager": {deps: ['ice'] },
      "IceAddTitlePlugin":{ deps: ['icePluginManager']},
      "IceCopyPastePlugin":{ deps: ['icePluginManager']},
      "IceEmdashPlugin":{ deps: ['icePluginManager']},
      "IceSmartQuotesPlugin":{ deps: ['icePluginManager']},
    	"tinymce": {
    		exports: "tinymce",
    		init: function() {
    			this.tinymce.DOM.events.domLoaded = true;
    			return this.tinymce;
    		}
    	},
    	"tinymce.jquery" :{
    		deps: ['jquery']
    	}
    }
};