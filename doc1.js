// console.dir(document.all);
// console.dir(document.all[6]);
// console.dir(document.all[6].innerHTML = '123');

// console.log(document.URL);
// console.log(document.title);
// document.title = 456;
// console.log(document.title);
// console.log(document.getElementById("intro"));
let store = document.getElementById('intro');
console.log(store);
store.textContent = 'hello';
store.innerText = 'welcome';
store.innerHTML = '<h3>hello</h3>';