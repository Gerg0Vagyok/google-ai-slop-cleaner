// content.js
(function() {
    'use strict';

    const Filters = ' -"stable diffusion" -"open art" -"prompt hunt" -"dall-e" -ai -generate -midjourney -prompt -seed -checkpoint -steps -model -CLIP -CFG -sampling -"sampling method" -masterpiece -4k -8k -wallpaper -lowres -watermark -blurry -signature -karras -euler -site:jigidi.com -site:dreamstime.com before:2024';

    const urlParams = new URLSearchParams(window.location.search);
    let searchQuery = urlParams.get('q');
    if (!searchQuery) return;

    searchQuery += Filters;

    // If the query has changed, update the URL without reloading
    if (searchQuery !== urlParams.get('q')) {
        urlParams.set('q', searchQuery);
        const newUrl = window.location.pathname + '?' + urlParams.toString();
        window.history.replaceState({}, '', newUrl); // Update URL in the browser bar without refreshing
        console.log("Updated URL:", newUrl);
    }

    const inputEl = document.getElementById("APjFqb");
    if (!inputEl || !inputEl.childNodes.length) {
        console.log("Search input element not found.");
        return;
    }

    const orstring = inputEl.childNodes[0].data;


    let myregex = new RegExp(Filters, 'g');

    if (orstring.includes(Filters)) {
        document.getElementById("APjFqb").childNodes[0].data = orstring.replace(myregex, "");
    }

    console.log("Just to make sure: " + document.getElementById("APjFqb").childNodes[0].data);
})();
