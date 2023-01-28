let searchBtn = document.querySelector("#searchLoc");
let searchFormat = document.querySelector("#dropdown-chosen").value;
let searchString = document.querySelector("#loc-search").value;


// searchFormat.addEventListener('change', '.dropdown-toggle', selectItem);

searchBtn.addEventListener('click',function(event) {   
    let searchParams = "search=" + searchString + "&format=" + searchFormat;
    location.replace("./search-results.html?"+ searchParams);
});