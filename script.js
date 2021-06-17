'use strict';

//GLOBAL RANKING AUTOMATED FILL OF ARRAY
let rankdatastats = [
    { rank: "5", year: 2021},
    { rank: "6", year: 2020},
    { rank: "6", year: 2019},
    { rank: "15", year: 2018},
    { rank: "91", year: 2017},
    { rank: "210", year: 2016},
    { rank: "576", year: 2015},
    { rank: "1280", year: 2014},
];

//create(build) the head for the table
function generateTableHead(table) {
    let thead2 = table.createTHead();
    let row2 = thead2.insertRow();

    let th2 = document.createElement("th");
    th2.setAttribute('title', "Left click to sort Column");
    let text2 = document.createTextNode("Best Ranking");
    th2.appendChild(text2);
    row2.appendChild(th2);

    th2 = document.createElement("th");
    th2.setAttribute('title', "Left click to sort Column");
    text2 = document.createTextNode("Year");
    th2.appendChild(text2);
    row2.appendChild(th2);
}

//build the body of the table
function generateTable(table, data) {
    for (let element of data) {
        let row2 = table.insertRow();
        for (const key in element) {
            let cell2 = row2.insertCell();
            let text2 = document.createTextNode(element[key]);
            cell2.appendChild(text2);
        }
    }
}

// call the building functions for the table2(the second table with the rankings)
let table2 = document.getElementById('rankstats');
generateTable(table2, rankdatastats);
generateTableHead(table2);

//Button to add new rank COMING SOON!
//rankBtn = document.getElementById("addNewRank");


//MATCH STATISTICS!
//demo stats. Left them there to have stats to see if the sorting system works!

