The game is really starting to take shape. A player can cruise the solar
system, looking for bargains. Cargo can be bought and sold. Money can be
used to pay off debt and put in the bank. A player can even win the game
by collecting a million dollars in their bank account. Not bad.

But, things could be more interesting with a little danger added into the
mix. There's a section of the ship's controls that hasn't been looked at
yet, and that's defenses: shields and rail guns. Let's put those defenses
to use and add another dimension of play to the game.

In the days of old, dangers were from storms and pirates. In our game, the
storms will be solar storms that can blow a player off course, and asteroid
fields that can easily batter a ship to scrap. There's not much recourse
against being blow off course, but for asteroids, we have railguns.

Let's give the player two rail guns to start with. Rail guns will lessen
the chance that the ship takes shield damage from an asteroid encounter.
If both rail guns are operational, let's put that damage at a random number
between 0 and 10%. With one operational gun, 0 and 20%. And, with no guns
0 and 50%. We can easily accomplish this with our rollDie() function.

Why would there be less than two operational guns? Let's say with a lucky
hit, maybe a 1 in 100 chance, an asteroid might impact one of the rail guns
and disable it. If one gun is offline, there's more chance that an asteroid
will get through. If both guns are offline, all of the impact is taken by
the shields.

All of this should be fairly easy to implement using our rollDie() function.
We just need to slip in these random event while the ship is in transit to
the next destination. Something like the following should work:

1a) Roll for a storm. (1 in 10) That's maybe once every one and a half trips
    around the Solar System
1b) If there's a storm, roll to see where the ship ended up. (1 through 7)
2a) Roll for an asteroid encounter. Let's say odds double near Ceres (since
    it's in the asteroid belt.) So 1 in 20 normally, and 1 in 10 when the
    destination is Ceres.
2b) If there's an asteroid hit, roll for shield depletion taking into account
    the rail guns. (0-10% with both guns, 0-25% one gun, 0-50% no guns.)
    If shields are depleted, one more hit and bam!
    If the ship's not a twisted mass of scrap by now, proceed to the new
    destination -- Valhalla!

And just for fun, let's add in a chance of some unsavory character robbing
the player of cash. Maybe this only happens when the player has a lot of
cash on hand, say more than 100,000, and there's a 1 in 20 chance, except
on Mars, which is notorious for crime. Make it a 1 in 10 chance there.

This shouldn't be hard at all. It's almost exactly like our asteroid
encounter where one particular destination is riskier than others. It would
look something like this:

Does the play have more than 100K in cash?
  Yes - Get ready to roll a 20 sided die.
Is the player on Mars?
  Yes - Make that a 10 sided die.
Roll the die.
Did the player get robbed?
  Yes - Roll a 100 sided die to see what percentage of cash was lost.
