# Content Updates

### _**We highly recommend you prepare your desired content changes and contact a [project maintainer](maintainers.md#primary-contacts) to perform the updates.**_

## Dynamic content includes:

- [Calendar Events](#calendar-events)
- [Advertisements](#advertisements)
- [Home Page Text](#home-page-text)
- [Curbside Items Data](#curbside-items-data)
- [Items Page Data](#items-page-data)
- [Learn Page Content](#learn-page-content)
- [Other Dynamic Content](#other-dynamic-content)

## Calendar Events

Instructions for updating calendar events will be added here.

## Advertisements

Instructions for updating advertisements will be added here.

## Home Page Text

Please contact a [project maintainer](maintainers.md#primary-contacts) to update the home page text.

## Curbside Items Data

Instructions for updating curbside items data will be added here.

## Items Page Data

Instructions for updating items page data will be added here.

## Learn Page Content

The Learn Page has several sections that you can update.

### Main Page Title and Subtitle

Go to: [data/learn/learnPageData.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/learnPageData.js)

- Change the `title` to update the main heading at the top
- Change the `subtitle` to update the text below the heading

### Introduction Section

Go to: [data/learn/learnIntroSection.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/learnIntroSection.js)

- Change the `title` to update the section heading
- Edit the `content` list - each line will show up as a separate paragraph

### Get Involved Section

Go to: [data/learn/getInvolvedData.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/getInvolvedData.js)

- Each card in this section has:
  - A title
  - An image (make sure to put new images in the public folder)
  - Image description for accessibility
  - A link that opens when clicked
  - Description text
  - Optional extra links with text and web addresses

### Recycling Tips

Go to: [data/learn/recyclingTips.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/recyclingTips.js)

- Each tip has two parts:
  - A category name (like 'batteries' or 'glass')
  - The tip text that shows up
- To add a new tip, add a new category and its text
- To change a tip, just change its text

### Educational Videos

Go to: [data/learn/learnVideos.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/learnVideos.js)

- To add videos:
  1. Get the video ID from YouTube (it's the part after "v=" in the video link)
  2. Add a new entry with:
     - The video title
     - The YouTube video ID
- The first two videos show up right away, others appear when clicking "More Videos"

### Educational Games

Go to: [data/learn/learnGamesData.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/learnGamesData.js)

- Each game needs:
  - A title
  - A picture (put it in the public folder first)
  - A link to play the game (leave empty if there's no link)

### Green Schools Challenge

Go to: [data/learn/greenSchoolsContent.js](https://github.com/skyler-hall/Recyclepediamdc/tree/main/data/learn/greenSchoolsContent.js)

- You can update:
  - The section title
  - The "Join" button link
  - The text paragraphs
  - The section image and its description

Remember: When adding new images, put them in the public folder first and use the same naming style as the existing images.

## Other Dynamic Content

For updating any other dynamic content not covered in the sections above, please contact one of our [project maintainers](maintainers.md#primary-contacts).
