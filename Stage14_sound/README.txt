Space Truckin's game play is in pretty good shape at this point. Players can
fly their ship, buy and sell cargo, put money in the bank, and now experience
the dangers of storms, asteroids, and robbers. Congratulations on making it
this far!

There are a few minor annoyances you may have discovered. If not, I'll list
them at the end under 'Bugs' and we'll fix them later. But for now, lets keep
enhancing the gameplay. We can do that with sound.

This stage will seem easy compared to the rest. All we ned to do is have the
game play a bit of intro music when it first loads. It's only a couple lines
of JavaScript, and if you are feeling ambitious, you can add more sounds to
other parts of the game. Maybe something for an asteroid hit, or the howl of
a solar storm. It's completely up to you.

For now, we'll keep things simple and just add music at the beginning. if
you've ever been to an arcade or any place with the old stand-up video game
consoles, you've heard them blasting out a short sound to get your attention.
We'll do the same.

The first thing to do is record the audio. You might be tempted to download
something from the internet, but if you're not careful, you may run into a
little something called copyright infringement, and that's no fun for anybody.

For this game, I've recorded an almost, but not quite version of the bass
riff from Deep Purple's classic "Space Truckin'". It should be close enough
to recognize, but different enough to keep me out of court.

I used an open-source audio program called Audacity to do the recording and
distortion effects. When it was done, I exported to an Ogg Vorbis file. It's
like an MP3, but the format is unencumbered by patents. I created a new
directory for the file called "audio". It was then just a matter of adding a
new JavaScript funtion to be hooked to the <body> tag's onload event inside
the HTML file.

And now for those nasty bugs.

If you've tested any of the versions so far, you might have had a problem
paying off your debt a time or two. There is a problem where the amount of
debt is rounded off on the screen, but not in the actual ficance.debt
variable that keeps track of it.

It's also possible to win the game while still carrying a hefty debt. This
should be fixed so that debt has to be paid first.

You may have also noticed the parentheses around the debt number only appear
after the first recalculation of finances. At the start of the game it's a
negative number. We might as well get rid of the parentheses and the minus
sign. Most people are smart enough to know that debt counts against your
total finances.

That brings up another point. The Finances Total on the screen really
serves no useful purpose. We might as well eliminate it.

Another annoyance, not really a bug, is the number of pop-up messages
thrown in the player's face. One, there's a lot of clicking to close them,
and two, they don't blend with the look and feel of the game. That's
something we'll need to find a fix for.

But, as stated before, we'll worry about these bugs in the next phase of
development.

The final bug, which does not always occur, is with the playing of the
audio file we're setting up in this phase.

Take a look at the screenshot called ScreenShotOfBrokenDreams.jpg and look
toward the bottom. This shows a JavaScript error where my Firefox browser
refused to play the intro riff for the game. This error is self-inflicted,
because I purposely set it to never auto-play media files to cut down on
the distraction of video advertising.

If I open the game in the newest Microsoft Edge, the riff plays just fine.
I only mention this in case you run into a similar problem. Different web
browsers have different ways of doing things and you never know which one
the player of your game is going to use.
