$(document).ready(function () {

    $(document).on("click", ".burger-item", editRecord);
    $(document).on("keyup", ".burger-item", finishEdit);
    $(document).on("blur", ".burger-item", hideEdit);
    $(document).on("click", "button.delete", deleteRecord);

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        $.post("/api/burgers", newBurger)
            .then(function () {
                console.log("Created burger");
                location.reload();
            });

        $("#burger_name").val("");

    });

    function editRecord() {
        const name = $(this).data("name");
        $(this).children().hide();
        $(this).children("input.edit").val(name);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
        var updatedInfo = {
            id: $(this).children("input").data("id")
        }
        if (event.which === 13) {
            updatedInfo.burger_name = $(this).children("input").val().trim();
            $(this).blur();
            updateRecord($(this), updatedInfo);
        }
    }

    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function hideEdit() {
        var currentRec = $(this).children("input").data("id");
        if (currentRec) {
            $(this).children().hide();
            $(this).children("input.edit").val($(this).data("name"));
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }

    function updateRecord(obj, info) {
        $.ajax({
            method: "PUT",
            url: "/api/burgers",
            data: info
        }).then(function (result) {
            obj.children("span").text(info.burger_name);
        });
    }

    // This function deletes a todo when the user clicks the delete button
    function deleteRecord(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/burgers",
            data: { id: id }
        }).then(function () {
            //console.log($(this).data("name"));
            //$(this).parent().remove();
            location.reload();
        });
    }
});