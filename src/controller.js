function controller(page) {
	let title = page.title
	let content = page.content
	window.document.getElementById("content").innerHTML = content
}

export {controller}
