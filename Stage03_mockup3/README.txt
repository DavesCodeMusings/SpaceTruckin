At the end of stage 2 we had a pretty good looking mockup of what our game
will look like.  There are a couple of minor problems that need to be ironed
out in this stage.  The 'before' screenshot points out a few of them.  The
tables that we're using to display information about cargo and finances look
a little off.

A lot of that has to do with the alignment of numbers.  They should be right
justified, but they're not.  Also, the inputs for selecting items and for
entering quantities look very out of place with the new darker visual
presentation.

In this stage we'll be working mostly with CSS to get everything looking
good for our mockup.  There will be some editing of the HTML as well, but
this is minor and serves only to link items from the HTML to their CSS
counterparts.

Remember 'skinable' apps?  If we want the game to be skinable we have to
avoid the temptation to HTML to make changes to the look.  The look of the
game should all lie within the contents of the CSS file.  That way if you
decide later that the color scheme is too dark, you can easily change it
by replacing the CSS file and not rewriting the entire app.