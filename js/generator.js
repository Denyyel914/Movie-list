const formInput = document.querySelector('#addForm');
const list = document.querySelector('#items');
const value = document.querySelector('#item');
const errors = document.querySelector('#error');
const generate = document.querySelector('#generate');
const resultss = document.querySelector('#generator-result');
const error = document.querySelector('#error');


formInput.addEventListener('submit', submitItem);



//submit item
function submitItem(e) {
    e.preventDefault();
    //validation
    if(value.value === '') {
        alertShow('Please input valid fields', 'alert alert-danger');
    } else {
        addItem();
        deleteFields();
        alertShow('List Added', 'alert alert-success');
    }
}

//add item
function addItem(e) {
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(value.value));
    list.appendChild(li);
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.className = "list-group-item";
    li.appendChild(btn);
    // console.log(deleteBtn(btn));
}

function deleteFields() {
    const value = document.querySelector('#item').value = '';
}

//delete item
list.addEventListener('click', deleteItem);


function deleteItem(e) {
    if(e.target.classList.contains('btn')) {
        if(confirm('Are you Sure')) {
            e.target.parentElement.style.display = "none";
            alertShow('List item deleted', 'alert alert-warning');
        } else {
            console.log(1);
        }
    }
}

function alertShow(message, className) {
    error.className = className;
    error.appendChild(document.createTextNode(message));
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

//random generator
generate.addEventListener('click', (e) => {
    var items = document.querySelectorAll("#items li");
      var kahon = [];
      for (var j = 0; j < items.length; j++) {
        kahon.push(items[j].textContent.substr(0, items[j].textContent.length -1));
      }
      const rands = Math.floor(Math.random() * kahon.length);
      resultss.innerHTML = (kahon[rands]);
});

