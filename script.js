const container = document.querySelector(".container"),
input = container.querySelector("input"),
btn = container.querySelector(".btn"),
massage = container.querySelector('.msg');

// ------  hideMassage function here ---------

function hideMassage(){
   setTimeout(()=>{
    massage.innerHTML = '<span>Result will show here.</span>';
   },3000)
}

btn.addEventListener("click",()=>{

    if(input.value.length <= 1){
      massage.innerHTML = '<span>Enter Text or Number must be at least 2 characters.</span>';  
      hideMassage()
      return;
    }
    
   let strArray = input.value.split("");
   let newStr = strArray.reverse().join('');

   if(newStr === input.value){
      massage.innerHTML = `Yes,<span>'${input.value}'</span> this is Palindrome!`;
      hideMassage();
    }else{
      massage.innerHTML = `No,<span>'${input.value}'</span> isn't Palindrome!`;
      hideMassage();
   }
});