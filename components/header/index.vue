<template>
	<header>
		<div class="container">
			<div class="row">
				
				<div class="column column-50">
					<div class="logo">
						<nuxt-link to='/'>
							<h2>LOGO</h2>
						</nuxt-link>
					</div>
				</div>

				<div class="column column-50">
					<div class="menu">
						<ul>
  							<li>
  								<nuxt-link to='/'>Home</nuxt-link>
  							</li>
  							<li>
  								<nuxt-link to='/'>About</nuxt-link>
  							</li>
  							<li>
  								<nuxt-link to='/'>Contact</nuxt-link>
  							</li>
  						</ul>
					</div>
				</div>

			</div>
		</div>
	</header>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    }
  },
  async mounted() {

  },
  methods: {

  }
}
</script>
