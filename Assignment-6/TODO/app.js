const input = document.getElementById('inp');
const btn = document.getElementById('addTodo');
const list = document.getElementById('list');

btn.onclick = function (e) {
    
    const todoText = input.value;
    const li = document.createElement('li');
    li.style.borderBottom ="1px solid white";
    const editBttn =  document.createElement('button');
    const dltBttn = document.createElement('button');
    dltBttn.setAttribute("id","delete");
    editBttn.setAttribute("id","edit");
    li.append(dltBttn);
    dltBttn.innerHTML = "delete";
    editBttn.innerHTML = "edit";
    li.innerText = todoText;
    if(li.innerText!=="")
    {   
        list.append(li);
        li.append(dltBttn);
        li.append(editBttn);
    }
    else{
        alert("Must enter something!!!")
    }

    dltBttn.onclick = function(e){
        dltBttn.setAttribute("contentEditable","false")
        e.target.parentNode.remove();
    }
    editBttn.onclick = function(e){
        li.setAttribute("contentEditable","true");
        editBttn.setAttribute("contentEditable","false");
        dltBttn.setAttribute("contenteditable","false");
        li.style.borderBottom ="4px solid white";
    }
    li.style.borderBottom ="1px solid white";
    input.value = "";
}

