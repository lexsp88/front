'use strict'
var div_data = document.querySelector("#datacont");
var transactions = [];
fetch('./data.json')
    .then( data => data.json())
    .then( data => {
        transactions = data.transactions;
        console.log(transactions); 

        transactions.map((data, i)=>{
            let ide = document.createElement("p");
            ide.innerHTML= "id :" + data.id;
            div_data.appendChild(ide);
            let desc = document.createElement("p");
            desc.innerHTML= "desc :" + data.description;
            div_data.appendChild(desc);7
            let cant = document.createElement("p");
            cant.innerHTML= "cant :" + data.amount;
            div_data.appendChild(cant);
            let sta = document.createElement("p");
            sta.innerHTML= "sta :" + data.status;
            div_data.appendChild(sta);
            let hr = document.createElement("hr");
            div_data.appendChild(hr)
        })

    } );