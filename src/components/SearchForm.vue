<template>
	<form class="form-inline" @submit.prevent="handleSubmit">
		<SearchFilters class="mr-3"/>
		<input class="form-control rounded-right-0" :placeholder="placeholder" type="search"
		       v-model='term'/>
		<button class="btn btn-primary my-2 my-sm-0 rounded-left-0" type="submit">
			Search
		</button>
	
	</form>
</template>

<script>
	import SearchFilters from './SearchFilters'
	
	export default {
		name: 'SearchForm',
		components: { SearchFilters },
		data () {
			return {
				term: '',
				
			}
		},
		computed: {
			search_type () {
				return this.$store.state.search_type
			},
			placeholder () {
				switch (this.search_type) {
					case 'user':
						return 'Search By Username'
					case 'hashtag':
						return 'Search By Hashtag'
					case 'song':
						return 'Search By MusicId'
				}
			}
		},
		methods: {
			async handleSubmit () {
				switch (this.search_type) {
					case 'user':
						await this.$store.dispatch('fetchUserFeed', this.term)
						break
					case 'hashtag':
						await this.$store.dispatch('fetchHashTagVideos', this.term)
						break
					case 'song':
						await this.$store.dispatch('fetchMusicVideos', this.term)
						break
				}
				this.term = ''
			}
		}
	}
</script>
