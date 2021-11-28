var currentButton = document.querySelector("button");


currentButton.onclick = function() {

    var first_number = document.querySelector("#first_number").value,
        second_number = document.querySelector("#second_number").value;

    alert("the devision of " + first_number + "by" + second_number + "=" + first_number / second_number);
    alert("the rest is  of " + first_number % second_number);

};