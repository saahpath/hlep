imageAssigner1();

function imageAssigner1() {
    document.getElementById("cursed").classList.add("hitler1");
    document.getElementById("cursed").classList.remove("hitler3");
    setTimeout(imageAssigner2, 1000);
    console.log("Loop 1");
}

function imageAssigner2() {
    document.getElementById("cursed").classList.add("hitler2");
    document.getElementById("cursed").classList.remove("hitler1");
    setTimeout(imageAssigner3, 1000);
    console.log("Loop 2");
}

function imageAssigner3() {
    document.getElementById("cursed").classList.add("hitler3");
    document.getElementById("cursed").classList.remove("hitler2");
    setTimeout(imageAssigner1, 1000);
    console.log("Loop 3");
}