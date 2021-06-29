function SummaryPosition(GridId, isVirtual) {
    //get the summary content
    var summary = document.getElementById(GridId).querySelectorAll(".e-summarycontent")[0];
    var content;
    if (!isVirtual) {
        //get the grid scrollable content of non virtualized grid
        content = document.getElementById(GridId).querySelectorAll(".e-content")[0];
        //place the summary content beneath the grid content
        content.insertBefore(summary, content.childNodes[0]);
    }
    else {
        //get the grid scrollable content of virtualied grid
        content = document.getElementById(GridId).getElementsByClassName("e-content")[0].querySelectorAll(".e-virtualtable")[0];
        //place the summary content beneath the grid content. 3 indicates the third child node of content div
        content.insertBefore(summary, content.childNodes[3]);
    }
}