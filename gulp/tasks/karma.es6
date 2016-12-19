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

    gulp.task(prefix + 'karma:build', shell.task([`
      babel ${test.src} --out-dir ${test.spec}
    `]));

    gulp.task(prefix + 'test',
      gulp.series(
        prefix + 'karma:build',
        prefix + 'karma'
    ));
  }
};

module.exports = new Karma();
