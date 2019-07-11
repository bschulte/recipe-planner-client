const routes = [
  {
    path: "/",
    component: () => import("layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        name: "Home Page",
        icon: "fal fa-home"
      },
      {
        path: "create-recipe",
        component: () => import("pages/CreateRecipe.vue")
      },
      // This route will only be rendered in the drawer if the user
      // has admin access.
      {
        path: "admin",
        component: () => import("pages/Admin.vue"),
        name: "Admin",
        icon: "fal fa-user-tie"
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
