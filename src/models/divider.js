export default {
  namespace: 'dividingRule',
  state: [],
  reducers: {
    'click'(state, action) {
      console.log(state, action, 'reducers');
      return {...state, ...action};
    }
  }
}