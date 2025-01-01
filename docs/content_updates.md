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

Calendar events are added through Firebase, in the Firestore database </br>

Within the Firestore database, there is a collection titled "Events". Upon clicking on that collection, the user is able to add an event with the "Add document" option under the Events section.</br>

To format the event:

Use Auto-ID for the event's ID.

Add the following 3 fields using the "Add field" button and fill out the appropriate details as described below. Field types do not include the quotation marks and field names should be lowercase as shown.

-The first field is titled "date" with type timestamp. The value is the date and time of the event. Both the date and time are expected in the input, so both must be included.

-The second field is titled "description" with type string. The value is the text describing the event in paragraph format. 

-The third field is titled "name" with type string. The value is the name of the event.

Currently, only these 3 fields are supported and must be added in this order.

Once each field has been filled out, click "Save" to add it to the events list and it should be added to the calendar. To delete an event, click on it in the Events section, then click the options button in its details panel (represented as 3 dots), then select "Delete document".

Some sample events have been left in the database for reference.

## Advertisements

Instructions for updating advertisements will be added here shortly.

## Home Page Text

Please contact a [project maintainer](maintainers.md#primary-contacts) to update the home page text.

## Curbside Items Data

Instructions for updating curbside items data will be added here shortly.

For updating the title and subtitle, please contact a [project maintainer](maintainers.md#primary-contacts).

## Items Page Data

Instructions for updating items page data will be added here shortly.

For updating the title and subtitle, please contact a [project maintainer](maintainers.md#primary-contacts).

## Learn Page Content

Please contact a [project maintainer](maintainers.md#primary-contacts) to update the learn page content.

## Other Dynamic Content

For updating any other dynamic content not covered in the sections above, please contact one of our [project maintainers](maintainers.md#primary-contacts).
