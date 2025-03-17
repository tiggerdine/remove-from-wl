if (window.location.href.includes("playlist?list=WL")) {
    var contents = document.getElementById("contents");
    // TODO Wait for containers to exist
    // TODO Breaks when sorting manually
    var indexContainers = contents.querySelectorAll('[id=index-container]');
    indexContainers.forEach((ic, i) => {
        const div = document.createElement("div");
        div.style.fontSize = "large";
        div.style.padding = "6px";
        div.style.cursor = "pointer";
        div.onclick = () => remove(i);
        div.textContent = "❌";
        ic.replaceChildren(div);
    });
}

function remove(index) {
    var contents = document.getElementById("contents");
    var buttons = contents.querySelectorAll("button[aria-label='Action menu']");
    buttons[index].click();
    // TODO Wait for span to exist instead of sleeping
    sleep(100).then(() => {
        Array.from(document.querySelectorAll("span"))
            .find(s => s.textContent.includes("Remove"))
            .click();
    })
}

function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
