module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      src: ['src/**/*.js'],
      options: {
        browser: true,
        indent: 2,
        white: false,
        evil: true,
        regexdash: true,
        wsh: true,
        trailing: true,
        eqnull: true,
        expr: true,
        boss: true,
        node: true,
        strict: false
      }
    },

    qunit: {
      all: {
        options: {
          urls: ['http://localhost:8000/ice/test/test.html']
        }
      }
    },

    connect: {
      server: {
        options: {
          base: '../'
        }
      }
    },

    concat: {
      dist: {
        src: ['lib/rangy/rangy-core.js', 'lib/uuid/uuid.js', 'src/polyfills.js', 'src/ice.js', 'src/dom.js', 'src/bookmark.js', 'src/selection.js', 'src/icePlugin.js', 'src/icePluginManager.js', 'src/plugins/IceAddTitlePlugin/IceAddTitlePlugin.js', 'src/plugins/IceCopyPastePlugin/IceCopyPastePlugin.js', 'src/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js', 'src/plugins/IceEmdashPlugin/IceEmdashPlugin.js'],
        dest: 'dist/ice.js'
      }
    },

    uglify: {
      options: {
        beautify : {
          ascii_only : true
        },
        preserveComments: false
      },
      ice: {
        files: {
          'dist/ice.min.js': ['dist/ice.js']
        }
      },
      icemaster: {
        options: { },
        files: {
          'ice-master.min.js': ['dist/ice.js']
        }
      },
      tinyice: {
        files: {
          'dist/tinymce/plugins/ice/plugin.min.js': ['lib/tinymce/plugins/ice/plugin.js']
        }
      },
      tinysr: {
        files: {
          'dist/tinymce/plugins/icesearchreplace/plugin.min.js': ['lib/tinymce/plugins/icesearchreplace/plugin.js']
        }
      }
    },

    compress: {
      zip: {
        options: {
          archive: 'dist/ice_<%= pkg.version %>.zip'
        },
        files: [
          {src: './**', cwd: 'dist/', expand:true}
        ]
      }
    },

    clean: {
      build: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['connect', 'qunit']);

  grunt.registerTask('build', ['clean:build', 'concat', 'uglify:ice', 'uglify:icemaster', 'uglify:tinyice', 'uglify:tinysr', 'cp', 'compress:zip']);

  grunt.registerTask('package', ['clean:build', 'concat', 'cp', 'compress:zip']);

  grunt.registerTask('cp', function() {
    cpTinyDir('ice');
    grunt.file.copy('ice-master.min.js', 'dist/tinymce/plugins/ice/js/ice.min.js');
    grunt.file.delete('dist/tinymce/plugins/ice/plugin.js');

    cpTinyDir('icesearchreplace');
    grunt.file.delete('dist/tinymce/plugins/icesearchreplace/plugin.js');
  });

  var cpTinyDir = function(dir) {
    grunt.file.recurse('lib/tinymce/plugins/' + dir + '/', function(abspath, rootdir, subdir, filename) {
      grunt.file.copy(rootdir + '/' + (subdir ? subdir + '/' : '') + filename,
                      'dist/tinymce/plugins/' + dir + '/' + (subdir ? subdir + '/' : '') + '/' + filename);
    });
  };

};
