# Movie Search

A movie search replica using https://api.themoviedb.org/

## Tech Stack
  - React
  - Redux
  
### Libraries Used
  - Axios
  - Classnames
  - Jest (Testing)
  - Lodash
  - Material-UI
  - Moment
  - Query-string
  - React-infinite-scroll-component
  - Redux Saga (sideeffects handler)
  - Styled Components (CSS)
  
## Installation Guide
1. Clone the repository.
2. Install the NPM modules by using ```npm i``` in the directory of the cloned repo.
3. Start the project by using ```npm start```

Happy Searching!

## Features
 - Multi-search query results
    - Not transparent on the user, for people it hits the people result API instead of the multi query results.
 - Displays visual results as the user types
 - Infinite scrolling with the library imported
      - Alternative for a shorter solution without the external library and using a button to get the next results (not the modern experience with a button since           infinite scrolling is more popular)

 
 ### Future Features:
 - The details page of each results is short and should add the cast if I had enough time
 

## Screenshots

### Simple UI Search

![Screen Shot 2020-10-10 at 8 20 21 PM](https://user-images.githubusercontent.com/29897267/95667681-5a3d3680-0b37-11eb-9b08-ebd31fbf9252.png)

### Movie Search Results

Viewing the information using redux-logger and the UI to reflect the first data shown

![Screen Shot 2020-10-10 at 8 16 26 PM](https://user-images.githubusercontent.com/29897267/95667697-7f31a980-0b37-11eb-99d7-bd4724a2ac1a.png)

Drop down menu that shows it in the language if picked:

![Screen Shot 2020-10-10 at 8 33 02 PM](https://user-images.githubusercontent.com/29897267/95667724-ddf72300-0b37-11eb-8ea5-b51be6f85b7f.png)


### Person Search Results

![Screen Shot 2020-10-10 at 8 19 30 PM](https://user-images.githubusercontent.com/29897267/95667703-8e185c00-0b37-11eb-818f-5cbaf641d96c.png)
