// write js code here corresponding to matches.

var matchArr = JSON.parse(localStorage.getItem("schedule"));
// console.log(matchArr);


displayData(matchArr)

var FavouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];


function displayData(data)
{
    data.forEach(function(elem)
    {
        var tr = document.createElement("tr");
        

        var td1 = document.createElement("td");
        td1.innerText= elem. matchNumber;
        var td2 = document.createElement("td");
        td2.innerText= elem.teamASelect;

        var td3 = document.createElement("td");
        td3.innerText= elem.teamBSelect;

        var td4 = document.createElement("td");
        td4.innerText= elem.matchDate;

        var td5 = document.createElement("td");
        td5.innerText= elem.matchVenue;

        var td6 = document.createElement("td");
        td6.innerText = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click" , function()
        {
            favouriteFunction(elem);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);

        
    });
   
}
function favouriteFunction(elem)
{
    console.log(elem);
    FavouriteArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(FavouriteArr));

}