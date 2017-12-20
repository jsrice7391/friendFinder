console.log("Winner winner");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

var second_out = document.getElementById("second_ques");
var secound_slide = document.getElementById("second_slide")
secound_slide.innerHTML = second_out.value;

second_out.oninput = function() {
    secound_slide.innerHTML = this.value
}

var third_out = document.getElementById("third_ques");
var third_slide = document.getElementById("third_slide")
third_slide.innerHTML = third_out.value;

third_out.oninput = function() {
    third_slide.innerHTML = this.value
}

var fourth_out = document.getElementById("fourth_ques");
var fourth_slide = document.getElementById("fourth_slide")
fourth_slide.innerHTML = fourth_out.value;

fourth_out.oninput = function() {
    fourth_slide.innerHTML = this.value
}

var fifth_out = document.getElementById("fifth_ques");
var fifth_slide = document.getElementById("fifth_slide")
fifth_slide.innerHTML = fifth_out.value;

fifth_out.oninput = function() {
    fifth_slide.innerHTML = this.value
}

var sixth_out = document.getElementById("sixth_ques");
var sixth_slide = document.getElementById("sixth_slide")
sixth_slide.innerHTML = sixth_out.value;

second_out.oninput = function() {
    secound_slide.innerHTML = this.value
}


var seventh_out = document.getElementById("seventh_ques");
var seventh_slide = document.getElementById("seventh_slide")
seventh_slide.innerHTML = seventh_out.value;

seventh_out.oninput = function() {
    seventh_slide.innerHTML = this.value
}

var eigth_out = document.getElementById("eigth_ques");
var eigth_slide = document.getElementById("eigth_slide")
eigth_slide.innerHTML = eigth_out.value;

eigth_out.oninput = function() {
    eigth_slide.innerHTML = this.value
}

var ninth_out = document.getElementById("ninth_ques");
var ninth_slide = document.getElementById("ninth_slide")
ninth_slide.innerHTML = ninth_out.value;

ninth_out.oninput = function() {
    ninth_slide.innerHTML = this.value
}

var tenth_out = document.getElementById("tenth_ques");
var tenth_slide = document.getElementById("tenth_slide")
tenth_slide.innerHTML = tenth_out.value;

tenth_out.oninput = function() {
    tenth_slide.innerHTML = this.value
}


var theInputs = "";


function get_Inputs() {
    $("#survey .question input").each(function(question_val) {
        theInputs += parseInt($(this).val());
    })
    console.log(theInputs);
    postIt();

}


$("#submit").on("click", function(e) {
    e.preventDefault();
    get_Inputs();
    location.reload();
});



function postIt() {
    var newFriend = {
        name: $("#name").val(),
        photo: $("#photo_link").val(),
        answers: theInputs,
    };

    console.log("Here is the new Friends answers", newFriend.answers)

    $.ajax("/api/friends", {
        type: "POST",
        dataType: "json",
        data: newFriend,
    }).then(function() {
        console.log("NAILED IT")

    });


}