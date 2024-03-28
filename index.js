fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(res => {


        return res.json();
    })
    .then(data => {



        const pdata = data
        console.log(pdata)
        let product_data = ""
        pdata.categories.map((category) => {












            category.category_products.map((product) => {

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
            })
            document.getElementById('products').innerHTML = product_data

        })


    })



function displayMen() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(res => {


            return res.json();
        })
        .then(data => {

            document.getElementById('products').innerHTML = ""

            const pdata = data
            console.log(pdata)
            let product_data = ""

            const filtercate = pdata.categories.filter(category => category.category_name === "Men")
            filtercate.map((category) => {

                console.log(category)



                category.category_products.map((product) => {
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
                })
                document.getElementById('products').innerHTML = product_data











            })

        })


}

function displayWomen() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(res => {


            return res.json();
        })
        .then(data => {

            document.getElementById('products').innerHTML = ""

            const pdata = data
            console.log(pdata)
            let product_data = ""

            const filtercate = pdata.categories.filter(category => category.category_name === "Women")
            filtercate.map((category) => {

                console.log(category)



                category.category_products.map((product) => {
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
                })
                document.getElementById('products').innerHTML = product_data











            })

        })


}

function displayChild() {


    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(res => {


            return res.json();
        })
        .then(data => {

            document.getElementById('products').innerHTML = ""

            const pdata = data
            console.log(pdata)
            let product_data = ""

            const filtercate = pdata.categories.filter(category => category.category_name === "Kids")
            filtercate.map((category) => {

                console.log(category)



                category.category_products.map((product) => {
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
                })
                document.getElementById('products').innerHTML = product_data











            })

        })



}