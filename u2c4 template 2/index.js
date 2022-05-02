// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", matchSubmit);

function matchSubmit(){
    event.preventDefault();
    var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
    var matchObj = {
        matchNumber: document.querySelector("#matchNum").value,
        teamASelect:document.querySelector("#teamA").value,
        teamBSelect:document.querySelector("#teamB").value,
        matchDate : document.querySelector("#date").value,
        matchVenue : document.querySelector("#venue").value,
    };
    matchArr.push(matchObj);
    // console.log(matchArr);
    localStorage.setItem("schedule", JSON.stringify(matchArr));
}