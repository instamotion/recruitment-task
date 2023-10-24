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

- Use functional components
- Use [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) to structure your components 
- Pages should be responsive (Desktop/Tablet/Mobile)
- Pages should have highest possible score in PageSpeed Insights
- Utilise browser caching or any other caching strategy
- Any other page optimisations are welcomed
- [Create React App](https://github.com/facebook/create-react-app) or [Next.js](https://nextjs.org/) should be used for frontend application
- Use TypeScript for your projects
- Use best practices for code structure
- Make sure your code is well tested
- Provide documentation with step by step on how to run the project locally

## Extracting the data

You can use this API [here](https://instamotion.wiremockapi.cloud/search) to seed or load the vehicle data. Make sure you use enough data, to be able to:

- implement lazy loading of vehicle tiles on listing page
- filtering is working and applicable

### Useful resources

- [Create React App](https://github.com/facebook/create-react-app)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Responsive web design](https://en.wikipedia.org/wiki/Responsive_web_design)
