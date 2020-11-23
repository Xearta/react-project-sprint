import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Set will only get the 'unique' values
// This will add 'all' to the categories, then add every other UNIQUE category dynamically
// all, breakfast, lunch, shakes
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
