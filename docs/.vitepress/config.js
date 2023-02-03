export default {
    base: '/adrianmaryniewski.github.io',
    title: 'maryniewski.pl',
    description: 'The quieter you become, the more you can hear.',
    head: [],
    themeConfig: {
        logo: '/assets/img/logo-symbol.svg',
        sidebar: [
            {
                text: 'Start',
                items: [
                    { text: 'Start here', link: '/' }
                ]
            },
            {
                text: 'Cores',
                items: [
                    { text: 'Direction', link: '/Cores/Direction.md' },
                    { text: 'Notatki', link: '/Cores/Ksiazki/Websecurity/Notatki.md' },
                    { text: 'Process', link: '/Cores/Process.md' },
                    { text: 'Knowing thyself', link: '/Cores/Knowing thyself.md' },
                    { text: 'Values', link: '/Cores/Values.md' },
                ]
            },
        ]
    }
}