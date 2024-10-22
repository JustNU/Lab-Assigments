let valuesArray = [0, 0, 0];
const button = document.getElementById("button_1");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomizeEntries = function () {
    const table = document.getElementById("table_1");
    const rows = table.getElementsByTagName("tr");

    // clear out values array
    valuesArray = [0, 0, 0];

    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].getElementsByTagName("td");

        columns[columns.length - 1].innerText = getRandomInt(3) + 1;
    }
}

const changeLineColor = function () {
    const table = document.getElementById("table_1");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].getElementsByTagName("td");

        // clear out class list
        rows[i].classList = [];

        switch (columns[columns.length - 1].innerText) {
            case "1":
                valuesArray[0]++;
                rows[i].classList.add("table-success");
                break;
            case "2":
                valuesArray[1]++;
                rows[i].classList.add("table-warning");
                break;
            case "3":
                valuesArray[2]++;
                rows[i].classList.add("table-danger");
        }
    }
}

const changeBadgeInnerText = function () {
    const badges = document.getElementsByClassName("badge");

    console.log(badges.length)

    for (let i = 0; i < valuesArray.length; i++) {
        switch (i) {
            case 0:
                badges[i].innerText = valuesArray[i];
                break;
            case 1:
                badges[i].innerText = valuesArray[i];
                break;
            case 2:
                badges[i].innerText = valuesArray[i];
                break;
        }
    }
}

button.addEventListener("click", randomizeEntries);
button.addEventListener("click", changeLineColor);
button.addEventListener("click", changeBadgeInnerText);