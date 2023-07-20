import React, { useState } from 'react';

const TabbedView = ({ children, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <nav>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => changeTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </nav>

      {children[activeTab]}
    </div>
  );
};

export default TabbedView;
