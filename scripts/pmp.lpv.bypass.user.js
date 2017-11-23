// ==UserScript==
// @name         Bypass Paid Memberships Pro - Limit Post Views Add On
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypasses Paid Memberships Pro - Limit Post Views Add On
// @author       patkub
// @grant        none
// @match        https://hacked.com/*
// ==/UserScript==

(function() {
    'use strict';

    // delete pmpro_lpv_count cookie
    document.cookie = "pmpro_lpv_count=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
})();

