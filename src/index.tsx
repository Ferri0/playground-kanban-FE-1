import React from 'react';
import { createRoot } from 'react-dom/client';

import Main from './pages/Main';

const App = () => {
    return <Main />;
};

const domNode = document.getElementById('root');
const root = domNode && createRoot(domNode);

root && root.render(<App />);
