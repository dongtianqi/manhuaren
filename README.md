“简单却不失优雅，小巧而不乏大匠”
用这句话来形容vue最合适不过了。
随着移动端业务增加和pc页面复杂度的提升，vue也越来越受到众多互联网公司的青睐，天猫苏宁饿了么等好多公司开始用vue做重构了
作为一个前端狗，当然也想用vue来搞事啦，不过天猫京东被仿烂了，提不起兴趣，饿了么前面也有几位大神搞定了，思来想去，发现几个漫画类的网站界面比较友好，
累了还能追个漫画看，所以就选了 漫画人。

项目运行（nodejs 6.0+）

## 安装依赖
npm install

## 开启本地服务器localhost:8080
npm run dev

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！<br>
或者您可以 "follow" 一下，我会发更多关于前端的好玩的项目，<br>
也会发一些公司的项目，比如微信小程序，或者reactjs的项目，初步设想回头把nodejs学了，用这个做后台

## 项目简介
这个项目的界面数据是自己模拟的static/data.json，es6语法 

路由配置：
```javascript
const routes = [
{name:'home', path: '/home', component:home},
{name:'original', path: '/original', component: original},
{name:'details', path: '/details', component: details,
redirect:'/hua',
      children: [
        {
          path: '/hua',
          component: hua
        },
        {
          path: '/fanwai',
          component: fanwai
        },
        {
          path: '/pinglun',
          component: pinglun
        }
      ]}
]
```

vuex 配置action,获取数据：
```javascript
   actions: {
   //异步获取数据，commit给mutations，mutations改变state
	getData(context){
		 axios({
  method: 'get',
  url: '../static/data.json',
  data: ''
  }).then(function(res){
context.commit('getData', res)
}).catch(function(err){
 console.log(err)
})        
	}       
    }
})
```
mutations：
```javascript
mutations: {
 	getData(state, res) {
    state.getHomeData = {...state.getHomeData, home: res.data.home}
    state.getTopData = {...state.getTopData, top: res.data.top}
  }
   }
  ``` 
  创建vue实例，并挂载：
  ```javascript
  new Vue({
router,
store,
template: '<App/>',
components: {App}
}).$mount('#app')
```
## 项目（请用goole手机模式预览）:

![](https://github.com/dongtianqi/manhuaren/raw/master/gitImg/home.png) <br>

![](https://github.com/dongtianqi/manhuaren/raw/master/gitImg/home1.png) <br>

![](https://github.com/dongtianqi/manhuaren/raw/master/gitImg/details.png) <br>

![](https://github.com/dongtianqi/manhuaren/raw/master/gitImg/more.png)  <br>

# 未完，持续更新中。。。


