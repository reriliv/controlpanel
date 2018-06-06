export default {
  namespace: 'panels',
  state: {
    mouseX: null,
    mouseY: null
  },
  effects: {
    *click ({payload}, {put, call}){
      switch(payload.mouse){
        case 'up':
          yield put({type: 'onmouseup'}, {payload: payload})
          break;
        default :
          yield put({type: 'onmousedown'}, {payload: payload})
          break;
      }
    },
    *drag ({ payload }, { put, call }){
      console.log(payload)
      switch(payload.drag){
        case 'end':
          yield put({type: 'ondragend'}, {payload: payload});
          break;
        default :
          yield put({type: 'ondragstart'}, {payload: payload});
      }
    }
  },
  reducers: {
    onmousedown(state, {payload}) {
      console.log('鼠标按下');
      return {...state, ...payload};
    },
    ondragstart(state, {payload}) {
      console.log(state, payload, '鼠标移动');
      return {...state, ...payload};
    },
    ondragend(state, {payload}) {
      console.log(state, payload, '鼠标停止');
      return {...state, ...payload};
    },
    onmouseup(state, {payload}) {
      console.log('鼠标松开');
      return {...state, ...payload};
    },
  }
}