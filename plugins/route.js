export default function ({
  app,
  route,
  from,
  store,
  redirect
}) {
  app.router.beforeEach((to, from, next) => {
    if (localStorage.getItem('qAccessToken') === null &&
      to.path !== '/signup' && to.path !== '/') {
      console.log("Entering the route:  " + to.path);

      next('/');


    } else {
      console.log("Entering the route:  " + to.path);
      next();
    }





  });
  app.router.afterEach((to, from) => {
    console.log("After leaving the route");
  });
}
