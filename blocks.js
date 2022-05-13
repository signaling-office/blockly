Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://signaling.cf/blockly/ASOIOWVp2S7NLMt1652318130_1652318153.png", 100, 40, { alt: "開始！", flipRtl: "FALSE" }));
    this.appendStatementInput("code")
        .setCheck(null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['start'] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  var code = 'async function main(){\n'+statements_code+'};\n';
  return code;
};


Blockly.Blocks['turn'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["右","right"], ["左","left"], ["後ろ","back"]]), "LorR")
        .appendField("方向に");
    this.appendValueInput("class")
        .setCheck("class")
        .appendField("度");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("name");
 this.setHelpUrl("https://topi.cf");
  }
};
Blockly.JavaScript['turn'] = function(block) {
  var dropdown_lorr = block.getFieldValue('LorR');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...;\n';
  return code;
};


Blockly.Blocks['go'] = {
  init: function() {
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("速さ");
    this.appendDummyInput()
        .appendField("で進む");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("name");
 this.setHelpUrl("https://topi.cf");
  }
};
Blockly.JavaScript['go'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...;\n';
  return code;
};


Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("position")
        .setCheck("position")
        .appendField("座標");
    this.appendValueInput("class")
        .setCheck("class")
        .appendField("に動かす");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("name");
 this.setHelpUrl("https://topi.cf");
  }
};
Blockly.JavaScript['move'] = function(block) {
  var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...;\n';
  return code;
};


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("秒待つ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sleep'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await sleep('+value_time*1000+');\n';
  return code;
};


Blockly.Blocks['resize'] = {
  init: function() {
    this.appendValueInput("size")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["横","width"], ["縦","height"]]), "WroH")
        .appendField("方向の大きさを");
    this.appendDummyInput()
        .appendField("に変更");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['resize'] = function(block) {
  var dropdown_wroh = block.getFieldValue('WroH');
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...;\n';
  return code;
};
