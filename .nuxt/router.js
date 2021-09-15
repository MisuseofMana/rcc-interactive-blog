import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _487f12e3 = () => interopDefault(import('..\\pages\\artifacts.vue' /* webpackChunkName: "pages/artifacts" */))
const _4d69d697 = () => interopDefault(import('..\\pages\\brainwash.vue' /* webpackChunkName: "pages/brainwash" */))
const _6ecf5a96 = () => interopDefault(import('..\\pages\\briefing.vue' /* webpackChunkName: "pages/briefing" */))
const _0e3f869c = () => interopDefault(import('..\\pages\\realms.vue' /* webpackChunkName: "pages/realms" */))
const _faf3924c = () => interopDefault(import('..\\pages\\insights\\_expandedInsights.vue' /* webpackChunkName: "pages/insights/_expandedInsights" */))
const _9e1ea958 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artifacts",
    component: _487f12e3,
    name: "artifacts"
  }, {
    path: "/brainwash",
    component: _4d69d697,
    name: "brainwash"
  }, {
    path: "/briefing",
    component: _6ecf5a96,
    name: "briefing"
  }, {
    path: "/realms",
    component: _0e3f869c,
    name: "realms"
  }, {
    path: "/insights/:expandedInsights?",
    component: _faf3924c,
    name: "insights-expandedInsights"
  }, {
    path: "/",
    component: _9e1ea958,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
