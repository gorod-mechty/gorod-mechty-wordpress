var PATH = require('path'),
    join = PATH.join,
    environ = require('bem-environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs');

exports.baseTechPath = join(PRJ_TECHS, 'html.js');

exports.techMixin = {

    storeCreateResult: function(path, suffix, res, force) {
        var pathArr = path.split('/');
        pathArr.pop();
        pathArr.push('index.html');

        return this.__base(pathArr.join('/'), suffix, res, true);
    }

};
