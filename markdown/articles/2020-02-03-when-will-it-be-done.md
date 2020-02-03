---
title: When Will it be Done?
author: Andrew Werner
id: when-will-it-be-done
subtitle: Overcoming our own limitations
image: /2020-02-03-when-will-it-be-done/estimates.jpg
---

One of the most common and frustrating questions to answer in any creative
endeavour is: “When will it be done?”.

The first reasonable thought that should pop into any rational person’s head on
hearing this is probably, “How the hell should I know?”.

However, for some inexplicable reason our evolution has left us predisposed to
thinking we can easily give an answer.

So now we umm and aah and try to give some pronouncement which, if delivered
with enough certainty, suddenly, and to our bewilderment, becomes a binding oath
that we’re expected to fulfil.

## Why Humans are Awful...at Esimating

It turns out that all of us are pretty terrible at estimating. In fact a number
of studies have shown this empirically for a number of different reasons.

First up there’s what’s referred to as the planning fallacy. This is where our
attention on the task we’re being asked about overrides our ability to take into
account historical facts that might have given us a better answer. Also by
focusing solely on estimating the task at hand we become myopic about the
context. By that I mean that we fail to take into account complications that
might arise along the way.

You’re probably thinking, “Ok, so that’s not great but we can probably account
for those things.” And you’re right...except there’s one other issue: our
hardwired optimism bias.

It turns out that for (possibly) evolutionary reasons we underestimate how
difficult a given task will be and also underestimate how likely it will be that
we will run into any issues along the way. A great way to think of this is
Hofstadter’s law:

>It always takes longer than you expect even when you take into account Hofstadter’s law.

## Adding a Buffer

We know we’re bad at estimating and we know Hofstadter’s law. So for any
estimate surely we just add 20%, 30%, 75%? That would give us an answer that’s
at least more accurate right?

Well, there’s also another problem here. Opportunity cost. Let’s use an example.
Imagine a builder quoting for work and, knowing how bad they are at estimating,
adding on 75% to cover themselves. The estimate may indeed cover them but if
they have a competitor who is able to estimate more accurately then, all else
being equal and the customer caring mainly about price, they will only end up
with those jobs that their overestimate is in fact and underestimate for. The
stakes are high.

## Maybe There is a Better Way

So to overcome our inherant falability we need to focus on using historical data
to understand the problem we’re now facing. This should mean that we’re no
longer focusing on the problem at hand but rather it’s similarity to previous
problems we have faced and reducing our optimism about the future. But we now
have an assumption that’s important to call out:

 - We expect the future to look like the past

For the rest of this article we’ll assume we’re an aspiring author that’s just
received their first book deal. Amazing! Go us!

The deal itself is to write a book of 35,000 words and our publisher needs to
know when we’ll have the first draft finished so that he can edit, market and
ultimately publish it. Can we tell him when it’ll be ready on day one?

Yes, but it will be wrong.

As an aspiring author we have absolutely no way of knowing how fast we’ll be
able to write anything and we especially don’t know what issues will come up
along the way. So cleverly we ask our published to give us two weeks and we’ll
come back with a **more accurate** answer.

## A Naive Approach

After two weeks we have collected some data on our progress for words written
for each day shown in the array below.

```javascript
const bookLength = 35000

const wordsPerDay = [126, 470, 350, 750, 200, 0, 0, -100, 25, 55, 504, 0, 0, 0]
```

A naive but at least data based approach at this point would be to take the
average number of words we’ve written per day and use that to divide the number
of words to write giving us the number of days until we finish.

```javascript
const howLong = bookLength / (wordsPerDay.reduce((a,b) => a + b, 0) / wordsPerDay.length)
// => 205.88235294117646
```
This is a great start but there’s a slight problem. We’ve gone from being
completely wrong to being **precisely wrong**.

## Improving our Process

The key realisation to have here is that by averaging out the pace at which we
write we’ve just simplified the variability in our writing pace from our model.
However, we really do care about that variance because it’s really the big
factor that will decide how long our book takes to write.

