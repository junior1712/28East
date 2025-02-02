# Google Maps Web Application with Address Autocomplete

## Overview
This project implements a web application using Angular CLI version 19.1.4 and Google Maps. The key feature of this application is an interactive Google Map that allows users to search for a location via an **Address Autocomplete** feature. Upon selecting a location, a pin drops at the selected location, and the map is centered on it.

### Features:
- **Address Autocomplete**: Users can search for a location using the Google Places Autocomplete API.
- **Interactive Map**: The map is clickable, allowing users to drop a pin by clicking anywhere on the map.


---

## Getting Started

### Prerequisites
- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- Install Angular CLI (if not installed) and This project was generated using Angular CLI version 19.1.4
- A Google Maps API key with Places API enabled. [Get a Google API Key](https://developers.google.com/maps/gmp-get-started).

### Installation

1. **Clone the repository** (or download the code):
    ```bash
   git clone https://github.com/junior1712/28East.git
    cd 28East
    ```

2. **Install dependencies**:
    ```run
    npm install
    ```
  
    

4. **Set up your Google Maps API key**:
   - Replace the placeholder in `app.component.ts`:
     ```typescript
     apiKey: 'YOUR_GOOGLE_API_KEY',
     ```
   - Make sure to replace `'YOUR_GOOGLE_API_KEY'` with your actual API key.

5. **Run the application**:
    ```bash
    ng serve -o
    ```
    The application will be available at [http://localhost:4200](http://localhost:4200).

---

## File Structure

The application has the following basic structure:
src/ ├── app/ │ ├── app.component.html │ ├── app.component.ts │ ├── app.component.css │ └── app.module.ts ├── assets/ ├── environments/ ├── index.html ├── main.ts └── styles.css

- **app.component.ts**: Contains the logic for initializing the map, implementing the address autocomplete feature, handling map clicks, and displaying an info window with location details.
- **app.component.html**: Provides the HTML template with an input field for the autocomplete feature and a div for rendering the map.
- **app.module.ts**: Imports necessary modules, including the `GoogleMapsModule` for integrating the Google Maps API with Angular.

---

## How It Works

### 1. **Google Maps API Integration**
- The Google Maps API is loaded using the `@googlemaps/js-api-loader` package.
- The `places` library is included to allow address autocomplete functionality.

### 2. **Address Autocomplete**
- The input field with `id="address"` is linked to the `google.maps.places.Autocomplete` service.
- As the user types in the input field, suggestions appear. When a user selects an address, the map is updated with a marker at the location.

### 3. **Map Click Event**
- Users can also click on the map to drop a pin at the clicked location, and the map will center on that location.
  
### 4. **Marker **
- A marker is placed at the selected location (either from the autocomplete or map click).




