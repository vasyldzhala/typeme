import React from 'react';
import keys from './keys';

const Keyboard = (props) => {
  const regularStyle = { borderColor: 'transparent' };
  const labelStyle = { borderColor: 'orange' };
  const isLabel = (nextKey, keyName) => {

    return ( nextKey.toUpperCase() === keyName.trim() ) ||
      ( nextKey === ' ' &&  keyName.trim() === 'Space');
  };

  let ind = 0;

  return (

    <div className="keyboard">
      {
        keys.map(row => {
          const keysRow =
            row.map(keyLabel => {
              const buttonStyle = isLabel(props.nextKey, keyLabel) ? labelStyle : regularStyle;

              return (
                <button key={ind++} disabled style={ buttonStyle }>{keyLabel}</button>
              )
            });
            return (<div key={ind++}>{keysRow}</div>);
        })
      }
    </div>
  )
};

export default Keyboard;
