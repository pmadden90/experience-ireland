//Inspired by JavaScript 30 For 30 day challenge
const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.itenary');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }
  function populateList(itenary = [], itenaryList) {
    itenaryList.innerHTML = itenary.map((itenary, i) => {
      return `
        <li>
          <label for="item${i}">${itenary.text}</label>
        </li>
      `;
    }).join('');
  }
  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);
  
 
  //addEventListener('reset', localStorage.clear);
  //form.reset();
 