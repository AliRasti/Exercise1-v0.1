function GetoutPut()
{
    var inputs = [],TextArea= [],table,tr,td;

    inputs = document.getElementsByTagName("input");
    TextArea = document.getElementsByTagName("textarea");
    table= document.getElementsByTagName("table")[0];

    tr = document.createElement("tr");

    for(var i=0;i<inputs.length;i++)
    {
        td = document.createElement("td");
        td.innerHTML = inputs[i].value;
        tr.appendChild(td);
    }
    for (var j=0;j<TextArea.length;j++)
    {
        td = document.createElement("td");
        td.innerHTML = TextArea[j].value;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}