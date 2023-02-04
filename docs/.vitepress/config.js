export default {
    base: '/',
    title: 'maryniewski.pl',
    description: 'The quieter you become, the more you can hear.',
    head: [],
    themeConfig: {
        sidebar: [
            {
                text: 'Start',
                items: [
                    { text: 'Start here', link: '/' }
                ]
            },
            {
                text: 'Książki',
                items: [
                    { text: 'Websecurity', link: '/Websecurity/Notatki.md' },
                    { text: 'Websec', link: '/Websecurity/Nagłówki HTTP.md' },
                ]
            },
        ]
    }
}