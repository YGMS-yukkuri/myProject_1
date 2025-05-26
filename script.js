document.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        getAnswer();
    }
})
function getAnswer(){
    const input1 = Number(document.getElementById("input1").value);
    const siki = document.getElementById("keisan").value;
    const input2 = Number(document.getElementById("input2").value);
    const answer = Keisan(input1,siki,input2);
    console.log(answer);
    document.getElementById("AnswerBox").textContent = `= ${answer}`;
}
function Keisan(value1,siki,value2){
    switch(siki){
        case "pura" :
            return value1 + value2;
            break;
        case "mai" :
            return value1 - value2;
            break;
        case "kake" :
            return value1 * value2;
            break;
        case "wari" :
            return value1 / value2;
            break;
    }
}

function get2shin(){
    const input10 = document.getElementById("sininput10");
    const input2 = document.getElementById("sininput2");
    answer = Number(input10.value);
    console.log(answer.toString(2));
    temp = answer.toString(2);
    input2.value = temp;
}