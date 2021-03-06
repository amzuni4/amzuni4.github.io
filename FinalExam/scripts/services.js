   function CreateTableFromJSON() {
        var myTable = [
            {
                "Repairs": "Tire Replacement",
                "Category": "Maintainence",
                "Price": "$125.60"
            },
             {
                "Repairs": "Chain Cleaning",
                "Category": "Maintainence",
                "Price": "$25.60"
            },
             {
                "Repairs": "Wheel Alignment",
                "Category": "Maintainence",
                "Price": "$95.60"
            },
            
             {
                "Repairs": "Shifter Adjustment",
                "Category": "Maintainence",
                "Price": "$125.60"
            },
             {
                "Repairs": "Complete Bicycle Overhaul",
                "Category": "Maintainence",
                "Price": "$225.60"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
      
        var col = [];
        for (var i = 0; i < myTable.length; i++) {
            for (var key in myTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myTable[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }











    
    
    
    
