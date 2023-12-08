function funConfirm(){
   confirm= confirm ('Do you want to redirect to  Facebook')
    if(confirm == true){
        window.location.assign("https://www.facebook.com/")
    }
    else {
        alert ('Not continued');
    }
}