define([
    'jquery',
    'admin',
    'public',
    'cookies'
], function($, admin, publicData, cookies) {


    var sPath = window.location.pathname;

    var params = sPath.split('/');


    if(params[1] === 'admin' || params[1] === 'newdata') {
        admin.renderRichText();
        admin.renderTagify();
        var language = cookies.getCookie("lang");
        if(language === "") { cookies.setCookie("lang", "pt", 365)}
    }
    else {
        publicData.renderFacebookData();
        publicData.renderImagesFromApis();
        publicData.renderInstagramData();
    }
});