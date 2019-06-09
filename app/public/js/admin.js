define([
    // Nothing
    'jquery',
    'richText'
],function($, richText) {
    'use strict';
    return {

        renderRichText: function() {
            $('.content').richText({
                // text formatting
                bold:true,
                italic:true,
                underline: true,
                // text alignment
                leftAlign: true,
                centerAlign: true,
                rightAlign: true,
                fonts: false,
                // uploads
                imageUpload: false,
                fileUpload: false,
                // links
                urls: true
            });
        }
    };

});