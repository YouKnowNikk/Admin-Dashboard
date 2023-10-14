import React from 'react';
import PageMainContent from './PageMainContent';
import PageSideContent from './PageSideContent';
import './MainContent.css'; // Create a separate CSS file for styling
import Header from './Header';

function MainContent() {
  return (
    <>
      <div className="main-content">
        <Header/>
        <div className="content">
          <div className="content-main">
            <PageMainContent />
          </div>
          <div className="content-side">
            <PageSideContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
