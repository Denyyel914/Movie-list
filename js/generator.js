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

//Show alerts
function alertShow(message, className) {
    const div = document.createElement('div');
    div.className = className; 
    div.appendChild(document.createTextNode(message));
    const header = document.querySelector('#header');
    const container2 = document.querySelector('#container');
    container2.insertBefore(div, header);
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
    if(kahon.length == 0 || kahon === undefined) {
        alertShow('No item can be randomize', 'alert alert-danger');
    } else {
        resultss.innerHTML = (kahon[rands]);
        alertShow('Random item has been picked', 'alert alert-success');
    }
});

