let count = 0;

function increment(){
    count = count +1;
    document.getElementById("count").innerText = count;
}

function decrement(){
    count = count -1;
    if(count <= 0){
    count = 0;
    }
document.getElementById("count").innerText = count;
}

function reset(){
    document.getElementById("count").innerText = 0;
}