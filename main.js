const GEMINI_API_URL = "https://gemini.googleapis.com/v1/conversations:generate";
const API_KEY = "AIzaSyBTNk4myf3BVPl6XMUi4Vn0QXRNCuAU3ng"; // Ganti dengan API Key Anda

// Referensi elemen
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

// Fungsi untuk menampilkan pesan di chatbox
function appendMessage(role, message) {
    const msgDiv = document.createElement("div");
    msgDiv.style.margin = "10px 0";
    msgDiv.style.padding = "10px";
    msgDiv.style.borderRadius = "5px";
    msgDiv.style.backgroundColor = role === "user" ? "#007BFF" : "#E9ECEF";
    msgDiv.style.color = role === "user" ? "white" : "black";
    msgDiv.style.alignSelf = role === "user" ? "flex-end" : "flex-start";
    msgDiv.style.maxWidth = "75%";
    msgDiv.style.wordWrap = "break-word";
    msgDiv.textContent = message;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

