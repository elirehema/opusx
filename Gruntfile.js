"use strict";

module.exports = function (grunt) {
  // Tell Grunt what tasks to load
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-run");

  // Task configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    // The sass task

    sass: {
      dev: {
        options: {
          sourcemap: "none",
          style: "compressed",
        },
        files: [
          {
            expand: true,
            cwd: "assets/styles/sass/",
            src: ["*.scss"],
            dest: "assets/styles/css/",
            ext: ".css",
          },
        ],
      },
    },
    run: {
      options: {},
      dev: {
        cmd: "npm",
        args: ["run", "dev"],
      },
      build: {
        cmd: "npm",
        args: ["run", "build"],
      },
    },

    watch: {
      // Watch our css files for changes
      css: {
        files: ["assets/styles/sass/*.scss"], // what file to watch
        tasks: ["sass:dev"], // what task to execute on change
        options: { livereload: true },
      },
      options: {
        // To prevent checking files for change after the autoprefixer task is done
        spawn: false,
      },
    },

    // Browser sync task
    browserSync: {
      dev: {
        // What files to inject
        bsFiles: {
          src: ["assets/styles/styles.css"],
          tasks: ["run:dev"],
        },
        options: {
          watchTask: true,
          proxy: "nehalem/test/gruntt",
        },
      },
    },
  });

  // Default task when the grunt command is called
  grunt.registerTask("default", ["browserSync", "watch"]);
};