let datastats = [
    { t:"Australian Open", pos:"First Round", year:2019, op:"Matteo Berrettini", result:"WIN", 
       sets:[["You",6,6,6,7,"-"],["Matteo Berrettini",7,4,3,6,"-"]]}, 

    { t:"Australian Open", pos:"Second Round", year:2019, op:"Viktor Troicki", result:"WIN", 
    sets:[["You",6,2,6,7,"-"],["Viktor Troicki",3,6,2,5,"-"]]},

    { t:"Australian Open", pos:"Third Round", year:2019, op:"Nikoloz Basilashvili", result:"WIN", 
    sets:[["You",6,3,7,6,"-"],["Nikoloz Basilashvili",3,6,6,4,"-"]]},

    { t:"Australian Open", pos:"Fourth Round", year:2019, op:"Roger Federer", result:"WIN", 
    sets:[["You",6,7,7,7,"-"],["Roger Federer",7,6,5,6,"-"]]},

    { t:"Australian Open", pos:"Quarterfinals", year:2019, op:"Roberto Bautista Agut", result:"WIN", 
    sets:[["You",7,4,6,7,"-"],["Roberto Bautista Agut",5,6,4,6,"-"]]},

    { t:"Australian Open", pos:"Semifinals", year:2019, op:"Rafael Nadal", result:"LOSS", 
    sets:[["You",2,4,0,"-","-"],["Rafael Nadal",6,6,6,"-","-"]]},

    { t:"Australian Open", pos:"First Round", year:2021, op:"Gilles Simon", result:"WIN", 
    sets:[["You",6,6,6,"-","-"],["Gilles Simon",1,2,1,"-","-"]]},

    { t:"Australian Open", pos:"Second Round", year:2021, op:"Athanasios Kokkinakis", result:"WIN", 
    sets:[["You",6,6,6,6,6],["Athanasios Kokkinakis",7,4,1,7,4]]},

    { t:"Australian Open", pos:"Third Round", year:2021, op:"Mikael Ymer", result:"WIN", 
    sets:[["You",6,6,6,"-","-"],["Mikael Ymer",4,1,1,"-","-"]]},

    { t:"Australian Open", pos:"Fourth Round", year:2021, op:"Matteo Berrettini", result:"SKIPPED", 
    sets:[["You","-","-","-","-","-"],["Matteo Berrettini","-","-","-","-","-"]]},

    { t:"Australian Open", pos:"Quarterfinals", year:2021, op:"Rafael Nadal", result:"WIN", 
    sets:[["You",3,2,7,6,7],["Rafael Nadal",6,6,6,4,5]]},

    { t:"Australian Open", pos:"Semifinals", year:2021, op:"Daniil Medvedev", result:"LOSS", 
    sets:[["You",4,2,5,"-","-"],["Daniil Medvedev",6,6,7,"-","-"]]},

    { t:"French Open", pos:"First Round", year:2020, op:"Jaume Munar", result:"WIN", 
    sets:[["You",4,2,6,6,6],["Jaume Munar",6,6,1,4,4]]},

    { t:"French Open", pos:"Second Round", year:2020, op:"Pablo Cuevas", result:"WIN", 
    sets:[["You",6,6,6,"-","-"],["Pablo Cuevas",1,4,2,"-","-"]]},

    { t:"French Open", pos:"Third Round", year:2020, op:"Alja\u017E Bedene", result:"WIN", 
    sets:[["You",6,6,3,"-","-"],["Alja\u017E Bedene",1,2,1,"-","-"]]},

    { t:"French Open", pos:"Fourth Round", year:2020, op:"Grigor Dimitrov", result:"WIN", 
    sets:[["You",6,7,6,"-","-"],["Grigor Dimitrov",3,6,2,"-","-"]]},

    { t:"French Open", pos:"Quarterfinals", year:2020, op:"Andrey Rublev", result:"WIN", 
    sets:[["You",7,6,6,"-","-"],["Andrey Rublev",5,3,3,"-","-"]]},

    { t:"French Open", pos:"Semifinals", year:2020, op:"Novak Djokovic", result:"LOSS", 
    sets:[["You",3,2,7,6,1],["Novak Djokovic",6,6,5,4,6]]},

    { t:"Wimbledon", pos:"Fourth Round", year:2018, op:"John Isner", result:"LOSS", 
    sets:[["You",4,6,6,"-","-"],["John Isner",6,7,7,"-","-"]]},

    { t:"US Open", pos:"First Round", year:2020, op:"Albert Ramos Vi\u00F1olas", result:"WIN", 
    sets:[["You",6,6,6,"-","-"],["Albert Ramos Vi\u00F1olas",2,1,1,"-","-"]]},

    { t:"US Open", pos:"Second Round", year:2020, op:"Maxime Cressy", result:"WIN", 
    sets:[["You",7,6,6,"-","-"],["Maxime Cressy",6,3,4,"-","-"]]},

    { t:"US Open", pos:"Third Round", year:2020, op:"Borna \u0106ori\u0107", result:"LOSS", 
    sets:[["You",7,4,6,5,6],["Borna \u0106ori\u0107",6,6,4,7,7]]}
];

//save to local storage
let datastatsSaved = JSON.parse(localStorage.getItem('datastats'));

//only happens the very first time launching the app. 
if(datastatsSaved === null){
    localStorage.setItem('datastats', JSON.stringify(datastats));
    datastats = JSON.parse(localStorage.getItem('datastats'));
}else{
    datastats = datastatsSaved;
}

//build the table head of the main table (the big one, with the match data)
function generateTableHeadTwo(table) {
    let thead3 = table.createTHead();
    let row3 = thead3.insertRow();

    let th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    let text3 = document.createTextNode("Tournament");
    th3.appendChild(text3);
    row3.appendChild(th3);

    th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    text3 = document.createTextNode("Knockout Round");
    th3.appendChild(text3);
    row3.appendChild(th3);

    th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    text3 = document.createTextNode("Year");
    th3.appendChild(text3);
    row3.appendChild(th3);

    th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    text3 = document.createTextNode("Opponent");
    th3.appendChild(text3);
    row3.appendChild(th3);

    th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    text3 = document.createTextNode("Result");
    th3.appendChild(text3);
    row3.appendChild(th3);

    th3 = document.createElement("th");
    th3.setAttribute('title', "Right click to open show/hide menu\nLeft click to sort column");
    text3 = document.createTextNode("Match Sets");
    th3.appendChild(text3);
    row3.appendChild(th3);
}

