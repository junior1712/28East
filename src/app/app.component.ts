import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'google-maps-app';
  map: google.maps.Map | undefined;
  marker: google.maps.Marker | undefined;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const loader = new Loader({
        apiKey: 'AIzaSyCKgTeWV0H9QSvNV2ecYtYHu7WyI4lzNMk',
        version: 'weekly',
        libraries: ['places'],
      });
  
      loader.load().then(() => {
        const mapOptions: google.maps.MapOptions = {
          center: { lat: 51.678418, lng: 7.809007 },
          zoom: 8,
        };
  
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
  
        const autocomplete = new google.maps.places.Autocomplete(document.getElementById('address') as HTMLInputElement);
  
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            const lat = place.geometry.location?.lat() || 0;
            const lng = place.geometry.location?.lng() || 0;
            this.updateMap(lat, lng);
          }
        });
  
        this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
          const latLng = event.latLng;
          if (latLng) {
            this.updateMap(latLng.lat(), latLng.lng());
          }
        });
      });
    }
  }
  

  updateMap(lat: number, lng: number) {
    if (this.marker) {
      this.marker.setPosition({ lat, lng });
    } else {
      this.marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        title: 'Location',
      });
    }

    this.map?.setCenter({ lat, lng });
  }
}
