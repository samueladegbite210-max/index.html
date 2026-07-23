 // ==========================
// AI Memory
// ==========================

function getMemory(){

    return JSON.parse(localStorage.getItem("memory")) || {};

}

    return JSON.parse(localStorage.getItem("aiMemory")) || {};

}

function saveMemory(memory){

    localStorage.setItem(
        "memory",
        JSON.stringify(memory)
    );

}
