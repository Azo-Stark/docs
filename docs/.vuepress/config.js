module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    
    themeConfig: {
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
        sidebar: 'auto'
    }
}