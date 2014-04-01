'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('blogularApp.services', []).
  value('version', '0.1').
  service('PostService', function () {
	    var last_id = 3;
	     
	    var posts = [
	    		{"id": 0, "title": "Başlık", "text": "İçerik" },
				{"id": 1, "title": "Başlık2", "text": "İçerik2" },
				{"id": 2, "title": "Başlık3", "text": "İçerik3" }
				]
	
		// Creates or updates post
	    this.save = function (post) {
	        if (post.id == null) { //create new one
	            post.id = uid++;
	            posts.push(post);
	        } else { //update existing
	            for (i in posts) {
	                if (posts[i].id == contact.id) {
	                    posts[i] = contact;
	                }
	            }
	        }
	 
	    }

		// Returns post by given id
	    this.get = function (id) { 
	        for (var i in posts) {
	            if (posts[i].id == id) {
	                return posts[i];
	            }
	        }
	 
	    }
	     
    	// Deletes post by given id
	    this.delete = function (id) {
	        for (var i in posts) {
	            if (posts[i].id == id) {
	                posts.splice(i, 1);
	            }
	        }
	    }
	 
	 	//Returns all posts
	    this.list = function () { 
	        return posts;
	    }
	});
