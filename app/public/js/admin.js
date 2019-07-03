define([
    // Nothing
    'jquery',
    'tagify',
    'richText',
    'cookies'
],function($, Tagify, richText) {
    'use strict';

    // Other functions
    // tag added callback
    function onAddTag(e){
        console.log("onAddTag: ", e.detail);
        console.log("original input value: ", input.value)
        tagify.off('add', onAddTag) // exmaple of removing a custom Tagify event
    }

    // tag removed callback
    function onRemoveTag(e){
        console.log(e.detail);
        console.log("tagify instance value:", tagify.value)
    }

    // on character(s) added/removed (user is typing/deleting)
    function onInput(e){
        console.log(e.detail);
        console.log("onInput: ", e.detail);
    }

    function onTagEdit(e){
        console.log("onTagEdit: ", e.detail);
    }

    // invalid tag added callback
    function onInvalidTag(e){
        console.log("onInvalidTag: ", e.detail);
    }

    // invalid tag added callback
    function onTagClick(e){
        console.log(e.detail);
        console.log("onTagClick: ", e.detail);
    }

    function onDropdownShow(e){
        console.log("onDropdownShow: ", e.detail)
    }

    function onDropdownHide(e){
        console.log("onDropdownHide: ", e.detail)
    }

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
        },
        
        renderTagify: function () {
            var input = document.querySelector('input[name=tag]'),
                // init Tagify script on the above inputs
                tagify = new Tagify(input, {
                    delimiters          : "; ",
                });

            // Chainable event listeners
            tagify.on('add', onAddTag)
                .on('remove', onRemoveTag)
                .on('input', onInput)
                .on('edit', onTagEdit)
                .on('invalid', onInvalidTag)
                .on('click', onTagClick)
                .on('dropdown:show', onDropdownShow)
                .on('dropdown:hide', onDropdownHide);
        }
    };

});