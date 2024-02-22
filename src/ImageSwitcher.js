import React, { useState } from 'react';

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-layout">
      <div className="tab-options">
        <div className={`tab-option ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
          Amozon Prime
        </div>
        <div className={`tab-option ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
          HotStar
        </div>
        <div className={`tab-option ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>
          Netflix
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'tab1' && <p>Content for Tab 1</p>}
        {activeTab === 'tab2' && <p>Content for Tab 2</p>}
        {activeTab === 'tab3' && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default TabLayout;
