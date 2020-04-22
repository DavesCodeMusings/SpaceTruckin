In the previous phase, we focused our efforts on creating price fluctuations
for our products. It took a fair amount of effort, but it's working. In this
phase of the development process, we will add the ability to buy and sell
those products. That's the point of the game--buying and selling to make a
profit.

The first thing we will need is a way for the player to select the product
to buy or sell. If you remember all the way back to Stage 3 of the project,
we used an HTML input element called a radio button. The radio button allows
the player to select one (and only one) of the options given. Later in Stage
4 we used CSS to hide the actual selector in order to improve the overall
look of the interface. But it's still there, in the background available for
us to use.

The next thing we hve to figure out is using the buy and sell buttons to do
the work of putting the products in our cargo hold and subtracting the right
amount of cash from our finances. This shouldn't be much different than the
functions we used to transfer cash between accounts in our Finances part of
the game.

Finally, if you played around in the previous stage's build of the game, you
may have noticed the prices tended to be on the low side. As compensation,
we can change the calculation for the base price to be median price divided
by two instead of four. That way, the lowest price will be a half-off sale
and the high-end price can go up even more.