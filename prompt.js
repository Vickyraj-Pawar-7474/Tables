function funPrompt(){
   prompt= prompt("What is your age");
   if(prompt=='' || prompt==null){
    alert("Invalid Input")
   } else if(prompt < 16){
    alert("You are not eligible");
   } else{
    window.location.href="https://www.facebook.com/"
   }
}
