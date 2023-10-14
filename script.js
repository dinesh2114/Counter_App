let count = 0;

function increment(){
    count +=1;
    document.getElementById("count").innerText = count;
}

function decrement(){
    count -=1;
    if(count <= 0){
    count = 0;
    }
document.getElementById("count").innerText = count;
}

// function reset(){
// }

function save(){
    // console.log(count);
    let output = document.getElementById("saved");
    
    output.textContent+= " - " + count ;
    document.getElementById("count").innerText = 0;
    count = 0;
}