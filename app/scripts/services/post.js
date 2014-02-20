'use strict';

app.factory('Post', function($resource){
	return $resource('https://toonverbeek.firebaseio.com/posts/:id.json');
});