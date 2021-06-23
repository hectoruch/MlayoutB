// vendors
import React from 'react';

// styles
import './MbLayout.scss';

// horizontalSpaces xs | s | m | l | xl
// verticalSpaces xs | s | m | l | xl

const MbLayout = ({children, spaceHorizontalAllItems}) => {
  return (
    <div className="mb-layout">
        {React.Children.map(children, child => (
            React.cloneElement(child, {spaceHorizontal: spaceHorizontalAllItems})
        ))}
    </div>
  );
};

export default MbLayout;
