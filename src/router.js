function router(path){
	let map = {
		"^\/about-us\/?$" : {
			title: "About Us",
			content: "<h1>About Us</h1> <p>So many times, we might want to write our JavaScript code in a single file but we want the code to be executed only if a particular route is matched. You can achieve this with the help of a router by downloading a router library or writing the code yourself.</p>",
		},
		"^\/contact-us\/?$" : {
			title: "Contact Us",
			content: "<h1>Contact Us</h1><p>Today, i'll walk you through building a very basic router function with vanilla JavaScript. I'll be using some es6 features and javascript regular expressions for building this router, so you have to be familiar with them for better understanding.</p><p>Webpack is fast. But once you have a growing number of static assets to process and a increasily-complex asset pipeline, you may wish for a faster build lifecycle in development mode. webpack-dev-server was created for such a purpose.</p>",
		},
		"^\/(home)?$" : {
			title: "Home",
			content: "<h1>Home</h1><p>welcome to our blog</p><p>It is a small express app that handles building your assets according to your webpack configuration, keeping them in memory, and doing so automatically as you change your source files.</p><p>This plugin generates an index.html file for you that will keep up to date with the correct references to your assets built inside of webpack-dev-server. Use of this plugin is perfect in situations where you're building a client-side app that just needs a single html file to bootstrap on top of.</p>",
		},
	}

	for(let regString in map){
		let regex = new RegExp(regString)
		let matches = path.match(regex)
		if(matches){
			return map[regString]
		}
	}

}

export {router}
