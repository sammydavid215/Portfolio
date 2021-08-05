//const naira = document.getElementById('naira');
//naira.addEventListener("input", nairaConverter);

//function nairaConverter(e){
        //console.log(naira);
        //let nairaC = e.target.value;
        //document.getElementById('dollars').value = nairaC / 493;
        //document.getElementById('pounds').value = nairaC / 710;
        //document.getElementById('Euro').value = nairaC / 595;
       // document.getElementById('dollars').value = nairaC / 493;
//}
//const userOne = new user('flexy', 56, 'oge@gmail.com');
//const userOne = new user('flexy', 56, 'oge@gmail.com');
const uiii = document.getElementById('users');
const ui = document.getElementById('users');
const ul = document.getElementById('users');
fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function(data) {
       let users= data.results;
       return users.map((user) => {
              //const card = document.createElement('card')
              const li = document.createElement('li');
              const ul = document.createElement('ul');
              const img = document.createElement('img');
              const p = document.createElement('p');
              let paragraph = li.appendChild(p);
              //let paragraph = ul.appendChild(p);
              //console.log(img)
              //console.log(data);
              uiii.appendChild(li);
              //ui.appendChild(li);
              ui.appendChild(li);
             //let paragraph = li.appendChild(p)
              let image =  li.appendChild(img);

              let firstname = user.name.first;
              let lasttname = user.name.last;
              let email = user.email;
              let city = user.location.city;
              let country = user.location.country;
              console.log(user.picture.large);
              //paragraph.innerHTML = firstname+ " " +lasttname;
              paragraph.innerHTML = `${firstname} ${lasttname} ${email} ${city} ${country}`;
              image.src = user.picture.large;

              //console.log(users)
              let card = `<div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${user.picture.large}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">${user.email}.</p>
                    <p class="card-text"><small class="text-muted">${user.location.city}</small></p>
                    <p class="card-text">${user.location.country}.</p>
                    </div>
                </div>
              </div>
            </div>`;
            main.innerHTML += card;

       });
       
       }
       
  //let candidates = data.result;
//return candidates.map(function(authur) 
.catch(function(error){
 console.log(error);
});
//fetch('https://randomuser.me/api/results=10').then((res)=>{
// return res.json();
//}).then((data => {console.log(data.result)}))