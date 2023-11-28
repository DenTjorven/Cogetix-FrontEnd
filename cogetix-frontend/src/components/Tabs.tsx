import React from 'react';

interface TabsProps {
  activeTab: string; 
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab('toPlay')}>To Play</button>
      <button onClick={() => setActiveTab('playing')}>Playing</button>
      <button onClick={() => setActiveTab('completed')}>Completed</button>
    </div>
  );
};

export default Tabs;
