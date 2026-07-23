 // ==========================
// AI Memory
// ==========================

function getMemory(){

    return JSON.parse(localStorage.getItem("memory")) || {};

}

   

function saveMemory(memory){

    localStorage.setItem(
        "memory",
        JSON.stringify(memory)
    );

}
