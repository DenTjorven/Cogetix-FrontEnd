import React from 'react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['All', 'toPlay', 'playing', 'completed'];

  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'active' : ''}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
