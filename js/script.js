const container = document.querySelector('.container')

fetch('https://dummyjson.com/products')
.then((result) => result.json(''))
.then(products)
.catch((err) => console.log(err))


function products(respons) {
  //  const htmlContent = respons.map(product => {
  //   return `
  //     <div class="box">
  //     <img src="${product.images[0]}" alt="" />
  //       <ul>
  //           <li>${product.title}</li>
  //           <li>${product.price}</li>
  //           <li>${product.rating}</li>
  //           <li>${product.stock}</li>
  //       </ul>
  //     </div>
  //   `
  //  })
  //  container.innerHTML = htmlContent
   console.log(respons);
}