And luckily help is at hand. It turns out that this is a perfect use case for
the Monte Carlo method. However, before we begin a shift in perspective is
required. We know that we can’t get a precise answer to the question. After all,
we have no way of knowing the future. So instead we focus on being **imprecisely
right** rather than **precisely wrong**.

## Building the Model

So what does Monte Carlo look like? To start with we try and work out one
plausible estimate based on our historical data. Then we do the same thing again
and again multiple times until we have a mass of results. If we then sort these
into ascending order we’ll see that we have a distribution of plausible options
for when we will be able to finish our work as shown in the code below:

```javascript
const runSimulation = (data, bookLength, numberOfSimulations, result =[]) => {
  // if there are no more simulations left, give us the results
  if(numberOfSimulations === 0) return result

  // pick a random number between a high and a low
  const sample = (distLow, distHigh) =>
    Math.floor(Math.random() * (distHigh - distLow + 1) + distLow)

  // get the highest and lowest value from our data
  const { 0: distLow, [data.length - 1]: distHigh } = [...data].sort((a,b) => a - b)

  // randomly pick how many words we write in a day
  // minus that number from the number of words left to write
  // add one to the number of days and repeat until we have no words left to write
  // at the end tell us how many days we took
  const days = (bookLengthRemaining, howLong = 0) => {
    if(bookLengthRemaining <= 0) return howLong
    return days(bookLengthRemaining - sample(distLow, distHigh), howLong + 1)
  }
  
  // add the number of days it took to our results
  // reduce the number of simulations left by one
  // run again until no simulations are left to run
  return runSimulation(data, bookLength, numberOfSimulations - 1, [...result, days(bookLength)])
}

// actually run our simulations 10 time and sort the results
runSimulation(wordsPerDay, bookLength, 10).sort((a,b) => a - b)

// => [101, 102, 102, 104, 104, 108, 110, 112, 117, 129]
```

Now if you plotted these results onto a graph it would likely end up looking
something like this:

![results graph](/posts/results-graph.jpg)

If we picked the first result from our simulations this would probably represent
a case where every day we wrote was the perfect day. Our ideas flowed straight
from the universe through the keyboard and into the written word at a phenomenal
pace. At the other end our last result would indicate a scenario where we were
constantly afflicted both with disease and writers block. The majority of
scenarios though represent a middle ground with some ups and some downs. This
means that the question now becomes what level of certainty are you happy with
giving as your answer?

Infuriatingly there isn’t a right answer to this question but most long time
users of this kind of forecasting tend to use the 85% percentile if asked to
give a single figure and not a range.

## Forecasts not Estimates

When will it be done? We now have an answer. Is it perfect? Absolutely not but
we’re not looking for perfection. A great analogy for this type of process is a
weather forecast.

How much do you trust the weather forecast to be accurate 30 days out? It’s
usually just a good indication but you wouldn’t trust it to make any important
decisions. What about a weather forecast for the day ahead? It’s usually pretty
accurate.

When it comes to the question of when things will be done, in an ideal situation
we’d like to take the same approach for the simple reason that we know that our
forecast will improve over time.

## Models Improve with Time

After the first week of writing their book our writer will have a much better
understanding of the book they are trying to write so our input data begins to
take shape.

After one month our writer will have a good understanding of their pace of
writing and will know that they are able to write at a more consistent pace. We
have also had a few days where our author was dealing with an emergency and
couldn’t write anything. Our model now takes this into account.

After three months they have experienced a few hiccups but maintained a
consistent pace. In fact you can actually see that over time they are
consistently improving and we can improve our model to pick increasing values
for each day’s writing as it predicts how we will do.

It’s at this point that you might feel comfortable making plans based on the
dates that this model is providing you but bear in mind that throughout your
publisher has had a rough idea of when the book will be done and over time he’s
had increasing certainty of the exact date that our writers new bestseller will
drop into his lap.

So the next time someone asks you when something will be done it might be worth
giving them an imprecise forecast rather than a completely inaccurate estimate.


