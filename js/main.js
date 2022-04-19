const links = [
    {
        label: "Week 1 notes",
        url: "week01/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week02/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week03/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week04/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week05/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week05/index.html"
    },
    {
        label: "Week 6 notes",
        url: "week06/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week07/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week08/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week09/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    },
    {
        label: "Week 12 notes",
        url: "week12/index.html"
    },
    {
        label: "Week 13 notes",
        url: "week13/index.html"
    },
    {
        label: "Week 14 notes",
        url: "week14/index.html"
    },
]

var olist = document.getElementById("list");

for (let i=0; i < links.length; i++){
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    li.appendChild(a);
    olist.appendChild(li); 
}