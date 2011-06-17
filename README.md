#sizeit.js — a js helper for responsive web design

## What?

sizeit.js is a JavaScript utility that detects the screen size and loads external css based on the settings you configure. Works kinda like media queries.


## Why?

In many cases, media queries do just fine, but not always. The reason I created sizeit was for building web apps. I need more control over the appearance and content than what CSS and media queries allow. Using JavaScript to handle size detection, this information is available for application scripts as well as templating tools like [jQuery Templates](http://api.jquery.com/category/plugins/templates/) or [Mustache](http://mustache.github.com).

Other reasons for using sizeit.js? Media queries are not supported in older browsers. By dynamically loading external CSS based on window size, sizeit.js eliminates the need to load extra css for all the various screen sizes. JavaScript can’t hook into media queries, which are purely a CSS convention, so I’ve seen examples of using both together. With sizeit.js, all your screen size detection is handled in one spot.


## How?

Embed the script in the head of your page. Configure breakpoints and link to css stylesheets for each of the sizes you wish to target. For example, to target small (phones), medium (tablets) and large (desktop), you could configure it as follows.

	<!-- Required viewport setting for sizeit to work on devices -->
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">

	<!-- Do sizeit in the head so CSS is dynamically added first -->
	<script src="sizeit.min.js"></script>
	<script>
	sizeit.configure(
	  {
		max: 600,
		css: "css/small.css",
		name: "small"
	  },
	  {
		max: 1024,
		css: "css/medium.css",
		name: "medium"
	  },
	  {
		css: "css/large.css",
		name: "large"
	  }
	);
	</script>
	
## Where?

See it a couple simple examples [here](http://johnpolacek.com/sizeit/sizeit.js/demo1.html) and [here](http://johnpolacek.com/sizeit/sizeit.js/demo2.html). Please, send me any cool examples of how you are using it.


## Who?

sizeit.js created by John Polacek  
Twitter: http://twitter.com/#!/johnpolacek  
Blog: http://johnpolacek.com


## When?

sizeit.js has a [WTFPL license](http://sam.zoy.org/wtfpl/COPYING), so DWTFUW2 with it.

