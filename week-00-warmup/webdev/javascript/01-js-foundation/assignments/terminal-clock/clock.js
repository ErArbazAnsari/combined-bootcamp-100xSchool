// Terminal Clock with 2-digit milliseconds

function formatTime(ms) {
    const milli = Math.floor((ms % 1000) / 10); // 2 digits
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        "." +
        String(milli).padStart(2, "0")
    );
}

function startClock() {
    console.clear();
    const startTime = Date.now();

    setInterval(() => {
        const now = new Date();
        const elapsed = Date.now() - startTime;

        // Clear current line and rewrite
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);

        process.stdout.write(
            `🕒 ${now.toDateString()}  |  ${formatTime(elapsed)}`
        );
    }, 50);
}

// Graceful exit (Ctrl + C)
process.on("SIGINT", () => {
    console.log("\nClock stopped. Bye 👋");
    process.exit(0);
});

startClock();
