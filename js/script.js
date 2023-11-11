const container = document.querySelector('.container');
const image = ['Leanne Graham.jpg','Ervin Howell.jpg', 'Clementine Bauch.jpg','Patricia Lebsack.jpg','Chelsey Dietrich.jpg','Mrs. Dennis Schulist.jpg','Kurtis Weissnat.jpg','Nicholas Runolfsdottir V.jpg','Glenna Reichert.jpg','Clementina DuBuque.jpg',]


      fetch('https://jsonplaceholder.typicode.com/users')
        .then((r) => r.json())
        .then(usersData)
        .catch((err) => console.log(err));

      function usersData(response) {
        const htmlContent = response.map((user,index) => {
          return `
          <div class="box">
          <div class="image"><img src="./image/${image[index % image.length]}" alt="" /></div>
          <button type="button" id="btn"><i class="bi bi-chevron-right"></i></button>
            <ul class='card'>
              <li><h2>Name</h2> <span>${user.name}</span></li>
              <li><h2>E-mail</h2> <span>${user.email}</span></li>
              <li class="relative"> <h2>Address</h2> <i class="bi bi-chevron-down btn"></i>
                <ul class='address hidden'>
                  <li><h2>Street</h2><span>${user.address.street}</span></li>
                  <li><h2>Suite</h2><span>${user.address.suite}</span></li>
                  <li><h2>City</h2><span>${user.address.city}</span></li>
                </ul>
              </li>
              <li><h2>Phone</h2> <span>${user.phone}</span></li>
              <li><h2>Website</h2> <span>${user.website}</span></li>
              <li class="relative"><h2>Company</h2> <i class="bi bi-chevron-down btn1"></i>
                <ul class='company hidden1'>
                  <li><h2>Name</h2> <span>${user.company.name}</span></li>
                  <li><h2>Catch Phrase</h2> <span>${user.company.catchPhrase}</span></li>
                </ul>
              </li>
            </ul>
          </div>
            
          `;
        }).join('');
        container.innerHTML = htmlContent;

        const btn = document.querySelectorAll('.btn');
        const btn1 = document.querySelectorAll('.btn1')
        const ul = document.querySelectorAll('.address');
        const ul1 = document.querySelectorAll('.company');
        const button = document.querySelectorAll('#btn')
        const img = document.querySelectorAll('.image')

        btn.forEach((elem, index) => {
          elem.addEventListener('click', (e) => {
            const { tagName } = e.target;
            if (tagName === 'I') {
                if (!e.target.classList.contains('add')) {
                    e.target.classList.add('add')
                }else {
                    e.target.classList.remove('add')
                }
              ul.forEach((element, i) => {
                if (i !== index) {
                  element.classList.add('hidden');
                }
              });
              ul[index].classList.toggle('hidden');
            }
          });
        });
        btn1.forEach((elem,index) => {
            elem.addEventListener('click', (e) => {
                const { tagName } = e.target;
                if (tagName === 'I') {
                    if (!e.target.classList.contains('add')) {
                        e.target.classList.add('add')
                    }else {
                        e.target.classList.remove('add')
                    }
                  ul1.forEach((element, i) => {
                    if (i !== index) {
                      element.classList.add('hidden1');
                    }
                  });
                  
                  ul1[index].classList.toggle('hidden1');
                }
              });

        })

        button.forEach((elem,index) => {
          elem.addEventListener('click',(e) => {
            const {tagName} = e.target
            
            img.forEach((element, i) => {
              if(tagName === 'button') {
                
                if (i !== index) {
                  element.classList.add('active');
                }
              }
              })
              img[index].classList.toggle('active')
          })
        })
      }

      