//I literally build the body of the main table (the big one, with the match data)
function generateTableTwo(table, data) {
    for (let element of data) {
        let row3 = table.insertRow();
        let countcolumn = 0; // count until the sixth column(because I will build a table inside!)
        for (const key in element) {
            countcolumn++;
            let cell3 = row3.insertCell();
            if(countcolumn==6){
                //create a table to put the data of the match sets (based of the HTML before I deleted it)
                let settable = document.createElement("TABLE");
                settable.classList.add('match-sets'); //class it had in the first homework

                //first row of the ARRAY in "Match Sets"
                let i = 0; //counts the number of data in the match sets. See 'sets' in datastats array object.

                let tr = document.createElement("tr"); //first row goes to the user's score!
                
                // I put that class here so in the sorting of the array it will not take these rows into 
                //consideration and mess up the whole array
                tr.classList.add('dataSetsTr'); 

                while( i < 6){
                    
                    let td = document.createElement("td");
                    td.classList.add('dataSets'); //for CSS decoration (based of the HTML before I deleted it)
                    tr.appendChild(td);
                    let text = document.createTextNode(element.sets[0][i]);
                    td.appendChild(text);
                    settable.appendChild(tr);

                    // let rownew = settable.insertRow();
                    // let cellnew = rownew.insertCell();
                    // let textnew = document.createTextNode(element[key]);
                    // cellnew.appendChild(textnew);
                    i++;
                }

                //second row of the ARRAY in "Δεδομένα των sets" 
                i = 0;  //count again for the second array in the 'sets' in datastats
                let tr2 = document.createElement("tr"); // second row goes to... opponent score!
                tr2.classList.add('dataSetsTr');
                while( i < 6){
                    
                    let td = document.createElement("td");
                    td.classList.add('dataSets');
                    tr2.appendChild(td);
                    let text = document.createTextNode(element.sets[1][i]);
                    td.appendChild(text);
                    settable.appendChild(tr2);
                    i++;
                }

                cell3.appendChild(settable);

            }else{
                //for the first five columns
                let text3 = document.createTextNode(element[key]);
                cell3.appendChild(text3);
            }
        }
    }
}

//call the building functions to create the main table
let table3 = document.getElementById('tablestats'); //same as the var "table" 
generateTableTwo(table3, datastats);
generateTableHeadTwo(table3);



//SORT ARRAYS OF WEBPAGE

/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending order
 */
 function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];

    //careful not to take the rows of the "match sets" array!
    const rows = Array.from(tBody.querySelectorAll("tr:not(.dataSetsTr)"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        if (!isNaN(aColText) && !isNaN(bColText)) {
            return dirModifier*(aColText - bColText);
        }

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});



//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Data to keep automated:
// age 
// wins / losses 
// Current Global Ranking (cgr)
let today;
let nowyear;
let birthyear;
let age = 0;

const registerAge = () => {
    //Year we have now
    today = new Date();
    nowyear = parseInt(today.getFullYear());
    //His/Her birth year
    birthyear = parseInt(document.getElementById("infobyear").innerHTML);
    //His/Her age
    age = nowyear - birthyear;
    //Put it next to birthdate
    document.getElementById('age').innerHTML = age;
}

const registerCgr = () => {
    // Last added info on the player
    let cgr = "0";
    let counter2 = 0;

    while( counter2 < rankdatastats.length){
        if(rankdatastats[counter2].year === nowyear){
            cgr = rankdatastats[counter2].rank;
            break;
        }
        counter2++;
    }

    document.getElementById('currentrank').innerHTML = cgr;
}

