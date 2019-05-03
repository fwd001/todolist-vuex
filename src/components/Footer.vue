<template>
	<footer class="footer">
		<!-- This should be `0 items left` by default -->
		<span class="todo-count"><strong>{{times}}</strong> item left</span>
		<!-- Remove this if you don't implement routing -->
		<ul class="filters">
			<li>
				<a
				 class="selected"
				 href="#/"
				>All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed" @click="addNum">Completed</a>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		<button @click="clear" class="clear-completed">Clear completed</button>
	</footer>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
	methods: {
		...mapMutations(['clear']),
		addNum () {
			// this.arr[1] = 'd'
			// this.$set(this.arr, 1, 'd')
			// this.obj.name1 = 'xiaohei'
			// this.$set(this.obj, 'age', 'xiaohei')
			// this.arr = [...this.arr]
		}
	},
	computed: {
		...mapGetters(['times']),
	},
	data () {
		return {
			arr: [1,2,3],
			obj: {name: 'xiaoming', id: 2}
		}
	}
}
</script>

<style>
.arrlen {
	font-size: 30px;
	color: #f40;
}
</style>
