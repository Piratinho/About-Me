document.addEventListener("DOMContentLoaded", function() {


    const pictures = document.getElementsByClassName("slider__picture");
    const forward = document.getElementById("forward");
    const back = document.getElementById("back");


    forward.addEventListener("click", nextPhoto);
    back.addEventListener("click", previousPhoto);

    let counter = 0;
    pictures[0].classList.add("showIt")
    console.log("Oglądasz zdjęcie numer 0");
    function nextPhoto() {
        if (counter < pictures.length-1) {
            counter++
            pictures[counter-1].classList.remove("showIt");
            pictures[counter].classList.add("showIt");
            console.log("Oglądasz zdjęcie numer " + counter);
        } else {
            counter = 0;
            pictures[pictures.length - 1].classList.remove("showIt");
            pictures[0].classList.add("showIt");
            console.log("Oglądasz zdjęcie numer 0");
        }
    }

    function previousPhoto() {
        if (counter > 0) {
            counter--;
            pictures[counter+1].classList.remove("showIt");
            pictures[counter].classList.add("showIt");
            console.log("Oglądasz zdjęcie numer " + counter);
        } else {
            counter = pictures.length-1;
            pictures[0].classList.remove("showIt");
            pictures[counter].classList.add("showIt");
            console.log("Oglądasz zdjęcie numer " + counter);
        }
    }


    





    //
    // let counter = 0;
    // pictures[counter].classList.add("showIt");
    // setInterval(function() {
    //     counter++;
    //     if (counter < pictures.length) {
    //         pictures[counter-1].classList.add("unvisible")
    //         pictures[counter].classList.add("showIt");
    //     } else {
    //         counter = 0;
    //         pictures[4].classList.add("unvisible")
    //         pictures[counter].classList.add("showIt");
    //     }
    //
    //     console.log(counter);
    //
    //
    // },1000);

    //
    //
    // var forward = document.getElementById("forward");
    // var back = document.getElementById("back");
    //
    // forward.addEventListener("click", slajd);
    //
    // let counter = 0;
    // let deleter = -1;
    // function slajd() {
    //     pictures[counter].classList.add("showIt");
    //     counter += 1;
    //     pictures[deleter].classList.add("unvisible");
    //     deleter += 1;
    //     console.log(counter);
    //     console.log(deleter);
    // }
    //
    //


});
