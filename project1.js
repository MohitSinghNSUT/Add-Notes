//id of add textarea is                 addtxt
// id of add button is                  btn01
// id of where we want to add is        notes

console.log('hello');
// event listener
let firstbtn = document.getElementById('btn01');
show();
firstbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById("addtxt");
    let title=document.getElementById('titleofnote');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj =[];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let obj={
        objtitle:title.value,
        objtext:addtext.value
        
    }
    notesobj.push(obj);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    title.value = '';
    console.log(`title of notes ${title}`);
    addtext.value = '';
    show();

})
// there is a difference in 
/*

                 let title=document.getElementById('titleofnote');
                    title.value=''
                vs 
            let title=document.getElementById('titleofnote').value;
                title=''
            above changes the  value of the input but the 
            below does not changes according to
            me the above is like pointer to the content
            and the below is the value only therefore the above changes and below does not changes



*/







function show() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="my-3 mx-5 card notecard" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${element.objtitle}</h5>
        <p class="card-text">${element.objtext}</p>
        <button id=${index} onclick="deleteme(this.id)" class="btn btn-primary">Delete</button>
        </div>
        </div>
        `
    });
    
    let noteselem = document.getElementById('notes')
    // console.log('entered',notes.length);
    if (notes==null || notes.length != 0) {
        noteselem.innerHTML = html;
    }
    else {
        noteselem.innerHTML = '<h3>you have not entered any note please enter </h3>';
    }

}

function deleteme(index){
    let notes= (localStorage.getItem('notes'));
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
localStorage.setItem('notes',JSON.stringify(notesobj));
show();
}

let search=document.getElementById('searchid');
search.addEventListener('input',function(){

})