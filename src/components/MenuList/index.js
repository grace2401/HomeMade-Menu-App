import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Products from '../common/Products';
import './styles.css';
import LoadingCard from '../common/LoadingCards';

const MenuTabs = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const YOUR_APP_ID = 'e7b63d7a';
  const YOUR_APP_KEY = 'ffb4ef7233e8f3959b96b2ee8b1534e5';
  const categories = ['Appetizers', 'Main Courses', 'Beverages', 'Desserts'];
  const [activeCategory, setActiveCategory] = useState('Appetizers');

  useEffect(() => {
    setLoading(true);
    const fetchMenuData = () => {
      fetch(`https://api.edamam.com/search?q=${activeCategory}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
        .then((response) => response.json())
        .then((data) => {
          setMenuData(data.hits);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch menu data:', error);
          setMenuData([]);
          setLoading(false);
        });
    };

    fetchMenuData();
  }, [activeCategory]);

  return (
    <Tabs 
      id="menu-tabs" 
      activeKey={activeCategory} 
      onSelect={(k) => setActiveCategory(k)}
      className="custom-tabs"
      fill
    >
      {categories.map((category) => (
        <Tab eventKey={category} title={category} key={category}
        >
          <div className="menu-card-container">

          {loading ? (
            <div className="row">
              {Array(12)
                .fill()
                .map((_, index) => (
                  <div className="col-md-4" key={index}>
                    <LoadingCard />
                  </div>
                ))}
            </div>
          ) : (
            <Products data={menuData} />
          )}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default MenuTabs;