const registerWinLoss = () => {
    //Wins and Losses (The "SKIPPED" result does not count for anything) -> "Skipped" stands for skipped match
    let wins = 0;
    let losses = 0;
    let counter = 0;

    //Find out how many wins and lossesthe user has based on the match-stats (Singles) array.
    while( counter < datastats.length){
        if(datastats[counter].result == "WIN"){
            wins++;
        }
        else if(datastats[counter].result == "LOSS"){
            losses++;
        } 
        counter++;
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
}

//Register win,loss,rank,age after reload
registerWinLoss();
registerAge();
registerCgr();


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//DROPDOWN FILTER MENU
let dropdownMenu = document.getElementById("filterDropdown");
const searchBar = document.getElementById("searchFilterInput");
let arrOfOpponents = [];
const opponentsList = document.getElementById('opponentsList');

//everytime the datastats array is updated I want the opponents array to update as well

const loadOpponents = (data) => {
    for (let element of data) {
        if(!arrOfOpponents.includes(element.op)){
            arrOfOpponents.push(element.op);
        }
    }
    //console.log(arrOfOpponents);
}

loadOpponents(datastats);


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
document.querySelector(".dropbtn").addEventListener('click', function (e) {
    dropdownMenu.classList.toggle("show");
});


searchBar.addEventListener('keyup', (e)=>{
    console.log(e.target.value);
    const searchString = e.target.value;
    const filteredOpponents = arrOfOpponents.filter( op => {
        return op.includes(searchString);
    });
    displayFilter(filteredOpponents);
    //console.log(filteredOpponents);
});

const displayFilter = (opponents) => {
    const htmlString = opponents.map((op)=>{
        return `<a href="#dropdown" class="opponent">${op}</a>`;
    }).join('');
    opponentsList.innerHTML = htmlString;
};

//when loading the page we want all the opponents to appear as an option in the dropdown menu
displayFilter(arrOfOpponents);


//hide rows that do not have the target-opponent in them
const updatedatastatsArray = (target) => {

    let indexesOfOtherOpponents = [];

    //find the other elements-rows of the array
    for( let j = 0; j < datastats.length; j++){ 
    
        if ( datastats[j].op != target) { 
            indexesOfOtherOpponents.push(j);
        }
    
    }

    for( let i = 0; i < indexesOfOtherOpponents.length; i++){ 
        for(let k = 0; k < numOfRows; k++){
            //finally hide all the rows except the ones that include our opponent-target
            if(indexesOfOtherOpponents[i] == rows[k].getAttribute("data-row-index")){
                rows[k].style.display = 'none';
                rows[k].setAttribute('data-shown', 'false');
            }
        }
    }
}

//show all the rows - reset the big table-array
const resetdatastatsArray = (target) => {

    let indexesOfOtherOpponents = [];

    //find the other elements-rows of the array
    for( let j = 0; j < datastats.length; j++){ 
    
        if ( datastats[j].op != target) { 
            indexesOfOtherOpponents.push(j);
        }
    
    }

    for( let i = 0; i < indexesOfOtherOpponents.length; i++){ 
        for(let k = 0; k < numOfRows; k++){
            //finally hide all the rows except the ones that include our opponent-target
            if(indexesOfOtherOpponents[i] == rows[k].getAttribute("data-row-index")){
                rows[k].style.display = '';
                rows[k].setAttribute('data-shown', 'true');
            }
        }
    }
}

//if you click on an opponent in the dropdown menu it will show (in the table) only the matches against him/her.
opponentsList.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.innerHTML);

    //RESET THE ARRAY AS BEFORE
    resetdatastatsArray();

    updatedatastatsArray(e.target.innerHTML);

});

const noFilterBtn = document.querySelector(".nofilter");

noFilterBtn.addEventListener('click', ()=>{
    resetdatastatsArray();
});



//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//MENU FOR HIDING/SHOWING COLUMNS
const menu = document.getElementById('menu');
let table = document.getElementById('tablestats');
let headers = [].slice.call(table.querySelectorAll('th'));
let cells = [].slice.call(table.querySelectorAll('th, td:not(.dataSets)'));

let numColumns = headers.length;
let thead = table.querySelector('thead');

let tBody = table.tBodies[0];
let rows = Array.from(tBody.querySelectorAll("tr:not(.dataSetsTr)"));

rows.forEach(function(row, index) {
    row.setAttribute('data-row-index', index);
    row.setAttribute('data-shown', 'true');
});
let numOfRows = rows.length;

