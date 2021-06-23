// vendors
import React from 'react';

// styles
import '../MbLayout.scss';

// constants
const spaces = {
    xs: '15px',
    s: '20px',
    m: '30px',
    l: '50px',
    xl: '60px',
}

const MbLayoutItem = ({children, spaceHorizontal, width, spaceVertical}) => {
  return (
      <div className="mb-layout-item" style={
          {
              maxWidth: `calc(100% * ${width} / 12)`,
              flexBasis: `calc(100% * ${width} / 12)`,
              marginBottom: spaces[spaceVertical],
              padding: `0 ${spaces[spaceHorizontal]}`

            }
        }>
          {children}
        </div>
  );
};

export default MbLayoutItem;
