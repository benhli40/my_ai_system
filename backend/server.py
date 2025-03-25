from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows frontend to communicate with backend

app = Flask(__name__)
CORS(app)  # Enable CORS

# AI response logic
def generate_response(user_message):
    user_message = user_message.lower()

    # Basic greeting responses
    if "hello" in user_message or "hi" in user_message:
        return "Hello! How can I assist you today?"
    elif "good morning" in user_message:
        return "Good morning! Hope you have a great day!"
    elif "good afternoon" in user_message:
        return "Good afternoon! What can I do for you?"
    elif "good evening" in user_message:
        return "Good evening! How’s your day going?"
    elif "how are you" in user_message:
        return "I'm just a bot, but I'm here to help! How are you?"
    else:
        return "I'm still learning! Ask me anything."

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    ai_response = generate_response(user_message)  # AI processes input
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True)
