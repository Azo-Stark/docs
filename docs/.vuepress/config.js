module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    
    themeConfig: {
        LastUpdated: '跟新时间',
        logo: '/assets/img/logo.png',
        head: [
            ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/japanese/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/Azo-Stark' },
        ],
        sidebar: [
            {
                title: '关于',   // 必要的
                path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/guide/one',
                    '/guide/two',
                    '/guide/guides/three'
                ]
            }
        ]
    }
}