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

Why would there be less than two operational guns? Let's say, a lucky hit,
maybe a 1 in 100 chance, an asteroid might impact the rail gun and disable
it. Further, let's say that two asteroid encounters in a row will leave
one of the guns overheated. Four in a row and both guns are too hot to use.

If the guns are down, all of the impact is taken by the shields. The
shields will recharge, but slowly over time, say maybe 10% per turn. And,
maybe an unlucky asteroid hits the shield generator itself, leaving just
hull armor, and if the player is lucky, a working rail gun or two. Maybe
the next asteroid encounter is survivable if there's a gun, but the one
after that spells the end.

All of this should be fairly easy to implement using our rollDie() function.
We just need to slip in these random event while the ship is in transit to
the next destination. Something like the following should work:

Roll for a storm. (1 in 20)
If there's a storm, roll to see where the ship ended up. (1 through 7)
Roll for an asteroid encounter. Maybe odd double near Ceres (since it's
in the asteroid belt.) (1 in 20, 1 in 10 when going to Ceres.)
If there's an asteroid hit, roll for shield depletion taking into account
the rail guns. (0-10% with both guns, 0-25% one gun, 0-50% no guns.)
If shields are depleted, one more hit and bam!
If the ship's not a twisted mass of scrap, proceed to the new destination.
