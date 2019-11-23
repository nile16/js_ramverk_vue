
"use strict";


//export PATH=$PATH:/home/nile/jsframe/me-vue

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get("http://127.0.0.1:8082/");

setTimeout(function() {
    browser.getTitle().then(function( title ) {
        console.log("Title: ", title);
        browser.close();
    });
}, 5000);
