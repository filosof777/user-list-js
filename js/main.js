let elList = document.querySelector('.list')

fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(data => {
    let count = 1
    data.data.forEach(item => {

      elList.innerHTML += `
      <li class="item">
        <div class="user-blog">
          <img class="user-blog__img" src="https://reqres.in/img/faces/${count}-image.jpg" alt=""/>
          <div class="user-blog__desc">
            <p class="user-blog__name">${item.first_name}</p>
            <p class="user-blog__fullname">${item.last_name} ${item.first_name}</p>
          </div>
          <button class="user-blog__btn"><i class="fal fa-times"></i></button>
        </div>
        <ul class="user-info__list">
          <li class="user-info__item">
            <p class="user-info__text">company</p>
            <p class="user-info__subtext">${item.first_name = item.first_name.toUpperCase()} LTD</p>
          </li>
          <li class="user-info__item">
            <p class="user-info__text">email</p>
            <p class="user-info__subtext">${item.email}</p>
          </li>
        </ul>
      </li>
      `
      let elItem = document.querySelectorAll('.item');
      let elModal = document.querySelector('.modals');

      elItem.forEach(items => {
        items.addEventListener('click', (e) => {
          console.log(e.target.id);
          elModal.innerHTML = `
          <div class="modal-inner">
          <i class="modal-close fal fa-times"></i>
            <li class="item">
              <div class="user-blog">
                <img class="user-blog__img" src="https://reqres.in/img/faces/${count}-image.jpg" alt=""/>
                <div class="user-blog__desc">
                  <p class="user-blog__name">${item.first_name}</p>
                  <p class="user-blog__fullname">${item.last_name} ${item.first_name}</p>
                </div>
              </div>
              <ul class="user-info__list">
                <li class="user-info__item">
                  <p class="user-info__text">company</p>
                  <p class="user-info__subtext">${item.first_name} LTD</p>
                </li>
                <li class="user-info__item">
                  <p class="user-info__text">email</p>
                  <p class="user-info__subtext">${item.email}</p>
                </li>
              </ul>
            </li>
          </div>

          `
          document.querySelector('.modal-close').addEventListener('click', () => {
            elModal.innerHTML = ''
          })
          document.querySelector('.modal-inner').addEventListener('click', (e) => {
            if (e.target.className == 'modal-inner') {
              elModal.innerHTML = ''
            }
          })
        })
      })
      let elDeleteBtn = document.querySelectorAll('.user-blog__btn');
      
      elDeleteBtn.forEach(item => {
        item.addEventListener('click', () => {
          item.parentElement.parentElement.style.display = 'none'
        })
      })
      count++
    })
  })
//   function addCompanyName(val) {
//     let comp = '';
//     fetch('json/user.json')
//     .then(res => res.json())
//     .then(data => {
//       data.company.forEach(item => {
//         comp = item.name
//         // let elComp = document.querySelector('.user-info__subtext')
//         // elComp.textContent = item.name
//       })
//     return comp    
//     })
//   }



// console.log(addCompanyName());