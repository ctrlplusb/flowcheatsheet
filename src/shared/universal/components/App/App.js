/* @flow */

import React from 'react';
import Link from 'react-router/lib/Link';
import Helmet from 'react-helmet';

import 'normalize.css/normalize.css';
import './globals.css';

const WEBSITE_DESCRIPTION =
  'An interactive cheat sheet for Facebook\'s Flow type system.';

function App(props : { children : $React$Children }) {
  const { children } = props;
  return (
    <div style={{ padding: '10px' }}>
      {/*
        All of the following will be injected into our page header.
        @see https://github.com/nfl/react-helmet
      */}
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate="Flow Cheat Sheet - %s"
        defaultTitle="Flow Cheat Sheet"
        meta={[
          { name: 'description', content: WEBSITE_DESCRIPTION },
        ]}
        script={[]}
      />

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1>Flow Cheat Sheet</h1>
        <strong>{WEBSITE_DESCRIPTION}</strong>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default App;
