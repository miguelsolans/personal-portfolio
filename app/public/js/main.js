//Main config file: http://requirejs.org/docs/api.html#config-baseUrl
require.config({
    //Define 3rd party plugins dependencies
    "*": {
        "utils":    {},
        "richText": {}
    },
    paths: {
        jquery:     'external/jquery',
        instafeed:  'external/instafeed',
        facebook:   'external/facebook',
        utils:      'utils',
        richText:   'external/jquery.richtext'
    },
});

//Main module
require(["renderer", "utils"], function () {
    console.log("RequireJS Modules Loaded");
});