
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


            const searchInput = document.getElementById("searchbar")

let disdata=''
            loaddata.categories.map((category) => {
                category.category_products.map((product) => {
                    

                    disdata += `
                           
                           
                            <div class="pdata"
                            style="margin:10px; background-color:white
                             text-center;  box-sizing: border-box;
                            box-shadow: 10px
                             15px 12px 10px gray;">

                  <div class="p-title" ">

                <h4>
                ${product.title}
                </h4>

                  </div>

                 <div class="prod-image">
                 <img src=${product.image} alt="product image" style="width:300px; height:300px; onject-fit:contain">
                 </div>
    
                  <div class="price">
              <p  style="text-align:center; font-weight:500;">
              Price:  ${product.price
                        }  INR
                    
                   
                    </p>
                  </div>

                <div>
                <button>Buy</button>
                <button class="cart-btn"> Add to Cart</button>

                </div>


                   </div>


                            `
                    


                })
                document.getElementById("products").innerHTML=disdata
            })
            



            button.forEach(button => {
                button.addEventListener("click", () => {
                    const selectedValue = button.getAttribute("data-value");



                    document.getElementById('products').innerHTML = ""




                    const filtercate = loaddata.categories.filter(category => category.category_name === selectedValue)
                    filtercate.map((category) => {
                        displaydata(category)

                    })



                })

            })


            let cart=[]

            const cartbtn = document.querySelectorAll(".cart-btn")
            
            cartbtn.forEach(btn => {
                btn.addEventListener("click", () => {
                    loaddata.categories.map((category) => {
                        category.filter((category) => {
                            
                        })
                    })
                })
            })







            function displaydata(category) {
                let p_data = ""
                

                category.category_products.map((product) => {


                    p_data += `
                           
                           
                            <div class="pdata"
                            style="margin:10px; background-color:white
                             text-center;  box-sizing: border-box;
                            box-shadow: 10px
                             15px 12px 10px gray;">

                  <div class="p-title" ">

                <h4>
                ${product.title}
                </h4>

                  </div>

                 <div class="prod-image">
                 <img src=${product.image} alt="product image" style="width:300px; height:300px; onject-fit:contain">
                 </div>
    
                  <div class="price">
              <p  style="text-align:center; font-weight:500;">
              Price:  ${product.price
                        }  INR
                    
                   
                    </p>
                  </div>

                <div>
                <button>Buy</button>
                <button class="cart-btn"> Add to Cart</button>

                </div>


                   </div>


                            `

                })
                document.getElementById("products").innerHTML = p_data


            }




            searchInput.addEventListener("input", () => {

                const selectedValue = searchInput.value.toLowerCase()

                document.getElementById('products').innerHTML = ""


                let loading = false


                if (loaddata.categories.filter(category => category.category_name === selectedValue)) {

                    const filtercate = loaddata.categories.filter(category => category.category_name.toLowerCase() === selectedValue)
                    filtercate.map((category) => {
                        displaydata(category)

                    })
                    loading = true

                }

                if (!loading) {

                    const vendorfilter = loaddata.categories.map((category) => {
                        category.category_products.filter(cat => selectedValue.includes(cat.title.toLowerCase()))
                    })


                }










            })





        }
    )



