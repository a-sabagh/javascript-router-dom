import style from './style.css'
import {router} from './router.js'
import {controller} from './controller.js'

window.routeInit = (event) => {
	event.preventDefault()
	let target = event.target
	let path = new URL(target.href).pathname
	let page = router(path)
	window.history.pushState({title: page.title},'',path)
	window.document.title = page.title
	controller(page)
}

window.onload = () => {
	let href = window.location.href
	let path = new URL(href).pathname
	let page = router(path)
	window.document.title = page.title
	controller(page)
}
