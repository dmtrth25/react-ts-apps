import React, { FC, useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

import { IElemProps } from './types';

const allCategories = ['all', ...new Set(items.map((item) => item.category)) ]

const App: FC = () => {
  const [menuItems, setMenuItems] = useState<IElemProps[]>(items)
  const [categories, setCategories] = useState(allCategories)
  
  const filterItems = (category: string) => {
    if(category === 'all') {
      return setMenuItems(items)
    }
    const elements = items.filter((item) => item.category === category)
    setMenuItems(elements)    
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
