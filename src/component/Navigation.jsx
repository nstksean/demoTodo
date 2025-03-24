import React from 'react';

function Navigation({ activeTab, onNavNewClick, onNavListClick }) {
  return (
    <div className="navContainer">
      <button className="navBtn" onClick={onNavNewClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svgNavBtn">
          <path className={(activeTab === "ADD NEW TASK" ? 'redSvgPath' : "svgPath")}
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
        </svg>
      </button>
      <button className="navBtn" onClick={onNavListClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svgNavBtn">
          <path className={(activeTab === "TASK LISTS" ? 'redSvgPath' : "svgPath")}
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </button>
    </div>
  );
}

export default Navigation;