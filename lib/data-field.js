import React from 'react';

export default ({value, header})=> {
  var type = header.get('type').toLowerCase();
  if (type === 'number') {
    if (typeof value !== 'number') {
      value = parseFloat(value);
    }
    return <span>{value.toLocaleString()}</span>;
  }
  if (type === 'geometry') {
    return <span>Geometry omitted</span>;
  }
  if (type === 'boolean') {
    if (value) {
      return <span>true</span>;
    } else {
      return <span>false</span>;
    }
  }
  return <span>{value}</span>;
}
