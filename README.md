# Scrivito Highlight Code
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A code hightlighting React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-highlight-code/master/highlight-code-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```
$ npm install scrivito-highlight-code
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```
import "scrivito-highlight-code";
```

Also add the styling of the widget to your app. This can be done by either loading it via `css-loader` (e.g. in `index.js` or `Widgets/index.js`):

```
import "scrivito-eyecatcher/index.css";
```

Or by including the styling to your style sheets (e.g. in `index.scss`):

```scss
@import "~scrivito-highlight-code/index.css";
```

## Features
Code syntax hightlighting for more than 180 programming languages.

## Widget properties

In the widget properties you can set:
- Code
- Which language is in use