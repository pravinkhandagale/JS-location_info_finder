const pincode = document.querySelector('#zipForm')
let outputInfo = document.querySelector('#output');
pincode.addEventListener('submit', runEvent);;

function runEvent(e){
  const zip = document.querySelector('.pincode').value;
    axios.get(`http://api.zippopotam.us/IN/${zip}`)
    .then(function (response){
     if(response.status == 200 ){
      response.data.places.forEach(place => {
        outputInfo.innerHTML = `
        <h4><strong>Country:</strong> ${response.data.country}</h4>
        <h5><strong>Place:</strong> ${place['place name']}</h5>
        <h5><strong>Longitude:</strong> ${place['longitude']}</h5>
        <h5><strong>Latitude:</strong> ${place['latitude']}</h5>
        `;
        console.log(response.data);
      })
     } else { 
        outputInfo.innerHTML = ``;
        // let output = '';
          // response.data.places.forEach(place => {
          //   outputInfo.innerHTML = `
          //   <h4><strong>Country:</strong> ${response.data.country}</h4>
          //   <h5><strong>Place:</strong> ${place['place name']}</h5>
          //   <h5><strong>Longitude:</strong> ${place['longitude']}</h5>
          //   <h5><strong>Latitude:</strong> ${place['latitude']}</h5>
          //   `;
          //   console.log(response.data);
          // })
      }
    })
    e.preventDefault();
}