<template>
	<header class="header">
		<h1>todos</h1>
		<input
		 class="new-todo"
		 placeholder="What needs to be done?"
		 v-on:keyup.enter="addContent"
		 autofocus
		 v-model="content"
		>
	</header>
</template>

<script>
import {mapMutations, mapState} from "vuex"
export default {
	data () {
		return {
			content: ''
		}
	},
	computed: {
		...mapState(['index'])
	},
	methods: {
		...mapMutations(['add', 'addIndex']),
		addContent() {
			if (this.content.trim()){
				let item = {
					id: this.index,
					content: this.content,
					isCompleted: false
				}
				this.add({item})
				this.addIndex()
				this.content = ''
			}
		}
	}
}
</script>

<style>
</style>
