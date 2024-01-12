let res = fetch("https://restcountries.com/v2/all")
let div1 =  document.createElement('div')
function weather(X,Y){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${X}&lon=${Y}&appid=445233cd400d80862556379b7bffb69e`)
      .then(data=> data.json())
      .then(data => {
        div1.innerText = `${data.main.temp} temp in kelvin(°c + 273)`;
        let h1 = document.getElementById('h1')
        h1.append(div1)})
        alert("SEE THE TEMPERATURE IN TOP")
  }

res.then((data)=>data.json()).then((data1)=>{let Map = data1.map((value, index)=>{
    let div = document.createElement("div")
    div.innerHTML=`<div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card h-100">
      <h5 class="card-title">${value.name}</h5>
        <img src="${value.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Capital : ${value.capital}</p>
          <p class="card-text">Region : ${value.region}</p>
          <p class="card-text">Latlng : ${value.latlng}</p>
          <p class="card-text">Country Code: ${value.alpha3Code}</p>
          <button type="button" class="btn btn-outline-dark" style="color:white" onclick='weather(${value.latlng[0]},${value.latlng[1]})'>Click for Weather</button>
        </div>
      </div>
    </div>` 
    document.body.append(div)
    })
})