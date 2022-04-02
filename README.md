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
npx husky install

5.在package.json中新增加指令并执行
"prepare":"husky install"
npm run prepare

6.新增husky配置文件 并往里面写入
npx husky add .husky/commit-msg
pnx --on-install commitlint --edit
