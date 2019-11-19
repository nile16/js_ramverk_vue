
"use strict";


//export PATH=$PATH:/home/nile/jsframe/me-vue

var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();




browser.get("http://127.0.0.1:8082/");

// // Two different ways to work with promises
// // Way 1
// let promise = browser.getTitle();
//
// promise.then(function(title) {
//     console.log(title);
// });
//
// // Way 2
// // browser.getTitle().then(function( title ) {
// //     console.log(title);
// // });
//
browser.quit();
