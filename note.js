//jqueryで要素の座標
width = $(window).width()/100;
height = $(window).height()/100;

var x = 50;
var y = 50;
$("#red-box").offset({left:x*width, top:y*height})

//jqueryのcss動的書き換え
$("div").css("width", "300px")


//iframeの動的変更
var preview = document.getElementById("preview");  
var idoc = preview.contentDocument;  
var html = "<html><body>hoge</body></html>";

idoc.open();  
idoc.write(html);  
idoc.getElementsByClassName
