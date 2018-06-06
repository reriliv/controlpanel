export default {
  namespace: 'operationPanel',
  state: {
    'text': {x: 0, y: 0},
    'component': {x: 0, y: 0},
  },
  effects: {
    *down({payload}, {put}){
      // console.log(payload, 'model');
      yield put({type: 'onmousedown'}, {payload: payload})
    },
    *drag ({ payload }, { put }) {
      console.log('payload: ', payload);
      yield put({type: 'ondragend'}, {payload: payload});
    },
    *drop ({payload}, {put, call}) {
      yield put({type: 'ondrop'}, {payload: payload});
    }
  },
  reducers: {
    click(state, {payload}){
      console.log(payload);
      return {...state, ...payload};
    },
    drag(state, {payload}){
      console.log(state[payload.key], payload.currentPosition, '拖动');
      return {...state, ...payload};
    },
    dragend(state, {payload}){
      console.log(state[payload.key], payload.currentPosition, 'end');
      return {...state, ...payload};
    },
    drop(state, {payload}){
      // console.log(state, payload, '移动距离');
      return {...state, ...payload};
    },
  }
}