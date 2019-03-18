let userNameValue = document.getElementById("usernameEntered");
let userNameButton = document.getElementById("submitUserName");
let commitBox = document.getElementById("commit-box"); // the box on the left that will display commits


const getNumCommits = (username) => {
    return fetch(url + username + "/events/public", {headers: {'Authorization': 'token' + gitToken}})
        .then(data => {
            return data.json();
        })
        .then((data) => {
            // console.log(data);  // remove this to see all the data received back.
            return data.filter((event) => {
                return event.type === "PushEvent";
            })
        })
        .then((data) => {
            let counter = 0; // to begin counting commits
            data.forEach(function (element) {
                let commitInfo = element.payload.commits;
                counter += commitInfo.length;
            });
            return counter; // or console.log the counter
        })

};



userNameButton.addEventListener("click", function() {

    getNumCommits(userNameValue.value);

    results = commitBox.innerText;

});