import React, { useState } from 'react'
import { classNames } from '../util/util'

const TabbedView = ({ children, tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className='app-col'>
        <h2>{tabs[activeTab]}</h2>

        <nav className='app-row'>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => changeTab(index)}
              className={classNames(
                'flex-grow',
                activeTab === index ? 'active' : ''
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {children[activeTab]}
    </>
  )
}

export default TabbedView
