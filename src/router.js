function router(path){
	this.map = {
		"^\/about-us\/?$" : {
			title: "<h1>About Us</h1>",
			content: "",
		},
		"^\/contact-us\/?$" : {
			title: "<h1>Contact Us</h1>",
			content: "",
		},
		"^\/(home)?$" : {
			title: "<h1>Home</h1>",
			content: "",
		},
	}

	for(let regString in this.map){
		let regex = new RegExp(regString)
		let matches = path.match(regex)
		if(matches){
			return this.map[regString]
		}
	}

}
