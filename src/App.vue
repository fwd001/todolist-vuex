<template>
	<div id="app">
		<section class="todoapp">
			<Header></Header>
			<Content></Content>
			<Footer></Footer>
		</section>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return{

    }
  },
	components: {
    Header,
    Content,
    Footer
	}
}
</script>

<style src="./App.css"></style>
