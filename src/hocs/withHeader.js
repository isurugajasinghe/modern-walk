import React from 'react';
import HeaderComponent from "../component/Header";

const withHeader = (WrappedComponent, currentPage) => {
  return () => (
    <div>
      <HeaderComponent />
      <WrappedComponent />
    </div>
  );
};

export default withHeader;
