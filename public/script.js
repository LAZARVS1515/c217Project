const socket = io("/");
const user = prompt("enter your name");
$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit("message", $("#chat_message").val,user());
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val,user());
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message,userName) => {
    $(".messages").append(`
        <div class="message">
            <span class="userName">${userName}</span>
            <span>${message}</span>
        </div>

    `)
});