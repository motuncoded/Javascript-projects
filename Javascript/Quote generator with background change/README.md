Question: Random Quote Generator!! Build A Random Quote Generator, A Program That Displays A Randomly Selected Quote Each Time The User Clicks A Button. Starter Code: /**\* _ `Quotes` Array _**/ /**\* _ `GetRandomQuote` Function _**/ /**\* _ `PrintQuote` Function _**/ Document.GetElementById('Load-Quote').AddEventListener("Click", PrintQuote, False);
Random Quote Generator!!

Build a random quote generator, a program that displays a randomly selected quote each time the user clicks a button.

Starter Code:
/\*\*\*

- `quotes` array
  \*\*\*/

/\*\*\*

- `getRandomQuote` function
  \*\*\*/

/\*\*\*

- `printQuote` function
  \*\*\*/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

Guidelines

You don’t have to abide by these guidelines, but if you’re not sure how to start this or how to organize the quotes or anything like that, this guideline can help you out

Array of objects

is named quotes.

contains at least 5 quote objects.

Objects

All objects have quote and source properties.

At least one object should have a citation property.

At least one object should have a year property.

BONUS

At least one object has at least one additional property, such as tags.

At least one additional property prints to the page with its quote.

getRandomQuote function

create a getRandomQuote function:

is named getRandomQuote.

returns a random object from the quotes array.

printQuote function

create a printQuote function:

is named printQuote.

calls the getRandomQuote function.

prints a quote and a source property with every quote.

prints a citation property with at least one quote.

prints a year property with at least one quote.

printed quotes match the format, layout, and styles of the example quote in the index.html file.

BONUS

Quotes automatically refresh at regular intervals.

Background color changes to a random color each time the quote refreshes.
