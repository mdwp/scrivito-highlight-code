import * as React from 'react';
import * as Scrivito from 'scrivito';
import highlighter from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import Highlight from 'react-highlight';
highlighter.registerLanguage('javascript', javascript)

Scrivito.provideComponent('CodeWidget', ({ widget }) => {
  const code = widget.get('text');
  const lang = widget.get('code')

  if (!code.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide code in the widget properties.
        </h4>
    );
  }

  return (
    <div>
      <Highlight className={lang}>
        {code}
      </Highlight>
    </div>
  );
});

