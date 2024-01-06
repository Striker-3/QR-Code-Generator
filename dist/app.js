let inputval = document.getElementById("inputEl");
let qrimg = document.getElementById("imgsrc");
let qrgenerator = document.getElementById("generateqr");

qrgenerator.addEventListener("click",function(){
       
       if(inputval.value.length > 0){
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval.value}`;
       }
      else {
       
        alert("Input Something")
    
      }
})