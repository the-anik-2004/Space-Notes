
const addBtn= document.querySelector("#addBtn");
const pad=document.querySelector("#note-pad");
const color=document.querySelector("#bgColor");










const saveNotes = () =>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note)=>{
        data.push(note.value)
    })
    if(data.length===0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
    }
    
   


addBtn.addEventListener("click",()=>{
    addNote();
});



const addNote=(text="")=>{
    //Defination
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="Space-Note">
    <div id="tools"><p id="ct">📌</p><i id="delete" class="fa-solid fa-trash"></i></div>
    <textarea placeholder="Write your notes📝..." name="notes" id="content"  >${text}</textarea>
    </div>   `;
    //addition
 
    note.querySelector("#delete").addEventListener("click",()=>{
        // window.alert("delete?")
        // note.remove();
        // saveNotes();  

        if (window.confirm("Do you want to delete the note?")) {
          
            note.remove();
            saveNotes();
          }
    });

    // note.querySelector("#save").addEventListener("click",()=>{
    //     saveNotes();
    // });
    //auto save
    note.querySelector("#content").addEventListener("focusout",()=>saveNotes())
    // auto save
    pad.appendChild(note);
    saveNotes();

    
}

(
   function(){
        const ls=JSON.parse(localStorage.getItem("notes"));
        if(ls===null){
            addNote();
        }
        else{
            ls.forEach(
                (ls)=>{
                    addNote(ls);
                }
            )
        }
        
    
    }
)()

