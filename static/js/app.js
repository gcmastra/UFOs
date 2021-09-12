// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // console.log("inside the buildTable function");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
// start with an empty object
filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    // note I recommend using property not .attr which is not an actual thing
    let filterId = changedElement.attr("id")

    // remove next line after debug
    console.log("Inside the updateFilters function = " + filterId + " + " + elementValue);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
    console.log(elementValue);
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
}
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
    

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  console.log("Inside filterTable function filters = ", filters);
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // my enhancement #1 - City State and Country are not mutually exclusive - 
  // its too easy to get a zero result if they don't match
  // so I think they should be modified to only use state if city is blank or only use country if city and state are blank
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  else if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  else if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  };
  // shape is a standalone filter but I would like to display a list of valid choices if i knew how
  // this would prevent misspelling or incorrect user input to result in zero search results
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
  // my enhancement - if any combination of search parameters results in zero hits, display a warning message
  // and display the entire table again 
  if (filteredData.length === 0) {
    console.log(" inside filterTable no results len = 0");
    // this next line works but its confusing unless I can clear the inputs before starting over
    // filteredData = tableData;

    // display a warning message in the text of the filter section
    console.log("Display a warning message to the console and to one of the tags on the page");
    // d3.select("#warning-msg").attr("text","Warning there were no results");
        
  }
  
  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
    
}
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
// console.log("test we are at the listener");
  
  
// Build the table when the page loads
buildTable(tableData);
