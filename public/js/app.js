addEventListener('load', main, false);

//GLOBAL CONST
let cname, cgroup, cgender, gencat, califications, tcat, twcat, grades;


function collectGlobalVars(){
    //recoger variables del primer bloque
    const childname = document.querySelector("#childname");
    childname.addEventListener('blur', () => {
        cname = childname.value;
        console.log("EL nombre es: " + cname)
        //const nombre = childname.value;
        //console.log('Nombre introducido:', nombre);
    });

    const teensRadios = document.querySelectorAll(".teens input[name='level']");
    const tweensRadios = document.querySelectorAll(".tweens input[name='level']"); 
    teensRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if(radio.checked){
                tweensRadios.forEach((tweensRadios)=>{
                    tweensRadios.disabled = true;
                })
            }
            cgroup = radio.value;
            console.log("EL grupo es: " + cgroup)
            //console.log("grupo:", radio.value);
        })
    })
    tweensRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if(radio.checked){
                teensRadios.forEach((teensRadios)=>{
                    teensRadios.disabled = true;
                })
            }
            cgroup = radio.value;
            console.log("EL grupo es: " + cgroup)
            //console.log("grupo:", radio.value);
        })
    })
    const genderRadios = document.querySelectorAll(".gen input[name='gender']");
    genderRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if(radio.checked){
                cgender = radio.value;
                console.log("EL genero es: " + cgender)
                //console.log("genero:", radio.value);  
            }
            
        })
    })
}

function clearFirstBlock(){
    const btnClear = document.querySelector(".btnClear");
    btnClear.addEventListener('click', ()=>{
        //clear global vars
        cname = "";
        cgroup = "";
        cgender  = "";

        const allRadioInputs = document.querySelectorAll(".mainbox input[type='radio'");
        allRadioInputs.forEach(input => {
            //enable all radio inputs when disabled
            input.disabled = false;
            //uncheck all radio inputs when checked
            input.checked = false;
        })
        //clear input name
        document.querySelector("#childname").value = "";
    })
}

function collectGenCat(){
    const catRadios = document.querySelectorAll(".cat input[name='gencat']");
    catRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                console.log("gen cat seleccionado:", radio.value);
            }
        });
    });
}

function collectCalifications(){
    const califications = document.querySelectorAll(".calification input[name='cal']");
    califications.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                console.log("gen cat seleccionado:", radio.value);
            }
        });
    });
}

function clearSecondBlock(){
    const btngenerate = document.querySelector(".btngenerate");
    btngenerate.addEventListener('click', ()=>{

        const allRadioInputs = document.querySelectorAll(".generalCat input[type='radio'");
        allRadioInputs.forEach(input => {
            //enable all radio inputs when disabled
            input.disabled = false;
            //uncheck all radio inputs when checked
            input.checked = false;
        })
    })
}

function collectTeens_TweensCat(){
    
}



function main() {

    collectGlobalVars();
    clearFirstBlock();
    collectGenCat();
    collectCalifications();
    clearSecondBlock();

}





