import Immutable from 'immutable';

export default data=>{
  if (data.has('fields')) {
    return data.get('fields').keySeq().map(key=> new Immutable.Map({
      type: data.getIn(['fields', key, 'type']),
      name: key
    }));
  }
}
