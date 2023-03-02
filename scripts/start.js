const gradient = require("gradient-string");
const inquirer = require("inquirer");
const concurrently = require("concurrently");

console.clear(); // clear the console

// Use the same gradient on every line
let logo = gradient("cyan", "green").multiline(
    [
        "                                          __                          ___               ",
        "                                         /\\ \\                       /'___\\              ",
        " _ __    __    ___ ___      __    ___ ___\\ \\ \\____     __   _ __   /\\ \\__/   ___ ___    ",
        "/\\`'__\\/'__`\\/' __` __`\\  /'__`\\/' __` __`\\ \\ '__`\\  /'__`\\/\\`'__\\ \\ \\ ,__\\/' __` __`\\  ",
        "\\ \\ \\//\\  __//\\ \\/\\ \\/\\ \\/\\  __//\\ \\/\\ \\/\\ \\ \\ \\L\\ \\/\\  __/\\ \\ \\/ __\\ \\ \\_//\\ \\/\\ \\/\\ \\ ",
        " \\ \\_\\\\ \\____\\ \\_\\ \\_\\ \\_\\ \\____\\ \\_\\ \\_\\ \\_\\ \\_,__/\\ \\____\\\\ \\_\\/\\_\\\\ \\_\\ \\ \\_\\ \\_\\ \\_\\",
        "  \\/_/ \\/____/\\/_/\\/_/\\/_/\\/____/\\/_/\\/_/\\/_/\\/___/  \\/____/ \\/_/\\/_/ \\/_/  \\/_/\\/_/\\/_/",
        "                                                                                        ",
        "                                                                                        ",
    ].join("\n")
);
console.log(logo);

//generate random intro prompt
const introPrompts = [
    "Let's get groovy!",
    "Choose your weapons!",
    "Feel the beat!",
    "Dance with me!",
];

const randomIntroPrompt =
    introPrompts[Math.floor(Math.random() * introPrompts.length)];

const nameToCommand = {
    "Next.JS": "next dev",
    PocketBase: "npm run pocketbase",
    "Middleware Service": "middleware",
    Storybook: "storybook",
};

inquirer
    .prompt([
        {
            type: "checkbox",
            name: "services",
            message: randomIntroPrompt,
            instruction: false,
            choices: [
                { name: "Next.JS", checked: true },
                { name: "PocketBase", checked: true },
                { name: "Middleware Service" },
                { name: "Storybook" },
                new inquirer.Separator(" "), // add separator
            ],
        },
    ])
    .then((answers) => {
        const selected = answers.services.filter((service) => service !== " ");

        if (selected.length > 0) {
            const commands = selected.map((service) => {
                return {
                    command: nameToCommand[service],
                    name: service,
                };
            });

            concurrently(commands).catch((error) => {
                console.error(error);
            });
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
