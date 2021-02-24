
function InvokeSignalR(userId) {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();
    console.log(connection);

    //This method receive the message and Append to our list  
    connection.on("ReceiveMessage", (userName, userId, message) => {
        console.log(userId)
        console.log(userName)

        if (userName == "agmghazi") {
            debugger
            //const msg = message.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");

            const encodedMsg = message;
            const li = document.createElement("li");
            li.textContent = encodedMsg;
            li.classList.add("other");
            document.querySelector(".messages").appendChild(li);
        } else {
            console.log("kkk")
            console.log(userId)
            debugger
            //const encodedMsg = message;
            //const li = document.createElement("li");
            //li.textContent = encodedMsg;
            //li.classList.add("self");
            //document.querySelector(".messages").appendChild(li);
        }
    });

    connection.start().catch(err => console.error(err.toString()));

    //Send the message  

    document.getElementById("sendMessage").addEventListener("click", event => {
        const message = $('#userMessage').text();

        //const userId = "02174cf0–9412–4cfe-afbf-59f706d72cf6";

        connection.invoke("SendMessage", userId, message).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });

}
