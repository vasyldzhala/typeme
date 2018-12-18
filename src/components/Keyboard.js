import React from 'react';
import keys from './keys';

const Keyboard = (props) => {
  const nextKey = props.nextKey || '';
  const regularStyle = { borderColor: 'transparent' };
  const labelStyle = { borderColor: 'orange' };

  const isLabel = (nextKey, keyName) => {
    return ( nextKey.toUpperCase() === keyName.trim() ) ||
      ( nextKey === ' ' &&  keyName.trim() === 'Space');
  };

  let indx = 0;

  return (

    <div className="keyboard">
      {
        keys.map(row => {
          const keysRow =
            row.map(keyLabel => {
              const buttonStyle = isLabel(nextKey, keyLabel) ? labelStyle : regularStyle;

              return (
                <button key={indx++} disabled style={ buttonStyle }>{keyLabel}</button>
              )
            });
            return (<div key={indx++}>{keysRow}</div>);
        })
      }
    </div>
  )
};

export default Keyboard;
