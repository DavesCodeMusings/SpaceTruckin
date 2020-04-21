In the last stage, we coded the functions, and a few more models, to allow
our player to fly their ship around the solar system. We created a JavaScript
function called updateLocation to do the work for us. Whenever the player
clicks one of the buttons in the Helm area of the game, updateLocation is
called to take care of a few tasks to make it appear as if the ship is flying
through the solar system.

One of the tasks that updateLocation takes care of is to call another
JavaScript function called updateNews that will change the date on the News
area to give the player a sense for the passage of time. So far, the news
headline has been stuck on "There's a sale on breakfast burritos." As
enticing as this sounds, it gets a little boring after the first few times.

In this stage of the game, we'll continue adding to the JavaScript file of
our game to add a number of different news headlines. We'll also introduce
a function to simulate a die roll. This will add an element of randomness
that will keep things interesting for our player. We'll start with
randomizing the new headlines, but the die roll will be useful in later
stages too.
