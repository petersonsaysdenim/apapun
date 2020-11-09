<template>

	<sidebar-menu :menu="menu" />

</template>

<script>
export default {
  components: {

  },
  data() {
    return {
			menu: [
				{
          href: '/',
          title: 'Home',
					icon: {
            element: 'span',
						class: 'imgHome',
        	}
        },
				{
          href: '/exhibition',
          title: 'All Exhibition',
					icon: {
            element: 'span',
						class: 'imgExhibition',
        	}
        },
				{
          href: '/scan-barcode',
          title: 'QR Code Scan',
					icon: {
            element: 'span',
						class: 'imgBarcode',
        	}
        },
				{
          href: '/help-desk',
          title: 'Help Desk',
					icon: {
            element: 'span',
						class: 'imgDesk',
        	}
        },
  		]
    }
  },
  async mounted() {

  },
  methods: {

  }
}
</script>
