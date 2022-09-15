function addingEventListener() {
    const x = document.getElementById("button")
    x.addEventListener("click", clickEvent)

}
function clickEvent (){
    console.log("this is a log")
}

addingEventListener()