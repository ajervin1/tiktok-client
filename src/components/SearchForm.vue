<template>
	<form class="form-inline" @submit.prevent="handleSubmit">
		<input class="form-control rounded-right-0" type="search"
		       placeholder="Search User"
		       v-model='term'/>
		<button class="btn btn-primary my-2 my-sm-0 rounded-left-0" type="submit">
			Search
		</button>
	</form>
</template>

<script>
	/*
	 Searches Users
	 * */
	export default {
		name: 'SearchForm',
		components: {},
		data () {
			return {
				term: '',
			}
		},
		methods: {
			async handleSubmit () {
				this.$store.state.posts = [];
				await this.$store.dispatch('fetchUserFeed', this.term)
				this.term = ''
			}
		}
	}
</script>
