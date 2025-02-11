let menuItems = [
    ["https://www.thehilltopecho.org", "Home"],
    ["https://www.poptropica.com", "Portfolio"],
    ["https://www.pinterest.com", "About"],
    ["https://www.mcdonalds.com", "Services"],
    ["https://www.ohiouniversity.com", "Contact"]
];

document.addEventListener("DOMContentLoaded", () => {
    let menuElement = document.getElementById('menu');

    menuItems.forEach(([url, text]) => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');

        link.href = url;
        link.textContent = text;

        listItem.appendChild(link);
        menuElement.appendChild(listItem);
    });

    console.log("🚀 Menu Loaded!");
});
