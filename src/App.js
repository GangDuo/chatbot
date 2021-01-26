import React from 'react';

import { createFloatingChatbot } from './components/FloatingChatbot';
import './App.css';

const FloatingChatbot = createFloatingChatbot('#root');

function App() {  
  return (
    <FloatingChatbot>
      メインコンテンツ
    </FloatingChatbot>
  );
}

export default App;
