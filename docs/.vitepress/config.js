export default {
    base: '/',
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
                    { text: 'Direction', link: '/Direction.md' },
                    { text: 'Notatki', link: '/Websecurity/Notatki.md' },
                    { text: 'Process', link: '/Process.md' },
                    { text: 'Knowing thyself', link: '/Knowing thyself.md' },
                    { text: 'Values', link: '/Values.md' },
                ]
            },
        ]
    }
}