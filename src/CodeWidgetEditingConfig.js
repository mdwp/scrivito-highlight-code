import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('CodeWidget', {
    title: 'Code',
    attributes: {
        text: {
            title: 'Code',

        },
        code: {
            title: 'Code language'
        }
    },
    properties: [
        'text',
        'code',
    ],

});