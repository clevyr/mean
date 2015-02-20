'use strict';

/*
 * Defining the Package
 */
var Theme = require('meanio').Theme,
  favicon = require('serve-favicon'),
  express = require('express');

var Jason = new Theme('jason');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */

//TODO
/*
Removed 'auth' dependency from System register, this dependency came from the access package
*/
Jason.register(function(app, auth, database) {
    
  //We enable routing. By default the Package Object is passed to the routes
  //TODO
  // Removed 'auth' dependency from system routes
  Jason.routes(app, auth, database);

  Jason.aggregateAsset('css', 'common.css');
  Jason.aggregateAsset('styl', 'test.styl');
  //Jason.aggregateAsset('js', 'test.js');

  // The middleware in config/express will run before this code

  // Set views path, template engine and default layout
  //app.set('views', __dirname + '/server/views');

  // Setting the favicon and static folder
  app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

  // Adding robots and humans txt
  app.use(express.static(__dirname + '/public/assets/static'));

  return Jason;
});
