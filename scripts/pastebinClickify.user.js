// ==UserScript==
// @name         pastbin clickify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes list of links clickable
// @author       You
// @match        https://pastebin.com/raw/5afp1KHr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const pre = document.querySelector("body > pre")
    // number of beginning urls to ignore: 1
    const els = pre.textContent.split(/\r?\n/).slice(1)

    // clear text content
    pre.innerHTML = ""

    for (const el of els) {
        pre.appendChild(clickify(el))
    }

    function clickify(el) {
        const a = document.createElement("a")
        const text = document.createTextNode(el + "\n")
        a.appendChild(text)
        a.href = el
        //a.target = "_blank"
        return a
    }
})();
