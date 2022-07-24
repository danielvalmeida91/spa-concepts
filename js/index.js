const routes = {
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/contact': '/pages/contact.html',
  404: '/pages/404.html'
}

window.onpopstate = () => handle() //onpopstate faz com que a pessoa possa voltar a pagina pelo botão do navegador.

window.route = () => route()
