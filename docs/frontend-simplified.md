# Simplified Frontend Task

## Application Requirements

### Listing page

- Create an application that will list the vehicles on initial load
  - limit the number of vehicles shown initially to fit the viewport size
  - upon scrolling it should load additional vehicles (lazy loading)
  - if parameters are passed in url, the filtering should be applied
- On the left side of the page there should be various filtering options
  - make
  - model
  - mileage (from/to)
  - power (from/to)
  - first registration
  - fuel
  - price (from/to)
  - gearbox
  - exterior colour
  - category
- Tile should contain:
  - image
  - make
  - model
  - mileage
  - first registration
  - fuel
  - power
  - consumption
  - co2

### Product page

- Clicking on the vehicle tile, it should open vehicle detail page
- Vehicle detail page should contain
  - vehicle details
  - gallery
  - page should have unique url
- Upon clicking on back button within the browser or going back to listing page (link), user should land at the same place where he left off on listing page

All elements on listing page, on the product tile and product detail page should be styled and placed according to you own judgement.

### General

- Pages should be responsive (Desktop/Tablet/Mobile)
- Pages should have highest possible score in PageSpeed Insights
- Utilise browser caching or any other caching strategy
- Any other page optimisations are welcomed
- [Create React App](https://github.com/facebook/create-react-app) should be used for frontend application
- use TypeScript for your projects
- use best practices for code structure
- make sure your code is well tested
- provide documentation with step by step on how to run the project locally

## Extracting the data

You can use this API [here](http://demo9481430.mockable.io/offers) to seed or load the vehicle data. Make sure you use enough data, to be able to:

- implement lazy loading of vehicle tiles on listing page
- filtering is working and applicable

### Useful resources

- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Responsive web design](https://en.wikipedia.org/wiki/Responsive_web_design)
