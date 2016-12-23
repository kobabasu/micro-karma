'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6';

class Karma extends DefaultRegistry {

  init() {
    // task名の接頭辞を設定
    let prefix = (dir.name == '') ? '' : dir.name + ':';

    /*
     * test 
     */
    const test = {
      src:   dir.src,
      spec:  dir.spec,
      test:  dir.root + 'karma.conf.js'
    };

    gulp.task(prefix + 'karma', shell.task([`
      karma start ${test.test}
    `]));

    /*
    gulp.task(prefix + 'karma:build', shell.task([`
      babel ${test.src} --out-dir ${test.spec}
    `]));
    */

    gulp.task(prefix + 'karma:build', shell.task([`
      for file in $(find ${test.spec} -maxdepth 1 -type f); do
        src=$(basename $file);
        dist=$(echo $src | sed 's/\.[^\.]*$//');
        browserify ${test.spec}$src -o ${test.dist}$dist.build.js;
      done
    `]));


    gulp.task(prefix + 'test',
      gulp.series(
        prefix + 'karma:build',
        // prefix + 'karma'
    ));
  }
};

module.exports = new Karma();
