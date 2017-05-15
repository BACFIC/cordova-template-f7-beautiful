<template lang="pug">
// App
#app
	// Statusbar
	f7-statusbar
	// Left Panel
	f7-panel(left='', reveal='', layout='dark')
		f7-view#left-panel-view(navbar-through='', :dynamic-navbar='true')
			f7-navbar(title='Left Panel')
			f7-pages
				f7-page
					f7-block(inner='')
						p Left panel content goes here
					f7-block-title Load page in panel
					f7-list
						f7-list-item(link='/about/', title='About')
						f7-list-item(link='/form/', title='Form')
					f7-block-title Load page in main view
					f7-list
						f7-list-item(link='/about/', title='About', link-view='#main-view', link-close-panel='')
						f7-list-item(link='/form/', title='Form', link-view='#main-view', link-close-panel='')
	// Right Panel
	f7-panel(right='', cover='', layout='dark')
		f7-view#right-panel-view(navbar-through='', :dynamic-navbar='true')
			f7-navbar(title='Right Panel', sliding='')
			f7-pages
				f7-page
					f7-block
						p Right panel content goes here
					f7-block-title Load page in panel
					f7-list
						f7-list-item(link='/about/', title='About')
						f7-list-item(link='/form/', title='Form')
					f7-block-title Load page in main view
					f7-list
						f7-list-item(link='/about/', title='About', link-view='#main-view', link-close-panel='')
						f7-list-item(link='/form/', title='Form', link-view='#main-view', link-close-panel='')
	// Main Views
	f7-views
		f7-view#main-view(navbar-through='', :dynamic-navbar='true', main='')
			// Navbar
			f7-navbar
				f7-nav-left
					f7-link(icon='icon-bars', open-panel='left')
				f7-nav-center(sliding='').custom Framework7
				f7-nav-right
					f7-link(icon='icon-bars', open-panel='right')
			// Pages
			f7-pages
				f7-page
					f7-block-title Welcome to my App
					f7-block(inner='')
						p
							| Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.
					f7-block-title Navigation
					f7-list
						f7-list-item(link='/about/', title='About')
						f7-list-item(link='/form/', title='Form')
						f7-list-item(link='/dynamic-route/blog/45/post/125/?foo=bar#about', title='Dynamic Route')
					f7-block-title Side Panels
					f7-block
						f7-grid
							f7-col(width='50')
								f7-button(open-panel='left') Left Panel
							f7-col(width='50')
								f7-button(open-panel='right') Right Panel
					f7-block-title Modals
					f7-block
						f7-grid
							f7-col(width='50')
								f7-button(open-popup='#popup') Popup
							f7-col(width='50')
								f7-button(open-login-screen='#login-screen') Login Screen
	// Popup
	f7-popup#popup
		f7-view(navbar-fixed='')
			f7-pages
				f7-page
					f7-navbar(title='Popup')
						f7-nav-right
							f7-link(:close-popup='true') Close
					f7-block
						| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.
	// Login Screen
	f7-login-screen#login-screen
		f7-view
			f7-pages
				f7-page(login-screen='')
					f7-login-screen-title Login
					f7-list(form='')
						f7-list-item
							f7-label Username
							f7-input(name='username', placeholder='Username', type='text')
						f7-list-item
							f7-label Password
							f7-input(name='password', type='password', placeholder='Password')
					f7-list
						f7-list-button(title='Sign In', close-login-screen='')
						f7-list-label
							p Click Sign In to close Login Screen
</template>

<script>
export default {}
</script>

<style lang="stylus">
	.custom
		background -webkit-linear-gradient(#007AFF, #ffe600)
		-webkit-background-clip text
		-webkit-text-fill-color transparent
</style>
