// ==UserScript==
// @name         zoom.us logger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  grab useful data
// @author       You
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Transcript URL:")
    console.log(window.location.origin + window.__data__.transcriptUrl)
    console.log("Chat JSON:")
    console.log(JSON.stringify(window.__data__.chatList))
})();

