# My Resume

Simple single-page app (SPA) built with plain React JS to serve as my online resume.

## Tech Stack

- [React 18](https://reactjs.org/) and [create-react-app](https://create-react-app.dev/)
- [Sass](https://sass-lang.com/) for styling
- Local `JSON` files for simple, separated data

## Included Features

- Functional components to make sections modular and scope styles
- `useState` hooks to initialize and set data variables
- `useEffect` hooks to update variable state on component render
- `fetch()` to make API calls to pull data into components
- Public `JSON` files to act as mock API endpoints
- `.map()` loops to iterate over content arrays
- `props` to pass data down from parent into child components
- Dynamic content using `{val}` text interpolation
- Dynamic HTML attributes using `attr={val}` notation
- Ternary operators to run `if/else` conditions when outputting HTML
- Optional chaining (`obj?.prop`) to prevent runtime errors during hydration
- Native browser lazy-loading of images using new `loading="lazy"` attribute
- Sass `_variables.scss` partial for global Sass variable definitions
- Sass `mixins` for style injection
- Mobile-first CSS media queries for responsive design
- Webfonts from Google Fonts

## By the way

I also made an [Angular version](https://github.com/ericbutler555/resume-ng) of this same resume if you're into that.
