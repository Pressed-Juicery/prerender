#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
  // chromeLocation: "/Applications/Chromium.app/Contents/MacOS/Chromium",
  pageLoadTimeout: 60000,
  chromeFlags: [ '--user-agent="Prerender"', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars' ],
  waitAfterLastRequest: 20000,
  port: 3005,
  logRequests: false
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
