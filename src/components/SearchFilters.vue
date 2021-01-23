<template>
	<div class="dropdown ml-3">
		<button class="btn btn-secondary btn-sm" data-toggle="dropdown">
			Search By <span class="badge badge-primary">{{ search_type }}</span>
		</button>
		<div class="dropdown-menu">
			<a @click="handleChange(filter)" href="#" class="dropdown-item"
			   :class="{'active': filter == search_type}"
			   v-for="filter in filters">
				{{ filter }}
			</a>
		
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SearchFilters',
		data () {
			return {
				filters: [ 'user', 'hashtag', 'song' ]
			}
		},
		computed: {
			search_type () {
				return this.$store.state.search_type
			}
		},
		methods: {
			async handleChange (search_type) {
				await this.$store.commit('changeSearchType', search_type)
			}
		}
	}
</script>
