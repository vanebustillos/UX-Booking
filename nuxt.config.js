{
    buildModules: [
        '@nuxtjs/vuetify'
    ];
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap' }
        ]
    };
    vuetify: {
        customVariables: ['~/sass/variables.scss'];
        treeShake: true;
    }
}