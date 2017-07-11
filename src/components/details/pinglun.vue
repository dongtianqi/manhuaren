<template>
	<div class="pinglun">
		<div class="commentList d-border" style="display: block;">
			<ul class="list">
				<li class="d-item"> 
					<img class="avatar" src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mrtx.gif">
					<div class="info d-item-content">
						<p class="title"> 
							<span class="d-nowrap n" id="author_5184533">swlokpk</span> 
							<span class="d-fr">                          
								<a>
									<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/comment_logo_1.png" alt="回复">回复</a> 
								<a >
									<img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/comment_logo_2.png" alt="点赞">
								<span>0</span>
								</a>
							</span>
						</p>
						<p class="subtitle">2017-07-11 00:31:58</p>
						<p class="content">1231231</p>
					</div>
			</li>
			</ul>
			<div class="more">
				<a>查看更多</a>
			</div>
		</div>
		<div class="commentBar" style="display: block;">
			<a><img src="http://js16.tel.cdndm.com/v201707041718/manhuaren/images/mobile/publish_btn.png" alt="发表评论"></a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.commentList {
    background-color: #fff;
    padding-bottom: 5px;
    border-top: none;
    display: none;
}
.d-border {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
}
.commentList .list li {
    padding: 5px 10px;
}
.d-item {
    display: -webkit-box;
}
.commentList .list .avatar {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 10px;
}
img {
    box-sizing: border-box;
    vertical-align: middle;
}
.commentList .list li:first-child .info {
    border-top: none;
}
.commentList .list li .info {
    border-top: 1px solid #dadada;
}
.commentList .list .info {
    padding-top: 5px;
}
.d-item-content {
    -webkit-box-flex: 1;
}
.commentList .list .info .title {
    color: #444;
    font-size: 15px;
}
.commentList .list .info .title span.n {
    display: inline-block;
    width: 50%;
}
.d-nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.d-fr {
    float: right;
}
.commentList .list .info .title a {
    color: #767676;
    font-size: 13px;
    margin-left: 10px;
}
.commentList .list .info .title a img {
    height: 13px;
    vertical-align: top;
    position: relative;
    top: 6px;
    margin-right: 3px;
}
.commentList .list .info .subtitle {
    color: #bababa;
    font-size: 13px;
}
.commentList .list .info .content {
    color: #767676;
    font-size: 13px;
    line-height: 18px;
    padding-top: 5px;
}
.commentList .more a {
    color: #767676;
    border: 1px solid #E0E0E0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border-radius: 15px;
    width: 90px;
}
.commentList .more {
    color: #999;
    text-align: center;
    font-size: 13px;
    padding: 10px 0;
}
.commentBar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    padding: 10px;
    background-color: #ff788c;
    text-align: center;
    display: none;
}
.commentBar img {
    width: 85px;
}
</style>