const { default: axios } = require("axios");

const token = "bot6415688370:AAHcoiFx8BrhARwTWvvo27OYidiXhcInjwo";
const message = "ASU LO PENIPU KNTL"
const chatId = "6522883723";

const url = `https://api.telegram.org/${token}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response.statusText)
                    } else {
                        console.log("message failed!")
                    }
                })
        }

    } catch (e) {
        sendMessage();
    }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();

