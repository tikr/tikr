'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "tikr-secret",

  GITHUB_ID: '85dbdfa618adce29fade',
  GITHUB_SECRET: '76fcededc36e5c73f5da853f16588c0df56283de',
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
