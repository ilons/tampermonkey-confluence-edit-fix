// ==UserScript==
// @name         Confluence edit fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Change the height on the edit form to fit browser viewport height
// @author       Ilon Sjögren
// @match        https://confluence.mtg.com/pages/editpage.action*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(window).on('resize', function() {
        var contentId = 'content';
        var headerId = 'header';
        var containerId = 'full-height-container';

        var pageContainerHeight = $('#' + containerId).height();
        var headerHeight = $('#' + headerId).height();
        var newElementHeight = pageContainerHeight - headerHeight;

        $('#' + contentId).css(
            'height',
            newElementHeight
        );

        console.log('Tampermonkey adjusted #' + contentId + ' to ' + newElementHeight);
    });

    $(window).trigger('resize');
})();
