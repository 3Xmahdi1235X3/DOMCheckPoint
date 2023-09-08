      var arr = [{
            name: "airpods",
            qty: 2,
            price: 700,
            image: "./img/airpods.jpg",
            heart: false
        }, {
            name: "iphone 13",
            qty: 2,
            price: 2500,
            image: "./img/iphone.jpg",
            heart: false
        },{
            name: "smart watch",
            qty: 2,
            price: 250,
            image: "./img/smart.jpeg",
            heart: false
        }
        ];

        function updateTable() {
            var tableBody = document.querySelector("#table tbody");
            tableBody.innerHTML = "";
            var sum=document.getElementById('sum') ; 

            var s=0 ;
            arr.forEach(function (product, index) {
                s+=product.price * product.qty;
                var row = document.createElement("tr");
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price * product.qty }$</td>
                    <td style="width: 20%">
                        <div class="d-flex align-items-center justify-content-between">
                            <button class="btn btn-outline-success" onclick="incrementQty(${index})">+</button>
                            <span>${product.qty}</span>
                            <button class="btn btn-outline-success" onclick="decrementQty(${index})">-</button>
                        </div>
                    </td>
                    <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                    <td>
                        <button class="btn " onclick="deleteProduct(${index})"><i style="font-size:24px;color:#B01E28; " class="fa-solid fa-trash"></i></button>
                        <button class="btn " onclick="toggleHeart(${index})">${product.heart ? '<i style="font-size:24px;color:#B01E28;" class="fa-solid fa-heart"></i>' :'<i style="font-size:24px;" class="fa-regular fa-heart"></i>' }</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
            sum.innerHTML=s;
        }

        function incrementQty(index) {
            arr[index].qty++;
            updateTable();
        }

        function decrementQty(index) {
            if (arr[index].qty > 1) {
                arr[index].qty--;
                updateTable();
            }
        }

        function deleteProduct(index) {
            arr.splice(index, 1);
            updateTable();
        }

        function toggleHeart(index) {
            arr[index].heart = !arr[index].heart;
            updateTable();
        }

        updateTable();