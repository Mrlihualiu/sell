<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.}}
				</div>
				<div class="title"></div>
			</div>
		</div>
		<div class="bulletin-wrapper">

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		props: {
			seller:{
				type: Object
			}
		}
	}
</script>

<style>
</style>
