var BEM = require('bem'),
    Q = BEM.require('q'),
    environ = require('bem-environ'),
    join = require('path').join,
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs'),

    tidy = require('htmltidy').tidy,
    tidyOpts = {
        doctype: 'html5',
        hideComments: false, //  multi word options can use a hyphen or "camel case"
        indent: true,
        'indent-spaces': 4,
        bare: true,
        breakBeforeBr: true,
        fixUri: true,
        wrap: 0
    };

exports.baseTechPath = join(BEMBL_TECHS, 'html.js');

exports.techMixin = {

    getCreateResult: function(path, suffix, vars) {
        var deferred = Q.defer();

        return this.__base.apply(this, arguments)
            .then(function(html) {

                tidy(html, tidyOpts, function(err, html) {
                    if (err) {
                        deferred.reject(new Error(error));
                    } else {
                        deferred.resolve(html);
                    }
                });

                return deferred.promise;

            });

    }

};
