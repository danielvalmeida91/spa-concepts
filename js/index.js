import './router.js'
const routes = {
  // the property route will be created with "" because we cannot access for example routes./about
  // correct form to access this property is routes["/about"]
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/contact': '/pages/contact.html',
  404: '/pages/404.html'
}
function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, '', event.target.href)

  handle()
}

function handle() {
  // /about, /. /404 , /contact
  // const pathname = window.location.pathname
  const { pathname } = window.location // destructuring method [best choice]
  const route = routes[pathname] || routes[404]

  fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
}

window.onpopstate = () => handle()
window.route = () => route()
