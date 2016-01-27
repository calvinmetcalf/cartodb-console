import DataField from './data-field';
import React from 'react';
export default ({schema, rows})=> {
  return <tbody>
    {rows.map(row=>
       <tr key={'row-' + row.get('_key')}>
          {schema.map(header=>{
            var name = header.get('name');
            if (!name) {
              return <td key={row.get('key') + '-unk' }/>;
            }
            var key = row.get('key') + '-' + name;
            var value = row.get(name);
            var type = header.get('type');
            if (type) {
              type = type.toLowerCase();
            } else {
              return <td key={key} />;
            }
            return <td key={key}><DataField value={value} name={name} header={header}/></td>;})}
      </tr>
    )}
  </tbody>
}
