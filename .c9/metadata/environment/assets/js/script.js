{"filter":false,"title":"script.js","tooltip":"/assets/js/script.js","undoManager":{"mark":7,"position":7,"stack":[[{"start":{"row":32,"column":30},"end":{"row":33,"column":0},"action":"remove","lines":["",""],"id":3},{"start":{"row":32,"column":30},"end":{"row":33,"column":4},"action":"remove","lines":["","    "]}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":43,"column":0},"end":{"row":62,"column":4},"action":"insert","lines":["$(document).ready(function() {","\t","\t// Toggle the visibility of the paragraph when a button is clicked ","\t$(\"button\").click(function(){","\t\t$(this).prev().slideToggle('fast');","\t});","\t","\t ","\t$(\"img\").click(function(){","\t\t$(this).next().children(\"p\").slideDown();","\t});","\t","","\t$(\"#all_btn\").click(function(){","\t\t$(\".card\").show();","\t});","\t","\t$(\"#select_btn\").click(function(){","\t\t$(\".card:not(highlight)\").hide();","\t});"],"id":5}],[{"start":{"row":62,"column":4},"end":{"row":63,"column":1},"action":"remove","lines":[""," "],"id":6}],[{"start":{"row":43,"column":0},"end":{"row":44,"column":1},"action":"remove","lines":["$(document).ready(function() {","\t"],"id":7}],[{"start":{"row":31,"column":26},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":32,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["/"]}],[{"start":{"row":32,"column":1},"end":{"row":32,"column":2},"action":"insert","lines":["*"],"id":13}],[{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["*"],"id":14},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":42,"column":5},"end":{"row":42,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":55,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1560083725491,"hash":"5068d40be00dd68ed0b38b53e8ff01200b6d007f"}