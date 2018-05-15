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
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count" @click="showDetail">
				<span class="count">{{seller.supports.length}}个</span>
				<i class=""></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{seller.bulletin}}</span>
			<i class=""></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" alt="">
		</div>
		<div class="detail" v-show="detailShow" @click="hideDetail">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
				</div>
			</div>
			<div class="detail-close">
				<span>关闭</span>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		data: function(){
			return {
				detailShow: false
			}
		},
		props: {
			seller:{
				type: Object
			}
		},
		created: function(){
			this.classMap = ['decrease','discount','special','invoice','guarantee'];
		},
		methods: {
			showDetail:function(){
				this.detailShow = true;
			},
			hideDetail:function(){
				this.detailShow = false;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/scss/header";
</style>
