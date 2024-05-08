import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [buddies, setBuddies] = useState(data)
  return <main>
    <section className="container">
      <h3>{buddies.length} birthdays today</h3>
      <List buddies={buddies} />
      <button onClick={() => {setBuddies([])}}>clear all</button>
    </section>
  </main>;
}

export default App;
