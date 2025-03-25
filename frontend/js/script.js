function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // Append User Message
    let userMessage = document.createElement("div");
    userMessage.className = "chat-bubble user-message";
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Send the message to the backend
    fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        let aiMessage = document.createElement("div");
        aiMessage.className = "chat-bubble ai-message";
        aiMessage.innerText = data.response;  // Display AI's actual response
        chatBox.appendChild(aiMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error("Error:", error);
        let errorMessage = document.createElement("div");
        errorMessage.className = "chat-bubble ai-message";
        errorMessage.innerText = "Error communicating with AI.";
        chatBox.appendChild(errorMessage);
    });
}