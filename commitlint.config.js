module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type类型定义，表示git提交的type必须在一下类型范围
    'type-enum': [
      2,
      'always',
      [
        'feat',//新功能 feature
        'fix',//修复 bug'
        'docs',//文档变更
        'style',//代码格式
        'refactor',//重构
        'perf',//性能优化
        'test',//增加测试
        'chore',//构建过程或辅助工具的变动
        'revert',//回退
        'build'//打包
      ]
    ],
    // subject 大小写不做检验
    'subject-case':[0]
  }
}