import color from "chalk";
import readline from "readline";
import { base64encode, base64decode } from "nodejs-base64"

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
}

async function Angoka() {

    console.clear()

    console.log(color.red("\n" +
        " ▄▄▄       ███▄    █   ▄████  ▒█████   ██ ▄█▀▄▄▄      \n" +
        "▒████▄     ██ ▀█   █  ██▒ ▀█▒▒██▒  ██▒ ██▄█▒▒████▄    \n" +
        "▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▒██░  ██▒▓███▄░▒██  ▀█▄  \n" +
        "░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒██   ██░▓██ █▄░██▄▄▄▄██ \n" +
        " ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒░ ████▓▒░▒██▒ █▄▓█   ▓██▒\n" +
        " ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░ ▒░▒░▒░ ▒ ▒▒ ▓▒▒▒   ▓▒█░\n" +
        "  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░   ░ ▒ ▒░ ░ ░▒ ▒░ ▒   ▒▒ ░\n" +
        "  ░   ▒      ░   ░ ░ ░ ░   ░ ░ ░ ░ ▒  ░ ░░ ░  ░   ▒   \n" +
        "      ░  ░         ░       ░     ░ ░  ░  ░        ░  ░\n" +
        "                                                      \n" +
        "                                                      \n"))

    question(color.blue('Would you like to encrypt or decrypt your text: ')).then(async Results => {

        await Results

        if (Results === "encrypt".toLowerCase()) {
            question(color.blue('Please specify the text you wish to encrypt: ')).then(async Results2 => {
                let encrypted64 = base64encode(Results2)
                return console.log(encrypted64)
            })
        } else if (Results === "decrypt".toLowerCase()) {
            question(color.blue('Please specify the text you wish to to decrypt: ')).then(async Results3 => {
                let decrypted64 = base64decode(Results3)
                return console.log(decrypted64)
            })
        }
         else
    {
        console.log(color.red("Please specify a valid option. \nPlease try again."))
        await new Promise(r => setTimeout(r, 3000));
        return Angoka()
    }

})
}
Angoka()