<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/预计{{seller.deliveryTime}}分钟送达
				</div>
				<div class="support" v-if="seller.supports">
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
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

<style  lang="scss">
@import "../../common/scss/mixin";

.header{
	color: #fff;
	background-color: #000;
	.content-wrapper{
		padding: 24px 12px 18px 24px;
		font-size: 0;
		.avatar{
			display: inline-block;
			border-radius: 2px;
			width: 64px;
			height: 64px;
		}
		.content{
			display: inline-block;
			margin-left: 16px;
			font-size: 14px;
			.title{
				margin: 2px 0 8px 0;
				font-size: 16px;
				font-weight: bold;
				display: flex;
				align-items: center;
				/*line-height: 36px;*/
				.brand{
					display: inline-block;
					width: 30px;
					height: 18px;
					@include bg-image('../../../static/image/header/brand');
					background-size: 30px 18px;
					background-repeat: no-repeat;
				}
				.name{
					margin-left:6px;
					line-height:18px;
				}
			}
			.description{
				margin-bottom: 10px;
				line-height: 12px;
			}
			.support{
				font-size: 10px;
				font-weight: 200;
				line-height: 24px;
			}
		}
	}
}







</style>
