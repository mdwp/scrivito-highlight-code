import * as React from 'react';
import * as Scrivito from 'scrivito';
import Highlight from 'react-highlight';

Scrivito.provideComponent('CodeWidget', ({ widget }) => {
  const code = widget.get('text');
  const lang = widget.get('code')

  /*if (!code.length) {
    return (
      <InPlaceEditingPlaceholder center={true}>
        Enter code in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }*/

  return (
    <div>
      <Highlight className={lang}>
        {code}
      </Highlight>
    </div>
  );
});

