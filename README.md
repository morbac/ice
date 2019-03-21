# ice.js

Ice is a track changes implementation, built in javascript, for anything that is `contenteditable` on the web. Conceived by the CMS Group at The New York Times, ice is powering the editor used for writing articles in the newsroom.

The present project is a fork of Ice which focuses on the tinymce plugin version of the tool.

See https://github.com/NYTimes/ice for original project.

## Download

Releases are available here: https://github.com/morbac/ice/releases

## Get Started

**_Tinymce initialization_** - Add the ice plugin to your tinymce plugins directory and include the following in your tinymce init:
```javascript
 tinymce.init({
   selector: 'textarea',
   menubar: false,
   element_format: 'xhtml',
   entity_encoding: 'raw',
   paste_as_text: true,
   forced_root_block: false,
   autoresize_bottom_margin: 0,
   extended_valid_elements: "p,span[*]",
   toolbar: 'undo redo | iceaccept icereject',
   contextmenu: 'iceaccept icereject',
   plugins: 'ice,contextmenu',
   ice: {
     user: { id: '1', name: 'John Doe' },
     preserveOnPaste: 'p,a[href],i,em,b,span'
   }
 });
```

## License

[GPL 2.0](https://github.com/morbac/ice/blob/master/LICENSE)
