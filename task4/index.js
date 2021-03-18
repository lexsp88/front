
    var div_data = document.querySelector("#datacont");
    var transactions = [];
    fetch('./data.json')
        .then( resp => {
                if (resp.status  === 200){
                resp.json().then(data => {
                    transactions = data.transactions;
                    transactions.map((data, i)=>{
                        let ide = document.createElement("p");
                        ide.innerHTML= "id :" + data.id;
                        div_data.appendChild(ide);
                        let desc = document.createElement("p");
                        desc.innerHTML= "descripción :" + data.description;
                        div_data.appendChild(desc);7
                        let cant = document.createElement("p");
                        cant.innerHTML= "cantidad :" + data.amount;
                        div_data.appendChild(cant);
                        let sta = document.createElement("p");
                        sta.innerHTML= "status :" + data.status;
                        div_data.appendChild(sta);
                        let hr = document.createElement("hr");
                        div_data.appendChild(hr)
                    })
                }) 
            } else if (resp.status === 400){
                let ide = document.createElement("h2");
                        ide.innerHTML= "400 Bad Request";
                        div_data.appendChild(ide);
            } else if (resp.status === 422){
                let ide = document.createElement("h2");
                        ide.innerHTML= "422 Unprocessable Entity (en-US) (WebDAV)";
                        div_data.appendChild(ide);
            }
        })
            
            
            
            
            /*data => data.json())
        .then( data => {
            transactions = data.transactions;
            console.log(transactions); 

            transactions.map((data, i)=>{
                let ide = document.createElement("p");
                ide.innerHTML= "id :" + data.id;
                div_data.appendChild(ide);
                let desc = document.createElement("p");
                desc.innerHTML= "descripción :" + data.description;
                div_data.appendChild(desc);7
                let cant = document.createElement("p");
                cant.innerHTML= "cantidad :" + data.amount;
                div_data.appendChild(cant);
                let sta = document.createElement("p");
                sta.innerHTML= "status :" + data.status;
                div_data.appendChild(sta);
                let hr = document.createElement("hr");
                div_data.appendChild(hr)
            })
        })
*/