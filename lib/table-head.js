import React from 'react';
export default ({schema})=> {
  return <thead>
    <tr>
      {schema.map(item=>
         <th key={item.get('name')}>{item.get('name')}</th>
       )}
    </tr>
    </thead>
}
