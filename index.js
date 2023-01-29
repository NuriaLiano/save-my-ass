addEventListener('load', main, false);

function main(){
    
    //select btm box one
    let btmSave = document.querySelector(".btnSave");
    btmSave.addEventListener("click", saveDataFirstBox, true);

    let btmClear = document.querySelector(".btnClear");
    btmClear.addEventListener("click", clearDataFirstBox, true);

    //select btm box two
    let btmGenOne = document.querySelector(".btngenerate");
    let btmGenTwo = document.querySelector(".btngentext2");

    //select btm box three
    let btmCopy = document.querySelector(".btncopy");
    let btmShuffle = document.querySelector(".btnshuffle");


    btmShuffle.addEventListener("click", () => console.log("va"), true)

    //update the copyright date
    document.querySelector(".printDate").innerHTML = new Date().getFullYear();
    


}

function saveDataFirstBox(){
    
    //collect data from inputs
    let childname = document.querySelector("#childname").value;
    let gender = valueRadioChecked(document.getElementsByName("gender"));
    let levelTeens =  valueRadioChecked(document.getElementsByName("teens"))
    let levelTweens =  valueRadioChecked(document.getElementsByName("tweens"))

    //freezes data
    document.querySelector("#childname").value = childname;
    document.querySelector("#childname").setAttribute("readonly", "true")

    //change backgroundColor
    document.querySelector(".mainbox").setAttribute("style", "background-color: var(--backgroundSelected);")
}

function valueRadioChecked(array){
    let val
    array.forEach(element => {
        if(element.checked){
            val = element.value;
        }
    })
    return val
}

function clearDataFirstBox(){
    document.querySelector("#childname").value = ""
    document.querySelector("#childname").removeAttribute("readonly")
    clearData("gender")
    clearData("level")
    document.querySelector(".mainbox").setAttribute("style", "background-color: var(--boxOne);")
}


function clearData(name){
    document.getElementsByName(name).forEach(element => {
        element.checked = false;
    })
}


