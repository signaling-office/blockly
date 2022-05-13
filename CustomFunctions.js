// start
function _start(code){
  return `async function main(){\n${code}};\n`;
}

// turn
function _turn(angle,classname){
  return `$(".${classname}").css("transform", "rotate(${angle}deg)");`;
}

// go
function _go(angle,classname,speed){
  return;
}

// move
function _move(position,classname){
  return `$(".${classname}").offset({left:${position.x}, top:${position.y}})`;
}

// sleep
function _sleep(){
  return;
}

// resize
function _resize(){
  return;
}

// class
function _class(){
  return;
}

// get position
function _get_position(){
  return;
}

// set color
function _set_color(){
  return;
}

// run code
function _run_code(){
  return;
}
