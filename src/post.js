import fetch from 'node-fetch';
import axios from 'axios'


let test = 7196;




fetch('http://localhost:4000/flights?date=2020-01-01', {})
.then(response => response.json())
.then(data => {
  for( let i in data )  {
    if(data[i].flightNumber == test) {

      console.log(data[i].origin.city)
      console.log(data[i].destination.city)
      console.log(data[i].destination.location.latitude)
      console.log(data[i].destination.location.longitude)
      
      let lat = data[i].destination.location.latitude.toString()
      let longitude = data[i].destination.location.longitude.toString()
      
      
      var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + longitude + '&radius=25000&&keyword=attraction&key=AIzaSyCuJK6_Jk59l3Az7tvuOpbSl470vfajqiQ',
        headers: { }
      };
      for(let i = 0; i < 10; i++) {
        axios(config)
        .then(function (response) {
          // edit here

          console.log(JSON.stringify(response.data.results[i].name) + '  ' + JSON.stringify(response.data.results[i].geometry.location.lat) + '    ' + JSON.stringify(response.data.results[i].geometry.location.lng));
        })
        
      }


      
    }
  }
})
.catch((error) => {
  console.error('Error:', error);
});

