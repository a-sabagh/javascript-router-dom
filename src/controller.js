function controller(page) {
	let title = page.title
	let content = page.content
	document.getElementById("content").innerHTML = title + content
}

function routeInit(event){
	event.preventDefault()
	let target = event.target
	let path = target.href
	let title = target.title
	window.history.pushState({title: title},'',path)
	window.document.title = title
	let page = router(path)
}
