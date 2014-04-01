'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('blogularApp.services', []).
  value('version', '0.1').
  service('PostService', function (localStorageService) {

	    var last_id = 0;
	  
	  	var posts =  [];
	
		// Load local data and set default values
		this.init = function(){
			var local_last_id = localStorageService.get("last_id");
			if(local_last_id == null){
				localStorageService.set("last_id", 0);
				last_id = 0;
			}else{
				last_id = local_last_id;
			}

			var local_posts = localStorageService.get("posts")

			if(local_posts != null){
				posts = local_posts
			}else{
				posts = [];
			}
		}

		// Save data to local storages
		this.persistLocal = function(){
			localStorageService.set("posts", posts)
			localStorageService.set("last_id", last_id)
		}

		// Creates or updates post
	    this.save = function (post) {
	        if (post.id == null) { //create new one
	            post.id = last_id++;
	            posts.push(post);
	            this.persistLocal();
	            return post.id
	        } else { //update existing
	            for (var i in posts) {
	                if (posts[i].id == post.id) {
	                    posts[i] = post;
	                    this.persistLocal();
	                    return post.id
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
	    this.destroy = function (id) {
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
