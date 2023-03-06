






















let dataJokes = [`Holy cow!
    A pair of cows were talking in the field.One says, “Have you heard about the mad cow disease that’s going around ?”
    
    “Yeah,” the other cow says. “Makes me glad I’m a penguin.”`,










    `Holy cow!
    A pair of cows were talking in the field.One says, “Have you heard about the mad cow disease that’s going around ?”
    
    “Yeah,” the other cow says. “Makes me glad I’m a penguin.”`,




    `Holy cow!
    A pair of cows were talking in the field.One says, “Have you heard about the mad cow disease that’s going around ?”
    
    “Yeah,” the other cow says. “Makes me glad I’m a penguin.”`,





    `Holy cow!
    A pair of cows were talking in the field.One says, “Have you heard about the mad cow disease that’s going around ?”
    
    “Yeah,” the other cow says. “Makes me glad I’m a penguin.”`,








    `
    With a vengeance
    In Denver, the members of a Sunday­-school class were asked to set down their favorite biblical truths.One youngster laboriously printed: “Do one to others as others do one to you.” —Lee Olson, The Denver Post
    `,




    `A taxing situation
    According to unofficial sources, a new simplified income - tax form contains only four lines:
    
    1. What was your income for the year ?
    
        2. What were your expenses ?
    
            3. How much have you left ?
    
                4. Send it in.
    
    —The Link
    `,




    `Taking stock
    One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker. —Dallas News`,









    `Shrink rap
    Two Hollywood stars ran into each other at the door of their psychiatrist’s office.
    
    “Hello, there,” said one. “Are you coming or going ?”
    
    “If I knew that,” said the other, “I wouldn’t be here.”
    
    —The American Weekly
    `,



    `
    Just desserts
    At a party, a young wife admonished her husband, “That’s the fourth time you’ve gone back for ice cream and cake.Doesn’t it embarrass you ?”
    
    “Why should it ?” answered her spouse. “I keep telling them it’s for you.”
    
    —Selma Glasser, Good Housekeeping`,





    `Cheers!
    A grasshopper walks into a bar.The bartender looks at him and says, “Hey, they named a drink after you!”
    
    “Really ?” replies the grasshopper. “There’s a drink named Stan ?”











    Listen up!
    You can’t believe everything you hear—but you can repeat it.`,







    `This one’s a gem
    A Hollywood hostess, giving instructions to a new maid just before a party, cautioned: “Now remember, Marie, when you serve my guests, don’t wear any jewelry.”
    
    “I haven’t anything valuable, madam,” answered the maid. “But thanks for the warning just the same.”
    
    —Peggy McEvoy`,





    `Boyfriend trouble
    A teenager brings her new boyfriend home to meet her parents.They’re appalled by his haircut, his tattoos, his piercings.
    
        Later, the girl’s mom says, “Dear, he doesn’t seem to be a very nice boy.”
    
    “Oh, please, Mom!” says the daughter. “If he wasn’t nice, would he be doing 500 hours of community service ?”
    
    —Maria Salmon`,









    `The end is near
    Every time a little boy went to a playmate’s house, he found the friend’s grandmother deeply engrossed in her Bible.Finally his curiosity got the better of him.
    
    “Why do you suppose your grandmother reads the Bible so much ?” he asked.
    
    “I’m not sure,” said his friend, “but I think she’s cramming for her finals.”
    
    —Carl T.Schuneman`,



    `Man overboard
    A gawky lad from New England came to New York with his girl, and took her to nearby Playland Amusement Park.They had heard a lot about the Tunnel of Love and were especially anxious to try it out.But when they got home, the kids expressed disappointment.
    
    “Shucks,” the boy said, “it was dark and damp and uncomfortable.Besides, we got soaking wet.”
    
    “How come ?” asked a friend. “Did the boat leak ?”
    
    The kid looked amazed. “There’s a boat ?”
    
    —J.D.Theus`,







    `Kidding around
    On a Miami­ to Chicago flight was a lively youngster who nearly drove everyone crazy.He was running up and down the aisle when the flight attendant started serving coffee.He ran smack into her, knocking a cup of coffee out of her hand and onto the floor.
    
    As he stood by watching her clean up the mess, she glanced up at the boy and said, ‘”Look, why don’t you go and play outside ?”
    
    —Eugene Carroll`,









    `Now boarding
    Rushing up to a large airline’s ticket counter, a man gasped, “Miss, please help me.I have to get to Chicago in the worst way!”
    
    The clerk calmly pointed to her left and said, “Sir, that would be the airline next to us.”
    
    —Ramona Frankum
    `];




let jokes = document.getElementById('joke');
let nextButton = document.getElementById('btn');

nextButton.addEventListener('click', function () {
    randomNumber = dataJokes[Math.floor(Math.random() * dataJokes.length)]
    jokes.innerHTML = randomNumber
})


