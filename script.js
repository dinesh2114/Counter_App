let count = 0;

function increment(){
    count +=1;
    let output = document.getElementById("p2");
    if(output.style.display === "block"){
        output.style.display="none";
    }
    let outputp1=document.getElementById("p1");
    if(outputp1.style.display === "none"){
        outputp1.style.display = "block";
    }
    document.getElementById("count").innerText = count;
    // let output_ = document.getElementById("p1");
    // output_.innerText = "Last Entries are as Folows";
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
    let output = document.getElementById("p1");
    
    output.textContent+= " - " + count ;
    document.getElementById("count").innerText = 0;
    count = 0;
}

function reset(){
    let output = document.getElementById("p2");
    if(output.style.display === "none"){
        output.style.display="block";
    }
    let outputp1=document.getElementById("p1");
    if(outputp1.style.display === "block"){
        outputp1.style.display = "none";
    }
    // output.innerText = "Last Entries were reset"

}