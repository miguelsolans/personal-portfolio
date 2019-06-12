//Main config file: http://requirejs.org/docs/api.html#config-baseUrl
require.config({
    //Define 3rd party plugins dependencies
    "*": {
        "utils":    {},
        "richText": {},
        "tagify":   {},
        "admin":    {},
        "public":   {}
    },
    paths: {
        jquery:     'external/jquery',
        instafeed:  'external/instafeed',
        facebook:   'external/facebook',
        utils:      'utils',
        richText:   'external/jquery.richtext',
        tagify:     'external/tagify',
        admin:      'admin',
        public:     'public'
    },
});

//Main module
require(["renderer", "utils", "admin", "public"], function () {
    console.log("RequireJS Modules Loaded");
});