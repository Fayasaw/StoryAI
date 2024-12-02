// Fungsi untuk mengirim pesan ke Gemini API

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Tampilkan pesan pengguna
    appendMessage("user", message);
    userInput.value = "";

    // Kirim permintaan ke API Gemini
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content: `Create a fantasy story based on this input: '${message}'`
                    }
                ]
            }),
        });

        if (response.ok) {
            const data = await response.json();
            const botMessage = data.messages?.[0]?.content || "No response from the bot.";
            appendMessage("bot", botMessage);
        } else {
            appendMessage("bot", `Error: ${response.status}`);
        }
    } catch (error) {
        appendMessage("bot", `Error: ${error.message}`);
    }
}
// Fungsi untuk mengirim pesan ke Gemini API

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Tampilkan pesan pengguna
    appendMessage("user", message);
    userInput.value = "";

    // Kirim permintaan ke API Gemini
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content: `Create a fantasy story based on this input: '${message}'`
                    }
                ]
            }),
        });

        if (response.ok) {
            const data = await response.json();
            const botMessage = data.messages?.[0]?.content || "No response from the bot.";
            appendMessage("bot", botMessage);
        } else {
            appendMessage("bot", `Error: ${response.status}`);
        }
    } catch (error) {
        appendMessage("bot", `Error: ${error.message}`);
    }
}
