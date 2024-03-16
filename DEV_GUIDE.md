# Project Development Steps

## Basic Setup
- Set up basic structure, imports (`useState` and `items`)
- Create interface
- Establish state to handle the logic of the current page
- Implement state logic for determining how many items per page

## Pagination Logic
- Define a variable (`const`) to store `totalPages = items / itemsPerPage`
- Write a function to allow the user to change the current page
- Develop a function to handle selecting new values for `itemsPerPage`
- Manage items to be displayed at the current moment
  - Determine `startIndex` to identify the first item
  - Determine `endIndex` to identify the last item
  - Display `itemsDisplayed = items.slice(startIndex, endIndex)`

## User Interface
- Display the UI
- Create a select component that enables the user to select `itemsPerPage`
- Assign the `onChange` prop of this select to the function for selecting new values for `itemsPerPage`
- Render pagination buttons based on the length of `totalPages`
  - Render the array of buttons (`totalButtonsArr`)
  - Display the value of the index + 1 of `totalButtonsArr` inside each button
  - Assign the function for changing the current page to the `onClick` prop of each button

## Table Rendering
- Render the table inside a container (e.g., a `div`)
- Display the table heads (`thead`) with descriptions
- Render `tbody` and map `tr` inside it using the `itemsDisplayed`

## Conclusion
- Complete the project development

