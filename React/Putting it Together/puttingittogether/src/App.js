import React from 'react';
import PersonCard from './Components/PersonCard';

function App() {
  return (
  <>
  <PersonCard firstName="Doe" lastName="jon" age="40" hair="Black"></PersonCard>
  <PersonCard firstName="Smith" lastName="jhon" age="88" hair="Brown"></PersonCard>
  </>
  );
}

export default App;
