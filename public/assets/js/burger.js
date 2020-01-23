$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        $.post("/api/burgers", newBurger)
            .then(function () {
                console.log("Created burger");
            });
    });
});