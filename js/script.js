

const some = [{fruit: "apple", vegetable: "Beetroot"}, {fruit: "banana", vegetable: "Beetroot"}];
function setSkillLevel(){
    let numbervalueAngular = document.getElementById("numbervalueAngular");
    let numbervalueHTML = document.getElementById("numbervalueHTML");
    let numbervalueCSS = document.getElementById("numbervalueCSS");
    let numbervalueJS = document.getElementById("numbervalueJS");
    const values = [{htmlElement : numbervalueAngular, percentValue : 80}, {htmlElement : numbervalueHTML, percentValue : 95}, {htmlElement : numbervalueCSS, percentValue : 85}, {htmlElement : numbervalueJS, percentValue : 75}];
    //numbervalueJS.innerHTML = "PO";
    for(let i=0; i<values.length; i++){
         let counter = 0;
        setInterval(() => {
            if(counter==values[i].percentValue){
                clearInterval();
                console.log("if");
            }else{
                counter += 1;
                values[i].htmlElement.innerHTML = counter + "%";
                console.log("else");
            }
        }, 22);
    }
}
