## Github Search

### Single page application (SPA), which lists the repositories and organizations by search term

SPA uses:

1. State managemen: hooks useReducer(), useState(), createContext()
2. Types checking: npm module [prop-types](https://www.npmjs.com/package/prop-types)
3. Responsive layout created on CSS grid and scss
4. Search component with debounce input: npm module [react-debounce-input](https://www.npmjs.com/package/react-debounce-input)

Besides:

1. Previous requests are shown in the search component module, the maximum number of displayed requests is 5
2. Search history available after reloading the page

### How App works

![](./supplement/demo.gif)

[Сайт](https://asp-github-search.web.app/ 'Right click to open site in separate window')
