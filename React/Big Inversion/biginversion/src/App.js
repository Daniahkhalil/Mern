import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
    <div >
    <PersonCard firstName="Jon" lastName="Doe" age={ 45 } hairColor="Black" /> 
   </div>

    <div>
    <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
    </div>

    <div>
    <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" /> 
    </div>
    <div>
    <PersonCard firstName="Maria" lastName="smith" age={ 62 } hairColor="Brown" /> 
    </div>
    </>
  );
}

export default App;
