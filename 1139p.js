let leftValues = 0, rightValues = 0;
let leftClupName1, rightClupName1;


function leftFunctionPlus() {

    if (leftValues >= 0) {
        leftValues = leftValues + 1;
        document.getElementById("LeftValue").innerHTML = leftValues;

    }

}

function leftFunctionMinus() {
    if (leftValues >= 1) {
        leftValues = leftValues - 1;
        document.getElementById("LeftValue").innerHTML = leftValues;
    }


}

function rightFunctionPlus() {
    if (rightValues >= 0) {
        rightValues = rightValues + 1;
        document.getElementById("rightValue").innerHTML = rightValues;
    }


}

function rightFunctionMinus() {
    if (rightValues >= 1) {
        rightValues = rightValues - 1;
        document.getElementById("rightValue").innerHTML = rightValues;
    }



}

function LeftInputValue() {

    leftValues = prompt("Gol Sayısını Giriniz");
    if (leftValues != null) {
        leftValues = Number(leftValues);

        if (leftValues >= 0) {
            console.log("first");
            document.getElementById("LeftValue").innerHTML = leftValues;

        }
        else {
            console.log("else");
            alert("Hatalı Değer Girdiniz");
            document.getElementById("LeftValue").innerHTML = "0";
        }

    } else {
        alert("Değer Girmediniz")
        document.getElementById("LeftValue").innerHTML = "0";
    }



}

function RightInputValue() {

    rightValues = prompt("Gol Sayısını Giriniz");

    if (rightValues != null) {
        rightValues = Number(rightValues);

        if (rightValues >= 0) {
            console.log("first");
            document.getElementById("rightValue").innerHTML = rightValues;

        }
        else {
            console.log("else");
            alert("Hatalı Değer Girdiniz");
            document.getElementById("rightValue").innerHTML = "0";
        }
    } else {
        alert("Değer Girmediniz")
        document.getElementById("rightValue").innerHTML = "0";

    }




}

function leftClupName() {
    leftClupName1 = prompt("Takım Adını Giriniz");

    if(leftClupName1 != null){

        document.getElementById("leftclup").innerText = leftClupName1;

    }else{

        document.getElementById("leftclup").innerText = "Takım Adı Giriniz";
    }
    

}

function rightClupName() {
    rightClupName1 = prompt("Takım Adını Giriniz");

    if(rightClupName1 != null){
        document.getElementById("rightclup").innerText = rightClupName1;

    }else{

        document.getElementById("rightclup").innerText = "Takım Adı Giriniz";
    }
    

}
