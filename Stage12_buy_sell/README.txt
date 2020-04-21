Our game is starting to show some real promise. Let's take a moment to look
back on our accomplishments.
* We've got a nice look and an interface that works as desktop or mobile.
* We've got helm navigation working, taking us to any port in the system.
* We've got headlines that change randomly when we pull into port.
* We've got accounts that accrue interest over time.

That's a lot of big accomplishments for a short time.

Let's keep the momentum going for our next stage of development and see
if we can enable the player to buy and sell things while in port. And, in
keeping with making things feel realistic, let's add a bit of randomness
to the prices.

We've already experimented with a random die roll function to choose a
news headline. We'll use the same code to make our prices appear to be
fluxuating. But rather than simply taking a price and multiplying it by
a number from a die roll, we'll code it so that prices tend toward a
normal value, but every once in a while go slightly crazy so we have a
chance of making a killing on a sale.

To do this, we'll use a Fibonacci sequence. Fiba who? Fibonacci. Check
him out on Wikipedia:

https://en.wikipedia.org/wiki/Fibonacci

What we're interested in is his famous sequence. 1 1 2 3 5 8 13 ...
If you notice, each number is the sum of the two numbers that come before
it. So, 2 comes from 1 + 1, and 13 comes from 5 + 8. If you graph this
out, it forms a pretty cool looking spiral.

But what want from ole Fibonacci is the fact that a die roll using those
numbers will have a tendancy to stay small. Of the seven numbers above,
over half are 3 or less. If we use them as multipliers on prices, it means
that there's a good chance prices will not be too high. But, if you roll
a 13, the price is really high.

In statistics, there's a thing called the bell curve, a graph that looks
a little like an outline the Liberty Bell in Washington, DC. It's low on
the sides and high in the middle. If we had a similar curve for pricing,
even more of the die rolls would result in a 'reasonable' price, and only
that one lucky roll right in the middle would be an exorbitant price.

Take a look at this: 1 1 2 3 5 8 13 8 5 3 2 1 1
It's Fibonacci up to 13 and then back down again.

If you consider 5 and above to be a high price, there is only five die
rolls that will give a high price. The remaining eight will result in a
reasonable price. And, since there are four 1s in the sequence, there's a
good chance the player will get a bargin.

What we need to do is set our pricing so that rolling something around a
three or five gives a normal price. Anything lower is a bargin, and
anything higher is a great time to sell what you've got. So, how about
four? It's not possible to roll a four, but it is right between three and
five.

Let's say Consumer Goods cost 500 on a normal day. 500 divided by 4 is
125. So setting a base of 125 and then multiplying by our Fibonacci
inspired bell curve sequence means that the bargain price will be 125 and
the highest price will be 1625. But, there's only a small chance of that
highest price occuring.

While we're talking Fibonacci, let's go ahead and arrange our median
pricing in a similar sequence. Starting with 500 for consumer goods, the
next number in the sequence would be 800 for foodstuffs, and 1300 for ore
and minerals. Heavy equipment would come in at 2100.

Remember these are median prices. We'll need to do the divide by four and
multiply by the die roll to get an actual price in a particular port.

We still need to have a way for the player to buy and sell cargo, but
setting prices is complex work and probably all we want to take on for
this stage. We'll save buying and selling for next time.
