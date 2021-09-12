# UFOs

Student name: Christopher Mastrangelo 

## Overview of the Project
UFOs and strange sightings in the sky have been around for all of human history, not just since the invention of the airplane.  In the years since WWII especially when air travel became more common place, pilots of aircraft have reported things in the sky that could not be explained, and observers on the ground sighted objects of various sizes and shapes.
Numerous sightings from around the world present a formidable volume of data to be sorted and analyzed.  By using filters and dynamic tables, we can make it easier for users to display a subset of data based on search parameters and focus on the information relevant to their research. 

## How to Use the Web Page
When users arrive on the web page they see an introduction to the site in a frame near the top.  At the bottom is the data which is collected from multiple locations and dates in North America, with details of the sighting including the shape of the object and the duration of the sighting.  The comments field is variable length ad provides a more detailed text desctiption of what the eye witnesses reported.

Here is the appearance of the top banner and introduction.
![image](https://github.com/gcmastra/UFOs/blob/5dfd1683dba61086ebd8b389bd57825258ca8179/static/images/UFOs_image1.png)

In the bottom row, search parameters appear on the left frame, and the data in the right frame.  The default setting is to show all the data on the right, which is referred to as browse mode.  If the user enters a search parameter in one of the fields on the left, and hits enter, the data table in the right frame will change to show only matching rows.

For example if the user types "1/11/2010" in the "Enter Date" field and presses Enter, the data on the right will show only records with teh date equal to 1/11/2010 as shown in the diagram. 
![image](https://github.com/gcmastra/UFOs/blob/5dfd1683dba61086ebd8b389bd57825258ca8179/static/images/UFOs_image2.png)

More than one search parameter can be entered at a time, which will limit the results to only those records that match all of the filters.  However, entering too many search parameters can result in no rows being returned. In the event there are no search results, the user can clear the screen and start over two ways.
1. Delete any search parameters and click enter which will cause the search to be run with no filters
2. Click the words "UFO Sightings" in blue letters at the top of the page.  This reloads the page and clears the search filters.

## Summary

### Drawbacks
1. It is possible to enter search criteria which result in nothing returned.  For example it is possible to enter a city and a state that do not match, and there will be no resluts displayed. 
2. Allowing users to enter text into the city, state, and shape fields allows for the possibility of user error which will not match any records. 

### Recommendations for Future Development
1. Add keyword validation to the search parameter input fields.  Currently if a user types the name of city incorrectly, the search results will be null.  Recommend to add code to build a keyword list of all the valid city names and put them in a drop down list under the "City," "State", "Country" and "Shape" filters
2. Include more years in the data set to allow searching multiple years of data.

## Additional Information for the Grader
Here is a link to the functioning website on GitHub Pages<br><br>
<a href="https://gcmastra.github.io/UFOs/">https://gcmastra.github.io/UFOs/</a><br>

This was not required but I included it to show the site works.  The page is best displayed at width of 1500 pixels (not maximized).
