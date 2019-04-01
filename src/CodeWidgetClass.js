import * as Scrivito from 'scrivito';

const CodeWidget = Scrivito.provideWidgetClass('CodeWidget', {
    attributes: {
        text: 'html',
        code: 'string'
    },
});

export default CodeWidget;