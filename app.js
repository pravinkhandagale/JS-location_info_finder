const pincode = document.querySelector('#zipForm')
let outputInfo = document.querySelector('#output');
pincode.addEventListener('submit', runEvent);;

function runEvent(e){
  const zip = document.querySelector('.pincode').value;
    axios.get(`http://api.zippopotam.us/IN/${zip}`)
    .then(function (response) {
      console.log(response.data);
      if(response.status != 404){
        response.data.places.forEach(place => {
        outputInfo.style.display = 'block';
        outputInfo.style.background = '#adb2b8';
        outputInfo.innerHTML = `
          <h3 style="background-color:#016070; color:white; margin:-18px -10px 10px -10px; padding:13px">Location Info</h3>
          <h5><strong>Country:</strong> ${response.data.country}</h5>
          <h5><strong>State:</strong> ${place['state']}</h5>
          <h5><strong>Place:</strong> ${place['place name']}</h5>
          <h5><strong>Longitude:</strong> ${place['longitude']}</h5>
          <h5><strong>Latitude:</strong> ${place['latitude']}</h5>
          `;
        });
      }
    })
    .catch(function (error) {
      outputInfo.style.display = 'block';
      outputInfo.style.background = '#c90707';
      outputInfo.innerHTML = "<p style='color:#fff; font-size:20px; padding:9px'>Invaild Pincode, Please try again..</p>";
    });









    e.preventDefault();
}