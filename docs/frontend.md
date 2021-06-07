# Frontend Task

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

### General

- Pages should be responsive (Desktop/Tablet/Mobile)
- Pages should have highest possible score in PageSpeed Insights
- Utilise browser caching or any other caching
- Any other page optimisations are welcomed
- [Next.js](https://nextjs.org/) should be used for frontend application
- use TypeScript for your projects
- use best practices for code structure
- make sure your code is well tested
- provide documentation with step by step on how to run the project locally

## Extracting the data

You can use our [GraphQL](https://im-graphql.dev.instamotion.com) from development environment to seed or extract the vehicle data into you database/backend. Make sure you extract enough data, to be able to:

- implement lazy loading of vehicle tiles on listing page
- filtering is working and applicable

Query:

```javascript
query getOffers($q: JSON!) {
  getOffers(q: $q) {
    records {
      make
      model
      mileage
      power
      firstRegistration
      fuel
      consumptionUnit
      consumptionCombined
      co2
      price
      image
      monthlyInstallment
      gearbox
      condition
      variant
      topOfferDiscount
      category
      exteriorColor
      cubicCapacity
      fourWheelDrive
      images
    }
  }
}
```

GraphQL variables:

```javascript
{
  "q": {
    "page-size": 27,
    "sort-by": "financing.monthlyInstallment::asc",
    "page": 1
  }
}
```

### Setting up development API

Setup backend server which will be responsible for delivering the data to the frontend application. Bonus points, if backend supports GraphQL. Feel free to use whatever you want for your backend.

### Useful resources

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Responsive web design](https://en.wikipedia.org/wiki/Responsive_web_design)
