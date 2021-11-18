$(function() {
    $("input").on("click", function() { // assign event listener to all input elements
        console.log($(this).val()); // use the this keyword to access the element clicked and return its value property
    })

});