// start
function _start(code){
  return `async function main(){\n${code}};\n`
}

// turn
function _turn(angle,classname){
  return `$(".${classname}").css("transform", "rotate(${angle}deg)");\n`
}

// go
function _go(angle,classname,speed){
  return;
}

// move
function _move(position,classname){
  return `$(".${classname}").offset({left:${position.x}, top:${position.y}});\n`;
}

// sleep
function _sleep(time){
  return `await sleep(${time*1000});\n`;
}

// resize
function _resize(size,classname){
  return `$(".${classname}").offset({left:${size.x}, top:${size.y}});\n`;
}

// class
function _class(name){
  return name;
}

// get position
function _get_position(classname){
  return `$(".${classname}").offset();\n`
}

// set color
/////////////////////////////////////////////////////////////////////////イマココ
function _set_color(color,classname){
  $(".${classname}").css("back", "rotate(${angle}deg)");
  return ;
}

// run code
function _run_code(){
  return;
}
