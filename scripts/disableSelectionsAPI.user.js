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
    var disableSelections = function() {
        document.getSelection = window.getSelection = function() {};
    };
    
    // inject script
    var script = document.createElement ("script");
    script.appendChild (document.createTextNode ("(" + disableSelections + ")();"));
    (document.body || document.head || document.documentElement).appendChild (script);
})();

