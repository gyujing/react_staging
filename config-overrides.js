// 配置具体修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需引入样式
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions:{
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }
  }),
)
