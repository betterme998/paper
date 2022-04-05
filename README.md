# classification

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1.commit规范 具体操作在电脑的git文件里
2.强制commit

### git代码提交规范
//git代码提交规范

1.安装commitizen和cz-customizable
npm install -g commitizen@4.2.4
npm install cz-customizable@6.3.0 --save-dev

2.在package.json中进行新增
"config": {
  "commitizen":{
    "path":"node_modules/cz-customizable"
  }
}

3.在根目录下新建cz-config.js文件并写入配置之后就可以用 git cz来代替git commit

4.使用husky进行强制git代码提交规范 //这是commit的校验 为了统一提交规范
npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4

npm install husky@7.0.1 --save-dev   //这个是强制使用规范
npx husky install   //初始化
导入complete配置文件

5.在package.json中新增加指令并执行
"prepare":"husky install"    //在scripts对象中添加
npm run prepare        //然后执行指令

6.新增husky配置文件 并往里面写入  //这个文件会在上面操作中自己生成 只要执行下面代码
然后用house key和commit lint进行一个关联
npx husky add .husky/commit-msg

//执行完上面代码会在自动生成的.husky文件中生成一个叫commit-msg的文件，把下面代码替换
到文件中的undefined中
npx --no-install commitlint --edit

### 全局注册svg icon
1先写成组件
2.在icons文件下使用webpack 获取svg

### 表单验证

### 发起登录请求
有两种环境。开发环境和生成环境就在根目录下创建  开发环境.env.development   
生产环境
账号admin
密码123456



### 解决跨域问题
在vue.config.js里面配置代理 devServer

### 拿到数据后层级深。使用响应拦截器处理一下
当密码输入错误 会弹出提示框，如果样式有问题就在element ui 官网->指南中复制import 'element-plus/dist/index.css' 到main.js中
使用axios 在创建的axios实例中定义 baseURL: process.env.VUE_APP_BASE_API, 因为有两种环境


### 登录
登录成功之后数据当中有一个token （令牌）  要把它放到vuex，localStorage中
登录的过程其实是向后台请求数据如果没有这串数据则登录失败 通过点击登录按钮发送vuex的action的异步传用户密码，在action中
执行数据请求操作并发送commit提交 mutations事件 改变state状态。如果请求失败，返抛出错误


### 请求拦截器
我们需要将每一个接口添加token（令牌）信息
在request.js中 找到创建的axios实例 service  使用它的请求拦截器

### 路由守卫
只有当我们登录后才能访问首页
1.在router中创建permission.js
应为index.js中注册了前置路由。导入它，使用前置路由。要判断是否登录就查看token，token放在vuex中导入store中index.js文件
为了方便拿到token 我们在router文件中创建getters.js文件从state.app.token中拿，然后再index中导入，并使用
permission.js文件中判断state中是否有token，存在的话，判断它去的路径是不是login，如果是 让他跳转到首页去
如果不是，让他随便去。
如果没有token，定义一个白名单，让它没有登录也可以访问，拿到白名单判断，判断有没有要去的路径，有就让它去没有就去login
页面

最后使用它在main.js使用这个路由守卫

### layout 布局
1.在src下面创建layout文件
2.在element ui下复制布局，并在router中配置路由映射表,layout页面使用了全局变量 要配置webpack的scss文件在vue.config.js
中配置css、

### menus菜单
1.在整体布局中创建 菜单文件menu，创建index.vue文件
2.引用element ui menu菜单组件
3.在layout中的index.vue中引入菜单组件并使用
4.发起请求拿到菜单数据
  在api中创建menu.js文件请求
  在layout中引入数据 并保存接受 用到异步
  展示数据，
  配置每项的router映射表
  监听每个标签点击并传入path，加入缓存 并赋值给对象且和menu组件绑定
  把图标封装成全局组件库（不推荐这里学习使用）

### 被动退出
定义好的有效期时间。在用户登录的时候，设置上当前时间，进行一个时间上的比较，看他是否已经过期了
发起请求时比较
新建utils文件，
  创建一个constant.js方两个常量，一个是用户登录时的时间，在登录时记录存放到缓存当中，还要一个常量是有效
  时长。
  在创建一个auth.js文件导入两个常量 设置登录时间 获取登录时间， 判断是否超时
  然后在请求数据的api文件夹中的request.js的请求响应中判断是否存在token，如果存在就判断时长是否过期
  过期就向vuex 的action发送异步方法logout 在modules的app.js的action中创建logout方法，
  方法中删除两个缓存，提交commit 传空值。并跳转登录页面
有效时间过了后 刷新返回登陆页面，会报错 修复中.....


### 汉堡按钮伸缩项——
在layout布局当中 就是layou文件下创建headers用来放navbar navbar有一个按钮可以伸缩 menu菜单
在header创建components用来放他的组件
当我们点击汉堡按钮时伸缩菜单实现
  1.我们需要在vuex里面设置一个变量值来定义这个状态 ,然后点击时修改状态。
  2.按钮的icon也会改变不能写死，通过要回去这个变量的状态，来控制icon，在vuex中定义getter方法
  3.配置菜单缩放。并绑定getters的结果,并且改变headers的宽度，就绑定一个class 判断是否添加

### 动态面包屑导航
创建breadcrumb.js文件 复制好后 拿数据 在路由上面取，获取当前路由的完整路由表
获取后展示出来 并判断是否是最后一项，如果是设置特有样式
如果不是加粗并可以点击跳转

### 头像退出
用到element 头像 和下拉菜单
点击退出提交dispatch调用退出方法

### i18n初使用  
进行国际化操作
1.安装： npm i vue-i18n@next
2.创建：i18n文件夹 
3.导入数据源，创建当前语言，创建i18n实例 并导出
4.在main.js中导入并使用。
5.根据数据原替换要修改的部分

### 中英文切换
使用element 下拉菜单进行切换 复制指令事件部分代码
1.headers组件文件夹中创建lang.vue 粘贴指令代码
2.headers中导入使用
3.当前状态不能被选择 如中文状态时，不能选中中文

### 全屏
有原生的api，以及插件  npm install screenfull@5.1.0  看官网介绍
1.创建screenfull.vue文件
2.在headers中引入后 点击全屏按钮 全屏