// check for right click on the "title" row of the table (thead)
thead.addEventListener('contextmenu', function(e) {
    e.preventDefault();

    //calculate coordinates for the menu
    const x = e.clientX;
    const y = e.offsetY;

    //coordinates for the menu
    menu.style.top = `${y}px`;
    menu.style.left = `${x}px`;
    menu.classList.toggle('menuhidden');

    document.addEventListener('click', documentClickHandler);
});

// Hide the menu when clicking outside of it
const documentClickHandler = function(e) {

    //if you are not clicking inside the menu, then isClickedOutside = true!
    const isClickedOutside = !menu.contains(e.target);

    if (isClickedOutside) {
        // Hide the menu
        menu.classList.add('menuhidden');

        // Remove the event handler
        document.removeEventListener('click', documentClickHandler);
    }
};

//function that shows a hidden column with a certain index
const showColumn = function(index) {
    //Of all the cells in the table we filter those that have the index we chose and make them appear!
    cells
        .filter(function(cell) {
            return cell.getAttribute('data-column-index') === `${index}`;
        })
        .forEach(function(cell) {
            cell.style.display = '';
            cell.setAttribute('data-shown', 'true');
        });

    menu.querySelectorAll(`[type="checkbox"][disabled]`).forEach(function(checkbox) {
        checkbox.removeAttribute('disabled');
    });
};

//function that hides a hidden column with a certain index
const hideColumn = function(index) {
    cells
        .filter(function(cell) {
            return cell.getAttribute('data-column-index') === `${index}`;
        })
        .forEach(function(cell) {
            cell.style.display = 'none';
            cell.setAttribute('data-shown', 'false');
        });
    // How many columns are hidden. We count how many columns have hidden data.
    const numHiddenCols = headers
        .filter(function(th) {
            return th.getAttribute('data-shown') === 'false';
        })
        .length;
    if (numHiddenCols === numColumns - 1) {
        // There's only one column which isn't hidden yet
        // We won't allow the user to hide it
        const shownColumnIndex = thead.querySelector('[data-shown="true"]').getAttribute('data-column-index');

        const checkbox = menu.querySelector(`[type="checkbox"][data-column-index="${shownColumnIndex}"]`);
        checkbox.setAttribute('disabled', 'true');
    }
};

cells.forEach(function(cell, index) {
    cell.setAttribute('data-column-index', index % numColumns);
    cell.setAttribute('data-shown', 'true');
});

headers.forEach(function(th, index) {
    // Build the menu item
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('checked', 'true');
    checkbox.setAttribute('data-column-index', index);
    checkbox.style.marginRight = '.25rem';

    const text = document.createTextNode(th.textContent);

    label.appendChild(checkbox);
    label.appendChild(text);
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    li.appendChild(label);
    menu.appendChild(li);

    // Handle the event
    checkbox.addEventListener('change', function(e) {
        e.target.checked ? showColumn(index) : hideColumn(index);
        menu.classList.add('menuhidden');
    });
});




//--------------------------------------------------------------------------------------------------------
//-------------------------------------- INITIAL SETUP PAGE ----------------------------------------------
//--------------------------------------------------------------------------------------------------------

//Hide the main page. First we need info of the user to put in the local storage, so we can later recall the info,
// if the user returns to the app. It is for one user only but this will suffice as a registration process. 
let mainPage = document.getElementById("mainPage");
mainPage.style.display = 'none';

const readyRegister = document.getElementById("readyRegister");

const registerPage = document.getElementById("register");

//first time register your name and default stats. If not all the inputs are filled, ask for it!
const checkRegister = () => {
    if(document.getElementById("initName").value === "" || document.getElementById("initCountry").value === "" ||
    document.getElementById("initbday").value === "" || document.getElementById("initbmonth").value === "" ||
    document.getElementById("initbyear").value === "" || document.getElementById("initheight").value === "" ||
    document.getElementById("initplaystyle").value === "") {
        console.log("Try Again!");
        document.getElementById("checkblanks").innerHTML = "*Please fill all the blanks!";
    }else{
        saveToLocalStorage();
        loadFromLocalStorage();
        showMainPage();
    }

}

