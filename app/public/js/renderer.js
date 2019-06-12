define([
    'jquery',
    'admin',
    'public'
], function($, admin, publicData) {


    var sPath = window.location.pathname;

    var params = sPath.split('/');


    if(params[1] === 'admin' || params[1] === 'newdata') {
        admin.renderRichText();
        admin.renderTagify();
    }
    else {
        publicData.renderFacebookData();
        publicData.renderImagesFromApis();
        publicData.renderInstagramData();
    }
});