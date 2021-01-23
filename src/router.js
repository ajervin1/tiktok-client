import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Show from './views/Show'

Vue.use(Router)

// Router
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/videos/:id',
			component: Show
		}
	]
});
export default router