const saveToLocalStorage = () => {
    localStorage.setItem('name', document.getElementById("initName").value);
    localStorage.setItem('country', document.getElementById("initCountry").value);
    localStorage.setItem('bday', document.getElementById("initbday").value);
    localStorage.setItem('bmonth', document.getElementById("initbmonth").value);
    localStorage.setItem('byear', document.getElementById("initbyear").value);
    localStorage.setItem('height', document.getElementById("initheight").value);
    localStorage.setItem('playstyle', document.getElementById("initplaystyle").value);
}

const loadFromLocalStorage = () => {
    document.getElementById("editableName").innerHTML = localStorage.getItem('name');
    document.getElementById("infocountry").innerHTML = localStorage.getItem('country');
    document.getElementById("infobday").innerHTML = localStorage.getItem('bday');
    document.getElementById("infobmonth").innerHTML = localStorage.getItem('bmonth');
    document.getElementById("infobyear").innerHTML = localStorage.getItem('byear');
    document.getElementById("infoheight").innerHTML = localStorage.getItem('height');
    document.getElementById("infoplaystyle").innerHTML = localStorage.getItem('playstyle');
    registerWinLoss();
    registerAge();
    registerCgr();
}

const showMainPage = () => {
    mainPage.style.display = '';
    registerPage.style.display = 'none';
}

//read from localStorage if there is already a registered user
const loadrememberUser = () => {
    //console.log(localStorage.getItem('name'));
    if(localStorage.getItem('name') != null){
        loadFromLocalStorage();
        showMainPage();
    }
}

//Every time after reload or returning to the app it will remember the user and his stats
loadrememberUser();

readyRegister.addEventListener('click', () => {
    checkRegister();
});


//--------------------------------------------------------------------------------------------------------
//------------------------------------------ EDIT PAGE ---------------------------------------------------
//--------------------------------------------------------------------------------------------------------

//Hide the main page. This time, we need new data to add of the user to put in the local storage, so we can 
//later recall the data, if the user returns to the app. 

const editRegister = document.getElementById("editRegister");
const editCancel = document.getElementById("editCancel");
const editBtn = document.getElementById("editBTN");
const editPage = document.getElementById("editPage");
editPage.style.display = 'none';

//Check for blank inputs. If not all the inputs are filled, ask for it!
const checkForBlanks = () => {
    if(document.getElementById("editTour").value === "" || document.getElementById("editRound").value === "" ||
    document.getElementById("editYear").value === "" || document.getElementById("editOpponent").value === "" ||
    document.getElementById("editResult").value === "" || document.getElementById("editYourScore1").value === "" ||
    document.getElementById("editYourScore2").value === "" || document.getElementById("editYourScore3").value === "" ||
    document.getElementById("editYourScore4").value === "" || document.getElementById("editYourScore5").value === "" ||
    document.getElementById("editOpponentScore1").value === "" || document.getElementById("editOpponentScore2").value === "" ||
    document.getElementById("editOpponentScore3").value === "" || document.getElementById("editOpponentScore4").value === "" ||
    document.getElementById("editOpponentScore5").value === "") {
        console.log("Try Again!");
        document.getElementById("checkfilled").innerHTML = "*Please fill all the blanks!";
    }else{
        saveData();
        loadData();
        hideEditPage();
    }

}

const showEditPage = () => {
    editPage.style.display = '';
    mainPage.style.display = 'none';
    registerPage.style.display = 'none';
}

const hideEditPage = () => {
    editPage.style.display = 'none';
    mainPage.style.display = '';
    registerPage.style.display = 'none';
}

// add one new row in the array of Grand Slam Singles Result
editBtn.addEventListener('click', () => {
    showEditPage();
});

editRegister.addEventListener('click', () => {
    checkForBlanks();
});

editCancel.addEventListener('click', () => {
    hideEditPage();
});

