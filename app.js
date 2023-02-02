
// Endpoint for Wikipedia Search Results
// let url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=minimalism&origin=*";

// Endpoint for Parsing a Wikipedia Page
// let url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=minimalism&origin=*";

let title = [];
let relatedTopics = [];
let resources = [];

let coverImage = document.querySelector(".coverImage");
let artDesignPeriodHeaderElement = document.getElementById("artDesignPeriodHeader");

// arts_and_crafts_movement

// let artDesignMovements = ["art_nouveau", "international_typographic_style", "minimalism"];

// let url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=International_Typographic_Style&origin=*";


// let url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${artDesignMovements[0]}&origin=*`;


function resetRelatedTopicListItems() {
    let itemsToDelete = document.querySelectorAll(".relatedTopicListItem");

    function deleteItems(item) {
        item.remove();
    }

    itemsToDelete.forEach(deleteItems);

    title = [];
    relatedTopics = [];
    resources = [];
}


let swissUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=International_Typographic_Style&origin=*";
let minimalismUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=minimalism&origin=*";
let postmodernismUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=postmodernism&origin=*";

/////////////////////// Swiss Type ///////////////////////////
//////////////////////////////////////////////////////////////

function getSwissPage() {
    coverImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/87/1959_-_Gewerbemuseum_Basel_-_Alte_und_neue_Formen_in_Japan.jpg")
    resetRelatedTopicListItems()
    fetch(swissUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data.parse.externallinks[0]); // Explore Random Resource
            console.log(data);
            title.push(data.parse.title); //Title

            for (let i = 0; i < 20; i++) {
                relatedTopics.push(data.parse.links[i]['*']); // Related Topics
                resources.push(data.parse.externallinks[i])
            }

            // function randomResource
            let randomNumber = Math.floor((Math.random() * 20) + 1);
            let randomResourceButtonElement = document.getElementById("randomResourceButton");
            randomResourceButtonElement.setAttribute("href", resources[randomNumber]);

            // function artDesignPeriodButton
            let artDesignPeriodButtonElement = document.getElementById("artDesignPeriodButton");
            artDesignPeriodButtonElement.setAttribute("href", `https://en.wikipedia.org/wiki/${title[0]}`);


            // function createRelatedTopicListItems
            for (let i = 0; i < relatedTopics.length; i++) {
                let relatedTopicListItem = document.createElement("li");
                relatedTopicListItem.innerHTML = relatedTopics[i];
                relatedTopicListItem.setAttribute("class", "relatedTopicListItem");
                document.getElementById("relatedTopicsList").appendChild(relatedTopicListItem);
            }

            artDesignPeriodHeaderElement.innerHTML = title[0]
        })

}



/////////////////////    Minimalism    ////////////////////////////////
///////////////////////////////////////////////////////////////////////

function getMinimalismPage() {
    coverImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9b/RyoanJi-Dry_garden.jpg")
    resetRelatedTopicListItems()
    fetch(minimalismUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data.parse.externallinks[0]); // Explore Random Resource
            console.log(data);
            title.push(data.parse.title); //Title

            for (let i = 0; i < 20; i++) {
                relatedTopics.push(data.parse.links[i]['*']); // Related Topics
                resources.push(data.parse.externallinks[i])
            }

            // function randomResource
            let randomNumber = Math.floor((Math.random() * 20) + 1);
            let randomResourceButtonElement = document.getElementById("randomResourceButton");
            randomResourceButtonElement.setAttribute("href", resources[randomNumber]);

            // function artDesignPeriodButton
            let artDesignPeriodButtonElement = document.getElementById("artDesignPeriodButton");
            artDesignPeriodButtonElement.setAttribute("href", `https://en.wikipedia.org/wiki/${title[0]}`);


            // function createRelatedTopicListItems
            for (let i = 0; i < relatedTopics.length; i++) {
                let relatedTopicListItem = document.createElement("li");
                relatedTopicListItem.innerHTML = relatedTopics[i];
                relatedTopicListItem.setAttribute("class", "relatedTopicListItem");
                document.getElementById("relatedTopicsList").appendChild(relatedTopicListItem);
            }

            artDesignPeriodHeaderElement.innerHTML = title[0]

        })

}

/////////////////////    Postmodernism    /////////////////////////////
///////////////////////////////////////////////////////////////////////

function getPostmodernismPage() {
    coverImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/de/MIT_Campus.jpg")
    resetRelatedTopicListItems()
    fetch(postmodernismUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data.parse.externallinks[0]); // Explore Random Resource
            console.log(data);
            title.push(data.parse.title); //Title

            for (let i = 0; i < 20; i++) {
                relatedTopics.push(data.parse.links[i]['*']); // Related Topics
                resources.push(data.parse.externallinks[i])
            }

            // function randomResource
            let randomNumber = Math.floor((Math.random() * 20) + 1);
            let randomResourceButtonElement = document.getElementById("randomResourceButton");
            randomResourceButtonElement.setAttribute("href", resources[randomNumber]);

            // function artDesignPeriodButton
            let artDesignPeriodButtonElement = document.getElementById("artDesignPeriodButton");
            artDesignPeriodButtonElement.setAttribute("href", `https://en.wikipedia.org/wiki/${title[0]}`);


            // function createRelatedTopicListItems
            for (let i = 0; i < relatedTopics.length; i++) {
                let relatedTopicListItem = document.createElement("li");
                relatedTopicListItem.innerHTML = relatedTopics[i];
                relatedTopicListItem.setAttribute("class", "relatedTopicListItem");
                document.getElementById("relatedTopicsList").appendChild(relatedTopicListItem);
            }

            artDesignPeriodHeaderElement.innerHTML = title[0]

        })

}

getSwissPage()

////////////// Project Requirements ////////////////

// Use JavaScript to correctly structure the code for a web application:
// - Structure your application to be a SPA (single page application)
// - Make at least one HTTP request to a third-party server
// - Use either vanilla JS or jQuery to perform DOM manipulation
// - Listen for events and add interactivity based on user input

// Hosting
// - App must be hosted on either GitHub Pages or Heroku

//////////// Sources /////////////////////
// Split page in half (https://css-tricks.com/left-and-right/)
// Google Fonts
// Wikipedia API Documentation (https://www.mediawiki.org/w/api.php?action=help&modules=parse)
// Wikipedia for content info
// CodingTrain gave ideas on how to use the API and what I might use it for (https://youtu.be/RPz75gcHj18)
// Conversations with GA instructors David and Matt on getting this API working and avoiding the CORS error.