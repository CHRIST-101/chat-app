let inputTask=document.getElementById('input-Task');
let icon=document.getElementById('icon');
let sentMessage=document.querySelector(".sent-message");

 function sendMessage(){

 if(inputTask.value.trim()===""){ // trim is use to remove space from the start and end
        alert("input something")

    }else{
         let chat=document.createElement('div')
         chat.classList.add('chatbox');
         chat.innerHTML=inputTask.value;
         sentMessage.appendChild(chat);
         inputTask.value=""; 
    }

 
}

icon.addEventListener("click",sendMessage);


inputTask.addEventListener("keydown", function(event){ // event let us tap into the event that triggers the event listeners
    let target=event.key; // event.key let us grab which keyboard key was pressed 
    if(target==="Enter"&& !event.shiftKey){
        event.preventDefault();
        sendMessage(); 





        /*  if(inputTask.value.trim() === ""){
            alert("Input something");
        }else{
            let chat = document.createElement("div");
            chat.classList.add("chatbox");

            chat.innerHTML = inputTask.value;

            sentMessage.appendChild(chat);

            inputTask.value = "";
        } */
         
    }
})

