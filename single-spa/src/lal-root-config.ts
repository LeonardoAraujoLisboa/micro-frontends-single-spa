import { registerApplication, start, LifeCycles } from "single-spa";
/* Local onde registra as aplicações com as rotas raiz */

interface DataInterface {
  name: string;
  package: string;
  activeWhen: string;
  exact: boolean;
}

fetch('http://localhost:3333/applications').then(res => res.json()).then((data:DataInterface[]) => 
  data.forEach(app => {
    registerApplication({
      name: app.name,
      app: () =>
        System.import<LifeCycles>(app.package),
      activeWhen: app.exact ? (location) => location.pathname === app.activeWhen : [app.activeWhen],
    })
  })
).finally(() => {
  start({
    urlRerouteOnly: true,
  });
})

/* registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import<LifeCycles>("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"), */
  /* activeWhen: ["/"], *//* com o array ele sempre vai renderizar a rota q tiver barra, ou seja, vai renderizar sempre esse, a melhor maneira de fazer é com location */
  /* activeWhen: (location) => location.pathname === '/',
}); */

/* registerApplication({
  name: "@lal/react-header",
  app: () =>
    System.import<LifeCycles>("@lal/react-header"),
  activeWhen: ['/'], *//* como é o header e eu quero sempre renderizar ele, eu coloco uma barra e eu deixei ai em cima pq ele tem q aparecer em cima de tudo */
//});

/* registerApplication({
  name: "@lal/react-single",
  app: () =>
    System.import<LifeCycles>("@lal/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
}); */

/* registerApplication({
  name: "@lal/react-multiples",
  app: () =>
    System.import<LifeCycles>("@lal/react-multiples"),
  activeWhen: ["/react-multiples"],
}); */

/* registerApplication({
  name: "@lal/react-parcel",
  app: () =>
    System.import<LifeCycles>("@lal/react-parcel"),
    activeWhen: (location) => location.pathname === '/react-parcel' ,
}); tirei o parcel dai, pois eu vou importar esse parcel dentro do route */

/* registerApplication({
  name: "@lal/react-route",
  app: () =>
    System.import<LifeCycles>("@lal/react-route"),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: "@lal/react-lazy",
  app: () =>
    System.import<LifeCycles>("@lal/react-lazy"),
  activeWhen: ['/react-lazy'],
}); */

/* start({
  urlRerouteOnly: true,
}); */


/* Seria interessante que so baixasse somente um react-router-dom que possa ser usada em todos os projetos. Então em casa projeto eu vou no webpack config de cada projeto q eu baixei o web pack e coloco isso externals: ["react-router-dom"] dentro da função merge. So que ai eu tenho q ir la no single spa e no index adicionar a dependencia do react-router-dom*/

/* Vou fazer a questao de registrar aplicações de maneira dinamica. E ai eu criei uma api para retornar um array de aplicações */