// ==UserScript==
// @name         Confluence edit fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the height on the edit form to fit browser viewport height
// @author       Ilon Sjögren
// @match        https://confluence.mtg.com/pages/editpage.action*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var formId = 'editpageform';
    $('#' + formId).css(
        'height',
        '95vh'
    );
})();
