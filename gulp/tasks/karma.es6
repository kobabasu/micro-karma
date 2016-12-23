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
     * src
     */
    const test = {
      src:   dir.src,
      spec:  dir.spec,
      test:  dir.root + 'karma.conf.js',
      dist:  dir.dist,
      watch: dir.src + '**/*.*'
    };

    gulp.task(prefix + 'karma:babel', shell.task([`
      babel ${test.src} --out-dir ${test.spec}
    `]));

    gulp.task(prefix + 'karma:browserify', shell.task([`
      for file in $(find ${test.spec} -maxdepth 1 -type f); do
        src=$(basename $file);
        dist=$(echo $src | sed 's/\.[^\.]*$//');
        browserify ${test.spec}$src -o ${test.dist}$dist.build.js;
      done
    `]));

    gulp.task(prefix + 'karma:src',
      gulp.series(
        prefix + 'karma:babel',
        prefix + 'karma:browserify'
    ));


    /*
     * karma
     */
    gulp.task(prefix + 'karma', shell.task([`
      karma start ${test.test}
    `]));


    /*
     * run
     */
    gulp.task(prefix + 'karma:run', shell.task([`
      karma run
    `], {ignoreErrors: true}));


    /*
     * watch
     */
    gulp.task(prefix + 'karma:watch', () => {
      gulp
        .watch([test.watch], gulp.series(
          prefix + 'karma:src',
          prefix + 'karma:run'
        ))
        .on('error', err => console.error('' + err));
    });


    /*
     * test
     */
    gulp.task(prefix + 'test',
      gulp.series(
        prefix + 'karma'
    ));
  }
};

module.exports = new Karma();
