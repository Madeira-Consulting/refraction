const { spawn } = require("child_process");

// Define the path to your pocketbase.exe file
const exePath = "./pocketbase/pocketbase.exe";

// Define the command-line arguments to pass to the pocketbase.exe file
const args = ["serve"];

// Spawn a child process to execute the pocketbase.exe file with the specified arguments
const child = spawn(exePath, args);

// Listen for output from the child process
child.stdout.on("data", (data) => {
    console.log(data.toString());
});

child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
