// ==UserScript==
// @name         PlanetaPL double-click to fullscreen
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  double-click video to fullscreen
// @author       You
// @include      /https?://online.planetapl.tv/*/
// @require      https://github.com/plohoj/userscript-requirejs/releases/download/0.0.1/userscript-require.min.js
// @resource     requirejs   https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js
// @resource     ready       https://unpkg.com/@ryanmorr/ready/dist/ready.umd.js
// @grant        GM_getResourceText
// ==/UserScript==

/* global require $ */

require(['ready'], (ready) => {
    $(function() {
        /* View in fullscreen */
        function openFullscreen(elem) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }

        /* Close fullscreen */
        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }

        ready('#player-video', (playerVideoEl) => {
            // overlay a div to block click events
            $(".player-video-info-wrap").prepend($(`<div style="
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
"></div>`).on('dblclick', () => {
                // use browser's fullscreen api
                document.fullscreenElement ? closeFullscreen() : openFullscreen(playerVideoEl);
                // or click the player's fullscreen button
                //document.fullscreenElement ? $(".player-controls-full-fullscreen").click() : $(".player-fullscreen-trigger").click();
            }));

            // bring video controls above overlay
            $(".player-controls").css("z-index", "1");

            // define and register keypress handler
            document.addEventListener('keyup', (e) => {
                if (e.metaKey && e.keyCode == 112) {
                    // meta + F1
                    closeFullscreen();
                } else if (e.metaKey && e.keyCode == 113) {
                    // meta + F2
                    openFullscreen(playerVideoEl);
                }
            }, false);
        });
    });
});
