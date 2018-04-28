// ==UserScript==
// @name         Steam Community Chat AutoScroll
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  AutoScroll online steam chat.
// @author       patkub
// @match        https://steamcommunity.com/chat*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let chatForm = document.getElementById('chatform');

    // scroll chat on message enter press
    chatForm.onkeypress = (e) => {
        if (e.keyCode === 13) {
            scrollChat();
        }
    };

    // scroll chat on message submit button press
    chatForm.addEventListener("submit", () => {
        scrollChat();
    });

    // scroll chat
    function scrollChat() {
        // get the chat dialog box
        let dialog = document.querySelector("#chatlog > div > div.chat_dialog_content > div");
        // scroll it!
        dialog.scrollTop = dialog.scrollHeight;
    }
})();