(function($) {
 
  $.fn.tweet = function(o){
    var s = {
      username: [""],              // [string]   required, unless you want to display our tweets. :) it can be an array, just do ["username1","username2","etc"]
      avatar_size: null,                      // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                               // [integer]  how many tweets to display?
      loading_text: null,                     // [string]   optional loading text, displayed while tweets load
      query: null,                             // [string]   optional search query
	  max_id: 0
    };

    $.fn.extend({
      linkUrl: function() {
        var returning = [];
        var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
        this.each(function() {
          returning.push(this.replace(regexp,"<a href=\"$1\">$1</a>"))
        });
        return $(returning);
      },
      linkUser: function() {
        var returning = [];
        var regexp = /[\@]+([A-Za-z0-9-_]+)/gi;
        this.each(function() {
          returning.push(this.replace(regexp,"<a href=\"http://twitter.com/$1\">@$1</a>"))
        });
        return $(returning);
      },
      linkHash: function() {
        var returning = [];
        var regexp = / [\#]+([A-Za-z0-9-_]+)/gi;
        this.each(function() {
          returning.push(this.replace(regexp, ' <a href="http://search.twitter.com/search?q=&tag=$1&lang=all">#$1</a>'))
        });
        return $(returning);
      }
    });

    function relative_time(time_value) {
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      if(delta < 60) {
      return 'less than a minute ago';
      } else if(delta < 120) {
      return 'about a minute ago';
      } else if(delta < (45*60)) {
      return (parseInt(delta / 60)).toString() + ' minutes ago';
      } else if(delta < (90*60)) {
      return 'about an hour ago';
      } else if(delta < (24*60*60)) {
      return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
      return '1 day ago';
      } else {
      return (parseInt(delta / 86400)).toString() + ' days ago';
      }
    }

    if(o) $.extend(s, o);
    return this.each(function(){

      var query = '';
      if(s.query) {
        query += 'q='+s.query;
      }
      var url = 'http://search.twitter.com/search.json?&'+query+'&rpp='+s.count+'&since_id='+s.max_id+'&callback=?';
		if ($('#tweet_list').length > 0) {
			var list = $('#tweet_list');
		}
		else {
			var list = $('<ul class="tweet_list" id="tweet_list">').appendTo(this);
		}
      
      $.getJSON(url, function(data){
		data.results.reverse();
		if(data.results.length > 0) {

				
				$.each(data.results, function(i,item){
				
				  var avatar_template = '<a class="tweet_avatar" href="http://twitter.com/'+ item.from_user+'"><img src="'+item.profile_image_url+'" height="'+s.avatar_size+'" width="'+s.avatar_size+'" alt="" border="0"/>'+ item.from_user + '</a> : ';
				  var avatar = (s.avatar_size ? avatar_template : '')
				  var date = '<br /><a href="http://twitter.com/'+item.from_user+'/statuses/'+item.id+'" title="view tweet on twitter" class="tweet_date">'+relative_time(item.created_at)+'</a>';
				  var text = '<span class="tweet_text">' +$([item.text]).linkUrl().linkUser().linkHash()[0]+ '</span>';
				  
				  // until we create a template option, arrange the items below to alter a tweet's display.
				  list.prepend('<li>' + avatar + text + date + '</li>');
				  
				  list.children('li').removeClass();
				  list.children('li:odd').addClass('tweet_even');
				  list.children('li:even').addClass('tweet_odd');

				  if(list.children('li').length > 5) {
					list.children('li:last').remove();
				  };
				  current_tweet_id = (current_tweet_id < item.id ? item.id : current_tweet_id);
				});
		}
      });

    });
  };
})(jQuery);