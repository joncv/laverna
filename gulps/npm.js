'use strict';

module.exports = function(gulp, plugins) {
    return {
        install: function() {
            return gulp.src('./release/laverna/package.json')
            .pipe(
                plugins.shell(
                    'cd ./release/laverna && npm install --production && cd ../../'
                )
            );
        },
    };
};