const saveData = () => {
    
    let matchData = { 
        t: document.getElementById("editTour").value, 
        pos: document.getElementById("editRound").value, 
        year: document.getElementById("editYear").value, 
        op: document.getElementById("editOpponent").value, 
        result: document.getElementById("editResult").value,
    
        sets:[["You",document.getElementById("editYourScore1").value,
        document.getElementById("editYourScore2").value,
        document.getElementById("editYourScore3").value,
        document.getElementById("editYourScore4").value,
        document.getElementById("editYourScore5").value],
        [document.getElementById("editOpponent").value,
        document.getElementById("editOpponentScore1").value,
        document.getElementById("editOpponentScore2").value,
        document.getElementById("editOpponentScore3").value,
        document.getElementById("editOpponentScore4").value,
        document.getElementById("editOpponentScore5").value]]
    };

    //save to local storage
    let newdatastats = JSON.parse(localStorage.getItem('datastats'));
    //only happens the very first time launching the app. 
    if(newdatastats === null){
        localStorage.setItem('datastats', JSON.stringify(datastats));
        newdatastats = JSON.parse(localStorage.getItem('datastats'));
    }
    console.log(newdatastats);
    newdatastats.push(matchData);
    console.log(newdatastats);
    datastats = newdatastats;
    localStorage.setItem('datastats', JSON.stringify(datastats));

}

console.log(JSON.parse(localStorage.getItem('datastats')));

//load data to fill the new and updated array with the new row
const loadData = () => {
    let currentdatastats = JSON.parse(localStorage.getItem('datastats'));
    //Build the cells of the the new row!
    let len = currentdatastats.length;
    let row = table.insertRow();
    row.setAttribute('data-row-index', currentdatastats.length-1);
    row.setAttribute('data-shown',"true");

    //for the first five columns
    let cell = row.insertCell();
    cell.setAttribute('data-column-index', 0);
    cell.setAttribute('data-shown',"true");
    let text = document.createTextNode(currentdatastats[len-1].t);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.setAttribute('data-column-index', 1);
    cell.setAttribute('data-shown',"true");
    text = document.createTextNode(currentdatastats[len-1].pos);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.setAttribute('data-column-index', 2);
    cell.setAttribute('data-shown',"true");
    text = document.createTextNode(currentdatastats[len-1].year);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.setAttribute('data-column-index', 3);
    cell.setAttribute('data-shown',"true");
    text = document.createTextNode(currentdatastats[len-1].op);
    cell.appendChild(text);

    cell = row.insertCell();
    cell.setAttribute('data-column-index', 4);
    cell.setAttribute('data-shown',"true");
    text = document.createTextNode(currentdatastats[len-1].result);
    cell.appendChild(text);

    //last cell for the small data sets array
    cell = row.insertCell();
    cell.setAttribute('data-column-index', 5);
    cell.setAttribute('data-shown',"true");
    //create a table to put the data of the match sets (based of the HTML before I deleted it)
    let settable = document.createElement("TABLE");
    settable.classList.add('match-sets'); //class it had in the first homework
    let i = 0;
    let tr = document.createElement("tr"); //first row goes to the user's score!
    tr.classList.add('dataSetsTr');

    while( i < 6){
                    
        let td = document.createElement("td");
        td.classList.add('dataSets'); //for CSS decoration (based of the HTML before I deleted it)
        tr.appendChild(td);
        text = document.createTextNode(currentdatastats[len-1].sets[0][i]);
        td.appendChild(text);
        settable.appendChild(tr);
        i++;
    }

    //second row of the ARRAY in "Match Sets" 
    i = 0;  //count again for the second array in the 'sets' in datastats
    let tr2 = document.createElement("tr"); // second row goes to... opponent score!
    tr2.classList.add('dataSetsTr');
    while( i < 6){
        
        let td = document.createElement("td");
        td.classList.add('dataSets');
        tr2.appendChild(td);
        text = document.createTextNode(currentdatastats[len-1].sets[1][i]);
        td.appendChild(text);
        settable.appendChild(tr2);
        i++;
    }

    cell.appendChild(settable);

    //generateTableTwo(table,currentdatastats);
    //generateTableHeadTwo(table);



    //Must be updated!
    loadOpponents(currentdatastats);
    registerWinLoss();
    registerAge();
    registerCgr();
    console.log(table);
    cells = [].slice.call(table.querySelectorAll('th, td:not(.dataSets)'));
}

//localStorage.clear();










