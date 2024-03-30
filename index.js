
const url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"

fetch(url)
    .then(
        res => {
            return res.json()
        }
    )
    .then(
        res => {
            const loaddata = res;
console.log(loaddata)

            const button = document.querySelectorAll(".btn");

            let selectedValue;
            let product_data = ""


            loaddata.categories.map((category) => {

             return   category.category_products.map((product) => {

                 product_data +=
                     `
<div class="pdata" style="margin:10px; background-color:white text-center;  box-sizing: border-box;
  box-shadow: 10px 15px 12px 10px gray;">

                  <div class="p-title" ">
                  
                <h4>
                ${product.title}
                </h4>

                  </div>

    <div class="prod-image">
        <img src=${product.image} alt="product image" style="width:300px; height:300px; onject-fit:contain">
    </div>
    
    <div class="price">
        <p  style="text-align:center; font-weight:500;"> Price:  ${product.price
                     }  INR
                    
                   
                    </p>
    </div>


</div>

                `
            
                    
            
                document.getElementById('products').innerHTML = product_data
    
             })
            })





            button.forEach(button => {
                button.addEventListener("click", () => {
                    selectedValue = button.getAttribute("data-value");

                   let p_data=""

                    document.getElementById('products').innerHTML = ""

                    const filtercate = loaddata.categories.filter(category => category.category_name === selectedValue)
                    
                    filtercate.map((category) => {
                        category.category_products.map((product) =>{
                            

                            p_data += `
                           
                           
                            <div class="pdata" style="margin:10px; background-color:white text-center;  box-sizing: border-box;
  box-shadow: 10px 15px 12px 10px gray;">

                  <div class="p-title" ">

                <h4>
                ${product.title}
                </h4>

                  </div>

    <div class="prod-image">
        <img src=${product.image} alt="product image" style="width:300px; height:300px; onject-fit:contain">
    </div>
    
    <div class="price">
        <p  style="text-align:center; font-weight:500;"> Price:  ${product.price
                        }  INR
                    
                   
                    </p>
    </div>


</div>


                            `

                        })
                        document.getElementById("products").innerHTML=p_data

                    })

                })
            })
           
           



        }
    )