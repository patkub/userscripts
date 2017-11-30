// ==UserScript==
// @name         Disable Selections API
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable selection API to prevent overwritting copy function.
// @author       patkub
// @grant        none
// ==/UserScript==

(function() {
    // disable getSelection
    document.getSelection = window.getSelection = function() {};
})();

