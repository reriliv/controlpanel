const MoveFunction = (selector) => {
  const _content = document.querySelector(selector);
  const [_text, _component] = [_content.querySelector('#text'), _content.querySelector('#component')];
  // let [checked, moveable] = [false, false];
  let poorValue = {text: {x: 0, y: 0}, component:{x: 0, y: 0}};
  let checked = {text: false, component: false};
  let moveable = {text: false, component: false};
  let currentKey = '';

  const parseNumber = (text) => {
    let number = text.substring(0, text.length - 2);
    return Number(number);
  };

  let currentPoint = {
                        text: {x: parseNumber(_text.style.left), y: parseNumber(_text.style.top)},
                        component: {x: parseNumber(_component.style.left), y: parseNumber(_component.style.top)}
                      };
  // console.log(currentPoint['text']);

  const movePoint = (e) => {
    // console.log(e, '拖');
    const [moveX, moveY] = [e.clientX - poorValue[currentKey].x, e.clientY - poorValue[currentKey].y];
    // textPoint = {x: moveX, y: moveY};
    let obj = null;
    obj = currentKey !== '' && currentKey === 'component' ? _component : _text;
    // currentPoint[currentKey].x != undefined ? currentPoint[currentKey].x = moveX;
    if (currentKey !== '') {
      currentPoint[currentKey].x = moveX;
      currentPoint[currentKey].y = moveY;
    }
    obj.style.left = moveX+'px';
    obj.style.top = moveY+'px';
  };
  const getPoorValue = (e, key) => {
    // console.log(currentPoint, key);
    // 计算出差值
    const [currentMouseX, currentMouseY] = [e.clientX, e.clientY];
    // console.log('当前鼠标位置： ', currentMouseX, currentMouseY);
    const [panelLeft, panelTop] = [currentPoint[key].x, currentPoint[key].y];
    // console.log('控件左上角位置： ', panelLeft, panelTop);
    [poorValue[key].x, poorValue[key].y] = [currentMouseX - panelLeft, currentMouseY - panelTop];
    // console.log('计算完毕： ', poorValue[key]);
  };
  const getTextResult = (expression) => {
    return expression ? 'text' : '';
  };
  const getComponentResult = (expression) => {
    return expression ? 'component' : '';
  };
  const checkArea = (e) => {
    let result = '';
    const [mouseX, mouseY] = [e.clientX, e.clientY];
    // console.log(mouseX, mouseY, '当前点击位置');
    // 左上角和右下角的位置
    const [textIndex, componentIndex] = [_text.style.zIndex, _component.style.zIndex];
    let targetFlag = textIndex > componentIndex ? true : false;
    // console.log(targetFlag ? 'text先' : 'component先');
    const [textLeft, textTop, textRight, textBottom] = [currentPoint['text'].x, currentPoint['text'].y + 70, currentPoint['text'].x + 300, currentPoint['text'].y + 120];
    const [componentLeft, componentTop, componentRight, componentBottom] = [currentPoint['component'].x, currentPoint['component'].y + 70, currentPoint['component'].x + 300, currentPoint['component'].y + 120];
    result = targetFlag ? getTextResult(mouseX >= textLeft && mouseY >= textTop && mouseX <= textRight && mouseY <= textBottom) : getComponentResult(mouseX >= componentLeft && mouseY >= componentTop && mouseX <= componentRight && mouseY <= componentBottom);
    /*if(targetFlag) {
      result = (mouseX >= textLeft && mouseY >= textTop && mouseX <= textRight && mouseY <= textBottom ? 'text' : '') ： (mouseX >= componentLeft && mouseY >= componentTop && mouseX <= componentRight && mouseY <= componentBottom ? 'component' : '');
    } else {
      result = mouseX >= componentLeft && mouseY >= componentTop && mouseX <= componentRight && mouseY <= componentBottom ? 'component' : '';
    }*/
    // result == '' ? console.log('text: ', mouseX >= textLeft, mouseY >= textTop, mouseX <= textRight, mouseY <= textBottom, 'component: ', mouseX >= componentLeft, mouseY >= componentTop, mouseX <= componentRight, mouseY <= componentBottom) : '';
    // result === '' ? console.log('mousePoint', mouseX, mouseY, 'text: ', textLeft, textTop, textRight, textBottom, 'component: ', componentLeft, componentTop, componentRight, componentBottom) : '';
    return result;
    /*console.log(mouseX >= textLeft, mouseY >= textTop, mouseX <= textRight, mouseY <= textBottom);
    console.log(mouseX, mouseY, textLeft, textTop, textRight, textBottom, 'text位置');
    console.log(mouseX >= componentLeft, mouseY >= componentTop, mouseX <= componentRight, mouseY <= componentBottom);
    console.log(mouseX, mouseY, componentLeft, componentTop, componentRight, componentBottom, 'component位置');*/
    // return textResult !== '' ? textResult : componentResult !== '' ? componentResult : result;
  };
  const setKey = (key) => {
    // currentKey = key;
    [checked[key], moveable[key]] = [true, true];
  };
  // 节点事件
  _content.onmousedown = function(e){
    // console.log(e.clientX, e.clientY);
    currentKey = checkArea(e);
    // console.log(currentKey);
    // checked = inHead(e);
    // moveable = checked;
    // [checked[currentKey], moveable[currentKey]] = currentKey !== '' ? [true, true] : ;
    currentKey !== '' ? setKey(currentKey) : console.log('空了');
    // console.log(checked, moveable);
  };
  /*_content.onmouseout = function(e){
    [checked, moveable] = [{text: {x: 0, y: 0}}, {text: {x: 0, y: 0}}];
  };*/
  _content.onmouseup = function(e){
    // console.log(checked, moveable);
    [checked, moveable] = [
                            {text: false, component: false},
                            {text: false, component: false}
                          ];
    // console.log(checked, moveable);
  };
  _content.onmousemove = function(e){
    // 移动控件
    // console.log(checked[currentKey], moveable[currentKey], '移动');
    checked[currentKey] && moveable[currentKey] && currentKey !== '' ? movePoint(e) : console.log('');
  };
  _content.onselectstart = function(){
    return false;
  }
  _text.onmousedown = function(e){
    // 设置当前差值
    getPoorValue(e, 'text');
    _text.style.zIndex = 1001;
    _component.style.zIndex = 1000;
  };
  _component.onmousedown = function(e){
    // 设置当前差值
    getPoorValue(e, 'component');
    _text.style.zIndex = 1000;
    _component.style.zIndex = 1001;
  };
  /*_text.draggable = true;
  _component.draggable = true;*/
};

export default MoveFunction;