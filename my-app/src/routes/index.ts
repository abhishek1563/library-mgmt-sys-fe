import { createRoute, createRootRoute, createRouter } from '@tanstack/react-router'
import App from '../App'
import Login from '../pages/login'
import RegistrationPage from '../pages/registrationPage'
import Dashboard from '../pages/dashboard'
import withAuth from '../components/withAuth'

const rootRoute = createRootRoute({
  component: App,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
})

const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegistrationPage,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: withAuth(Dashboard),
})

const routeTree = rootRoute.addChildren([homeRoute, loginRoute, registrationRoute, dashboardRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}