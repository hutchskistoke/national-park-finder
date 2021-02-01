# Project Overview

## Project Name

National Park Finder

## Project Description

This will allow users to look up a National Park via a search bar and the app will return the park statistics and a photo. 

## API and Data Sample

https://developer.nps.gov/api/v1/parks?api_key=fxheInC78kFAXET9y492TAWBb706vN5yWmjyIfTb

``` JSON
{
            "id": "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
            "url": "https://www.nps.gov/yose/index.htm",
            "fullName": "Yosemite National Park",
            "parkCode": "yose",
            "description": "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
            "latitude": "37.84883288",
            "longitude": "-119.5571873",
            "latLong": "lat:37.84883288, long:-119.5571873",
           
            "states": "CA",
            "contacts": {
                "phoneNumbers": [
                    {
                        "phoneNumber": "209/372-0200",
                        "description": "",
                        "extension": "",
                        "type": "Voice"
                    }
                ],
                "emailAddresses": [
                    {
                        "description": "",
                        "emailAddress": "yose_web_manager@nps.gov"
                    }
                ]
            },
            "entranceFees": [
                {
                    "cost": "35.00",
                    "description": "This fee is valid for seven days.",
                    "title": "Non-commercial car, pickup truck, RV, or van with 15 or fewer passenger seats"
                },
                {
                    "cost": "30.00",
                    "description": "The fee is valid for seven days. Cost is per motorcycle (not per person).",
                    "title": "Motorcycle"
                },
                {
                    "cost": "20.00",
                    "description": "This fee is valid for seven days. People 15 years and younger are free. Cost is per person.",
                    "title": "Foot, bicycle, horse, or non-commercial bus or van with more than 15 passenger seats"
                },
                {
                    "cost": "25.00",
                    "description": "The fee is $25 plus $15 per person.",
                    "title": "Commercial Tour (sedan up to six seats)"
                },
             
            ],
            
            "fees": [],
            "directionsInfo": "You can drive to Yosemite year-round and enter via Highways 41, 140, and 120 from the west. Tioga Pass Entrance (via Highway 120 from the east) is closed from approximately November through late May or June. Hetch Hetchy is open all year but may close intermittently due to snow. Please note that GPS units do not always provide accurate directions to or within Yosemite.",
            "directionsUrl": "http://www.nps.gov/yose/planyourvisit/driving.htm",
            "operatingHours": [
                {
                    "exceptions": [
                        {
                            "exceptionHours": {
                                "wednesday": "8:00AM - 5:00PM",
                                "monday": "8:00AM - 5:00PM",
                                "thursday": "8:00AM - 5:00PM",
                                "sunday": "8:00AM - 5:00PM",
                                "tuesday": "8:00AM - 5:00PM",
                                "friday": "8:00AM - 5:00PM",
                                "saturday": "8:00AM - 5:00PM"
                            },
                            "startDate": "2020-12-07",
                            "name": "Regional Stay Home Order",
                            "endDate": "2021-01-31"
                        }
                    ],
                    "description": "Yosemite National Park is open 24 hours per day, 365 days per year. No reservation is required to enter the park.",
                    "standardHours": {
                        "wednesday": "All Day",
                        "monday": "All Day",
                        "thursday": "All Day",
                        "sunday": "All Day",
                        "tuesday": "All Day",
                        "friday": "All Day",
                        "saturday": "All Day"
                    },
                    "name": "Yosemite National Park"
                }
            ],
            "addresses": [],
            "images": [
                {
                    "credit": "NPS / Cindy Jacoby",
                    "title": "Yosemite Falls on a Winter Morning",
                    "altText": "Two tall waterfalls flowing down snow covered granite walls.",
                    "caption": "Yosemite Falls will sometimes only trickle at the end of summer, but wet winters can rejuvenate the flow.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C84CC4C-1DD8-B71B-0BE967E5E5D93F25.jpg"
                },
                {
                    "credit": "NPS / Cindy Jacoby",
                    "title": "Cathedral Peak and Lake in Autumn",
                    "altText": "A mountain reflecting in a lake.",
                    "caption": "Cathedral Peak is one of the most recognizable peaks in the Yosemite Wilderness.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C84C3C0-1DD8-B71B-0BFF90B64283C3D8.jpg"
                },
                {
                    "credit": "NPS / Bob Roney",
                    "title": "Rainbow over Half Dome",
                    "altText": "A rainbow over a mountain in the distance.",
                    "caption": "A hike up to Sentinel Dome rewards people with great views of the landscape around them.",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C84C6CF-1DD8-B71B-0B1C7CB883AA8FB1.jpg"
                },
                  
            ],
            "weatherInfo": "Yosemite National Park covers nearly 1,200 square miles (3,100 square km) in the Sierra Nevada, with elevations ranging from about 2,000 feet (600 m) to 13,000 ft (4,000 m). Yosemite receives 95% of its precipitation between October and May (and over 75% between November and March). Most of Yosemite is blanketed in snow from about November through May. (Yosemite Valley can be rainy or snowy in any given winter storm.)",
            "name": "Yosemite",
            "designation": "National Park"
        }
    ]
}
```

## Wireframes

[Wireframe](https://i.imgur.com/BljceaK.jpg)

### MVP/PostMVP

#### MVP 

- Axios call on NPS API
- Display results on page
- Include a photo of the Park
- Provide basic stats of the Park
- Clear previous results upon secondary search

#### PostMVP  

- A drop down menu of park entrance fees by vehicle
- When a vehicle is selected the fee is displayed below
- incorporate a map

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval | Complete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

[Priority Matrix](https://i.imgur.com/Hj9mZ0X.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial HTML setup | H | 3hrs| 1hr |  |
| Axios set up | H | 6hrs| 4hrs |  |
| Render results | H | 6hrs| 8hrs |  |
| Other JS | H | 6hrs| 6hrs |  |
| CSS for basic layout | M | 3hrs| 2hrs |  |
| CSS for results | M | 5hrs| 6hrs |  |
| Image placement | M | 3hrs| 2hrs |  |
| Media query | H | 3hrs| 3hrs |  |
| General Research | H | 6hrs| 3hrs |  |
| Debugging | H | 4hrs| 3hrs |  |
| Total | H | 45hrs| 38hrs |  |

## Code Snippet

    let check = document.querySelector('main').hasChildNodes()
    if (check !== true) {

      let errorMessage = `<h2 class='uhoh'>You must be lost...  Try your search again!</h2>`
      let uhoh = document.querySelector('main')
      uhoh.insertAdjacentHTML('afterbegin', errorMessage)
    }

    This is an error message that renders on the page if the user misspells a park name or looks for something not in this database. While it may be a simple few lines of code I had to find the right place for it which was challenging.

## Change Log

My post MVPs changed as I started working with the data more.  I realized adding a park fee drop down menu would have been tough with the way the data was presented in this API.  Instead I focused on other things, like randomizing the photos that pop up when the user searches, an error message, and linking to each parks website. 

