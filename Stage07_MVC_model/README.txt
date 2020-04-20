The game is improving, with ability to visit different planets and moons in
our solar system and have the view screen image change accordingly.  There's
even a nice space flight transition, showing a starfield for a few seconds
before arriving, to give a sense of travel time.

Of course, there is still room for improvement.  Having an animated starfield
would be nice.  You may have also noticed that while the image changes, the
location shown in the Helm area does not.  Oops!  That's something we will
need to fix.

From this stage on in our game development, we're going to get deeper into
JavaScript programming, so it might be good to start with a plan.  Believe
it or not, we are not the world's first game developers, so we can learn
from those who have gone before us.

Here are a couple techniques we will employ:
* Verb-Noun Naming of functions
* Model-View-Controller to represent our universe

The first one is easy.  It just means we'll name any functions that perform
an action with a verb, saying what action is being done, and a noun, saying
what we're applying that action to.  We've already done it with our setImage
and preloadImages functions.  Set and preload being the actions (verbs) and
image or images as what we're applying the action to (nouns.)

The Model-View-Controller takes a little longer to grasp.  Wikipedia does a
good job of explaining.

https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller 

For our game, we can think of it like this:
* Model includes the solar system, the ship, the cargo, the money we have.
* View is how we see those things displayed on the screen: HTML, CSS.
* Controller is the made up of JavaScript functions like the one we wrote
  to change the image based on the player clicking a button.

So far, it's pretty clear that view is HTML & CSS, and controller is
Javascript.  But, what is the model?  The Wikipedia article cites a database
as containing the model.  We don't have a database.  No, we don't, but for
a small project like this, we can use JavaScript variables in place of the
database.

Mozilla Developer Network is an excellent, free to use reference for all
things surrounding HTML, CSS, and JavaScript.  And, they're the same people
who produce the Firefox web browser, so they know their stuff.  Check out
their introduction to JavaScript objects to get a start on understanding
what's coming up next.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

Don't worry if you don't grasp it all, just keep it handy as a reference.
We'll have plenty of examples in this stage of JavaScript object.  They
will make up the 'model' portion of our game.

Think of it like this:  Anything that is shown as a table in the mockup
will get a JavaScript object to hold its data.

Our captain's finances will get an object, the ship's cargo will get an
object, and so will the ship, to track its condition and location.  All
those different planets and moons we can visit in the helm section will
get an object to describe them as well.  We'll even throw in an object to
hold news headlines.

All of the work for this stage will be done in the JavaScript file and
there won't be anything exciting to show for it as far as on the screen.
But, it will form the foundation we need to start adding the interactive
components of gameplay.
