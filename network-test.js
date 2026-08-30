document.addEventListener("DOMContentLoaded", () => {
    const hostName = window.location.hostname || "localhost";
    const portNumber = window.location.port || "default";
    const protocol = window.location.protocol.replace(":", "");
    const launchTime = new Date().toLocaleString();

    document.getElementById("hostName").textContent = hostName;
    document.getElementById("portNumber").textContent = portNumber;
    document.getElementById("protocol").textContent = protocol;
    document.getElementById("launchTime").textContent = launchTime;
});
