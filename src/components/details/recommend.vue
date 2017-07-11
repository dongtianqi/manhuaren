<!--推荐-->
<template>
	<div class="recommend">
		<div class="recommendList d-border" style="display: block;">
			<div class="top">推荐漫画</div>
			<div class="am-scrollable-horizontal">
				<ul class="am-avg-sm-5 am-thumbnails list">
					<li>
						<a href="/manhua-yaosushan">
							<img class="halfImg" src="http://mhfm4.tel.cdndm5.com/24/23889/20170405140404_180x240.jpg" alt="妖宿山" title="妖宿山" style="height: 133px;"></a>
						<p>
							<a href="/manhua-yaosushan" title="妖宿山">妖宿山</a>
						</p>
					</li>
					<li>
						<a href="/manhua-yujiufenhua"><img class="halfImg" src="http://mhfm7.tel.cdndm5.com/22/21771/20161017115947_180x240.jpg" alt="宇久纷华▪战国墨者异传" title="宇久纷华▪战国墨者异传" style="height: 133px;"></a>
						<p>
							<a href="/manhua-yujiufenhua" title="宇久纷华▪战国墨者异传">宇久纷华▪战国墨者异传</a>
						</p>
					</li>
					<li>
						<a href="/manhua-shenhuazhanxian"><img class="halfImg" src="http://mhfm1.tel.cdndm5.com/32/31177/20161227094346_180x240.jpg" alt="神话战线" title="神话战线" style="height: 133px;"></a>
						<p>
							<a href="/manhua-shenhuazhanxian" title="神话战线">神话战线</a>
						</p>
					</li>
					<li>
						<a href="/manhua-minguoyaowenlu"><img class="halfImg" src="http://mhfm8.tel.cdndm5.com/36/35656/20170317200528_180x240.jpg" alt="民国妖闻录" title="民国妖闻录" style="height: 133px;"></a>
						<p>
							<a href="/manhua-minguoyaowenlu" title="民国妖闻录">民国妖闻录</a>
						</p>
					</li>
					<li>
						<a href="/manhua-tiejiangzongheng-2012"><img class="halfImg" src="http://mhfm9.tel.cdndm5.com/9/8911/8911_b.jpg" alt="铁将纵横" title="铁将纵横" style="height: 133px;"></a>
						<p>
							<a href="/manhua-tiejiangzongheng-2012" title="铁将纵横">铁将纵横</a>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.am-scrollable-horizontal {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    }
  -webkit-scrollbar {
     width: 0px; 
   height: 0px; 
}
	.recommendList {
    background-color: #fff;
    margin-top: 10px;
}
.recommendList .top {
    padding-left: 10px;
    padding-top: 10px;
    font-size: 15px;
}
.d-border {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
}
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
.commentList .list .info .title a img {
    height: 13px;
    vertical-align: top;
    position: relative;
    top: 6px;
    margin-right: 3px;
}
.recommendList .list li p a{
    color: #444;
    margin: 5px 0;
    font-size: 13px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.recommendList .list {
    width: 180%;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 0.5rem;
}
.am-thumbnails>li {
	    display: block;
    height: auto;
    float: left;
    padding: 0 .5rem 1rem;
}
.am-avg-sm-5>li {
    width: 20%;
}
.detailForm .detailContent p {
    font-size: 13px;
    margin: 0;
}


</style>