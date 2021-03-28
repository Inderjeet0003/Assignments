let input = document.getElementById('inp');
let btn = document.getElementById('addTodo');
let list = document.getElementById('list');

btn.onclick = function (e) {
    
    let todoText = input.value;
    let li = document.createElement('li');
    li.style.borderBottom ="1px solid white";
    let editBttn =  document.createElement('button');
    let dltBttn = document.createElement('button');
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

