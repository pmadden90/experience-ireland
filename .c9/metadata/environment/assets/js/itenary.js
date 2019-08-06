{"changed":true,"filter":false,"title":"itenary.js","tooltip":"/assets/js/itenary.js","value":"//Inspired by JavaScript 30 For 30 day challenge\nconst addItems = document.querySelector('.add-items');\n  const itemsList = document.querySelector('.itenary');\n  const items = JSON.parse(localStorage.getItem('items')) || [];\n  function addItem(e) {\n    e.preventDefault();\n    const text = (this.querySelector('[name=item]')).value;\n    const item = {\n      text,\n      done: false\n    };\n    items.push(item);\n    populateList(items, itemsList);\n    localStorage.setItem('items', JSON.stringify(items));\n    this.reset();\n  }\n  function populateList(itenary = [], itenaryList) {\n    itenaryList.innerHTML = itenary.map((itenary, i) => {\n      return `\n        <li>\n          <label for=\"item${i}\">${itenary.text}</label>\n        </li>\n      `;\n    }).join('');\n  }\n  function toggleDone(e) {\n    if (!e.target.matches('input')) return; // skip this unless it's an input\n    const el = e.target;\n    const index = el.dataset.index;\n    items[index].done = !items[index].done;\n    localStorage.setItem('items', JSON.stringify(items));\n    populateList(items, itemsList);\n  }\n  addItems.addEventListener('submit', addItem);\n  itemsList.addEventListener('click', toggleDone);\n  populateList(items, itemsList);\n  \n \n  //addEventListener('reset', localStorage.clear);\n  //form.reset();\n ","undoManager":{"mark":-2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":48},"action":"insert","lines":["//Inspired by JavaScript 30 For 30 day challenge"],"id":3}],[{"start":{"row":0,"column":48},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":48},"end":{"row":0,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":50,"mode":"ace/mode/javascript"}},"timestamp":1559310145856}