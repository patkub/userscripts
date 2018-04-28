// ==UserScript==
// @name         Steam Community Chat AutoScroll
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  AutoScroll online steam chat.
// @author       patkub
// @contributor  AleXu224
// @match        https://steamcommunity.com/chat*
// @grant        none
// ==/UserScript==

'use strict';

// Chat dialog box selector
const chatDialogSelector = "#chatlog > div > div.chat_dialog_content > div";

// Update scroll interval in milliseconds
const checkInterval = 100;

(function() {
    // Declares an array in which user's number of messages will be stored
    var users = [];

    // Set an interval that checks if there is any new messages
    setInterval(function(){
      // Creates a variable that contains the number of messages for later use
      var x = document.getElementsByClassName("chat_dialog_content_inner");
      // For each chat that has been opened
      for (var i = 0; i < x.length; i++){
        if (users[i] != undefined){
          // If the number of messages for the chat has been set then do this
          if (x[i].children.length != users[i].messageCount){
            // If the current number of messages does not match the number that is stored
            // update the message count
            users[i].messageCount = x[i].children.length;
            // and scroll the chat
            scrollChat();
          }
        } else {
          // If the number of messages for the chat has not been set then set it
          users[i] = {"messageCount":x[i].children.length};
        }
      }
    }, checkInterval);
    
    // Instantly scroll chat when you send a message
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
        let dialog = document.querySelector(chatDialogSelector);
        // scroll it!
        dialog.scrollTop = dialog.scrollHeight;
    }
})();
