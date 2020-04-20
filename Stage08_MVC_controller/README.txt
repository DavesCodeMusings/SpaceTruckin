In the last stage we added several JavaScript variables to model our game's
universe and a single JavaScript function to update the viewscreen image
when a player selects a new location from the helm. It even shows a starfield
for a few seconds to give the impression of transit time.

But, there is still work to do.

For one thing, the port code in the helm still shows MRS (Mars) and UAC Cargo
Terminal even after we click a button for a different location. The current
date shown in the News section should indicate that time has passed as well.
In the old Taipan game, I think it was a month voyage regardless of which
port you chose.  We could get fancy and calculate distances between current
location and destination, but that's probably overkill.

In this stage, here's what we want to accomplish:
* Updating helm locaiton
* Updating in-game date

Both of these can be done similarly to the way we updated the viewscreen
image: find the HTML element using its ID and update one of its properties.
In the case of the image, it was the image 'src' tag that points to the file
name for the image. For updating text, we'll use a property called innerHTML
which is exactly what it sounds like.  It's the text between the starting
and ending tags (e.g. <p>innerHTML</p>)

We'll also need another model to describe months in a twelve month calendar.
Perviously we used objects, and arrays of objects, with names to access data.
This time, since it's a simple numeric sequence, we can use a basic array to
represent the months in a year. The thing to remember is that arrays start
at zero while months start at one, so January will be 0 and so on.
