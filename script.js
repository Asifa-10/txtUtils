
function upprcase(){
    var entrdata= document.getElementById("txt").value;
        document.getElementById("res").innerHTML= entrdata.toUpperCase();
        document.getElementById("txt").value= entrdata.toUpperCase();
}

function lowrcase(){
    entrdata= document.getElementById("txt").value;
        document.getElementById("res").innerHTML= entrdata.toLowerCase();
        document.getElementById("txt").value= entrdata.toLowerCase();
}

function clr(){
    entrdata= document.getElementById("txt").value;
    document.getElementById("res").innerHTML= "";
    document.getElementById("txt").value= "";
}
function remspce(){
    entrdata= document.getElementById("txt").value;
    var count=0;
    for (let i = 0; i < entrdata.length; i++) {
        if (entrdata.charAt(i)==' ') {
            count++;
        }else 
            count=0;

            if (count>1) {
                console.log(entrdata.replace(/\s+/g, ''));      
            }
    }
    
}

var a= document.getElementById("txt");
a.addEventListener('keyup',function(){
    document.getElementById("chCnt").innerHTML= a.value.length;
    document.getElementById('res').innerHTML=a.value;
})
var cnt=0;
a.addEventListener('keydown',function(event){
    
    if (event.key === ' ') {
       cnt++; 
    }
    document.getElementById("wrdsCnt").innerHTML=cnt+1;
})
