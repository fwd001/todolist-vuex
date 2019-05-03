<template>
	<section class="main">
		<input
		 id="toggle-all"
		 class="toggle-all"
		 type="checkbox"
		>
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
			<li :class="{completed: item.isCompleted}" v-for="item in list" :key="item.id">
				<div class="view" @click="completed({id: item.id})">
					<input
					 class="toggle"
					 type="checkbox"
					 v-bind:checked="item.isCompleted"
					>
					<label>{{item.content}}</label>
					<button @click="del({id: item.id})" class="destroy"></button>
				</div>
				<input
				 class="edit"
				 value="Create a TodoMVC template"
				>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	data () {
		return {}
	},
	created() {
		console.log(this.$store.state.list);
		console.log(this.list);
	},
	computed: {
		...mapState(['list']),
	},
	methods: {
		...mapMutations(['completed', 'del'])
	}
}
</script>

<style>
</style>
