module.exports = {
    base: '/pencil-vue/', 
    title: 'pencil-vue',
    description: '一个简单的UI框架',
    themeConfig: {
      repo: 'qq919006380/pencil-vue', // 添加 github 链接
      nav: [
        {text: '主页', link: '/'},
      ],
      sidebar: [
        {
          title: '入门',
          children: [
            ['/install/','Hello World'],
            // ['/get-started/','快速上手'],
          ]
        },
        {
          title: '组件',
          children: [
            ['/components/button','button'],
            ['/components/input','input'],
            ['/components/card','card'],
            ['/components/checkbox','checkbox'],
            ['/components/popover','popover'],
            ['/components/toast','toast'],
          ]
        },
  
      ]
    }
  } 