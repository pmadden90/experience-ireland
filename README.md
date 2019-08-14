
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


cdproject2-paul-madden

<h2>Experience Ireland

I am building this website as a tourist website encouraging travel to Ireland.

<h2>UX</h2>
*Target audiences = tourists and potential tourists.

*To search for destinations that interest the user in Ireland.

*To view the locations of interesting places in Ireland on a map.

*To receive suggestions of places to visit or activities to try in Ireland.


A website for tourists to learn more about Ireland and encourage them to visit


Google Places API. 

Search bar for Google Map.

Google Maps

A 'Featured Places' section to showcase 'hidden gems' around Ireland.

Social sharing buttons - for tourists to share with friends and family.


Interaction Design - I've designed a simple single page webpage.

The webpage flows from searchbar to map and on to recommended places based on
the search results. 
The pictures featured on the page are all panoramic shots of Ireland
showcasing the landscapes tourists can see for themselves. 


I decided that I would create a visually striking header that contains changing
backgrounds and a searchbar that is large enough to be clear in purpose but 
suitably small enough to leave those background images to still be shown off.
Scrolling would be used, as necessary, to allow user move further down through
the page when neccessary. 
The Google Maps takes up the majority of it's row due to it's importance to the 
purpose of the webpage.

I have utilised a search bar and a checkbox in the search bar. 
The checkbox allows users to restrict their search to within the bounds of the 
map view.

Since the project contains a single webpage, the only navigation required is 
scrolling. 


The color scheme is consistent between white backgrounds and headers in emerald 
green. 

Font - I used 'Irish-Grover' and 'Permanent Markers' both Google Fonts. I felt Irish Grover was 
the perfect fit for 'Experience Ireland' - as it gives the page a quirky font that
castches the eye.
The logic behind 'Permanent Marker' was similar. 
I felt it was easy to read for the main bodies
of text. 

<h3>User Stories</h3>
As a user, I want search for destinations using a search bar on the homepage.

As a user, I want the map to refocus based on my searches or map location.

As a user, I would like recommendations of places to go.

As a user, I would like to book flights to my airport of choice.




The wireframe can be viewed on the link below.
https://www.figma.com/file/H1tJS5dMolulHoC4ggyj3PHE/ExperienceIreland.com-Paul-s-wireframe?node-id=2%3A78



Existing Features
Search Bar - allows users to input places they know in Ireland or allow 
autocomplete to help narrow down their searches


Map - map refocuses to area searched for. Map zooms in sufficiently for user after
search to show markers which can be clicked to find out more about each specific
location.

Recommendations - Originally, the plan was that after a specific place was searchd,
users would see recommended tourist locations for them to visit but this became 
a stumbling block in this particular project

Skyscanner Widget - Allows users to book flights if they so desire





<h3>Technologies Used</h3>
Bootstrap library was used to aid development with its grid system
Bootstrap 3.3.7

**jQuery was used to aid the implementation of Bootstrap 
Google Fonts has been the source of the 'Irish Grover' and 'Permanent Marker' as I
believe the fonts are both clear suitable for this project 



<h2>Testing</h2>

I have extensively tested the website on the following physical devices - Mobile - 
HTC Desire, Huawei P20 Lite, Huawei PSmart 2019 and **** while also testing across a number of other
sample devices through Chrome developer tools. 
Tablet - Lenovo Tab 10, Kindle Fire 7, iPad, Samsung Galaxy Tab 10 while also 
testing across a number of other sample devices through Chrome developer tools. 
Laptop/Desktop - Asus L403. 

 
<h3>Test</h3>
<h4>Map</h4>
Autocomplete locations appear in search bar when typed
Successful
Clicking on 'Restrict to view' restricts autocomplete results to map view
Successful
User can zoom in on map and click on markers to find out more
Successful

<h4>Photo Gallery</h4>
Each image is clickable to expand it in width
Successful

<h4>Skyscanner Widget</h4>
User can search for flights from their origin of choice to their destination of
choice

Across all devices, I was able to successfully complete each user story with the 
exception of the recommendations - I did not include this on the mobile version. 


<h5>To search for destinations using a search bar on the homepage.</h5>
This search bar works successfully. Users can search for anywhere or select a checkbox
to restrict the search suggestions to what can be seen in the map. 

<h5>For the map to refocus based on my searches or map location</h5>
When area searched for using Autocomplete suggestions, the map does indeed refocus 
and zoom in on the searched area. 

<h5>Receive recommendations of places to go.</h5>
Due to a number of difficulties I encountered trying to make this work, a very basic 
recommendations section was included but was not what was intended for this area

<h5>To book flights to airport of choice </h5>
To the right hand side of the map, users can input their origin and destination
airports. When search submitted, Skyscanner opens in new tab with the details of
user's search. 


<h4>Difficulties/Bugs</h4>
I encountered a number of difficulties throughout this project. 
Google Places API does not allow users to search for multiple place types from 
one map. This prevented me creating an extensive recommendations section that I 
would have been happy with. The Google Map occasionally does not appear and the 
page needs to be refreshed before it will appear. 
I have found this project frustrating as when seeking help on Slack or StackOverflow,
I would regularly ask questions and seek support but never received a reply. 
This in itself, prevented me from extending my understanding around the areas I 
needed help in. 


Deployment
Project has been deployed to GitHub Pages and is accessible here The process for
deployment was as follows:
Project pushed to GitHub repository
Navigated to Settings in relevant GitHub repository
Under GitHub Pages, selected relevant branch (master branch) and saved


Credits

Media

The photos used in this site were obtained from ...
The photos have been sourced from Wikipedia (under the creative commons licence) or 
Pixabay. 

Acknowledgements
I received inspiration for this project from the Google Places API documentation, 
the Tripadvisor page and Wes Bos 'Javascript 30 Day Challenge'.