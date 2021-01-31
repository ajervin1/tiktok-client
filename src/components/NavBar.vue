<template>
	<nav class="navbar navbar-expand navbar-light bg-light justify-content-between px-10 py-6">
		<router-link to="/" class="navbar-brand">
			<img :src="logo">
		</router-link>
		<!--SearchForm-->
		<SearchForm/>
		<!--SearchForm-->
		<ul class="navbar-nav d-flex align-items-center">
			<div class="actions">
				<button @click="handleClick" class="btn btn-success">
					Get Trending
				</button>
			</div>
		</ul>
	</nav>
</template>

<script>
	import SearchForm from './SearchForm'
	
	export default {
		name: 'NavBar',
		components: { SearchForm },
		data () {
			return {
				logo: 'https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg',
			}
		},
		methods: {
			async handleClick () {
				this.$store.state.posts = []
				await this.$store.dispatch('fetchTrending')
			}
		}
	}
</script>
