let changeColor = document.querySelector('body');
let text = document.getElementById('text');
let author = document.getElementById('author');
let btn = document.getElementById('new-quote');
let quoteText = document.getElementById('quote-text');
let twitter = document.getElementById('tweet-quote'); 
  
  
var quotes = [
    {
    "quote": 'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.',
    "author": 'G.K. Chesterton, Heretics'
  },    
   {            
   "quote": "Life isn’t about getting and having, it’s about giving and being.",
   "author":"Kevin Kruse"},
  {
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.",
    "author":"Napoleon Hill"},
  {
    "quote":"Strive not to be a success, but rather to be of value.",
    "author":"Albert Einstein"},
    {
    "quote":"All good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.",
    "author":"Ernest Hemingway"},
    {
    "quote":"I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
    "author":"Louisa May Alcott, Little Women"},
  ];
  
   
var colors = [
   {
    'color': '#f8bff6',
    },
    {
    'color': '#d68ac5'
    },
    {
    'color': '#b45e91'
    },
    {
    'color': '#923a5e'
    },
    {
    'color': '#701e31'
    },
    {
    'color': '#4e0b0e'
    },
    {
    'color': '#2c0701'
    },
     {
    'color': '#DB7093'
    },
     {
    'color': '#FF69B4'
    },
     {
    'color': '#D8BFD8'
    },
     {
    'color': '#B0E0E6'
    },
     {
    'color': '#8A2BE2'
    },
     {
    'color': '#FFDAB9'
    },
];
  
  
btn.addEventListener('click', function() {
    text.style.animation = "";
    setInterval(() => text.style.animation = "fade 1.5s linear", 5);
      author.style.animation = "";
    setInterval(() => author.style.animation = "fade 1.5s linear", 5);
  
   
    let color = [Math.floor(Math.random() * colors.length)];
    let choosenColor = colors[color]['color'];
    changeColor.style.background = choosenColor;
    changeColor.style.color = choosenColor;
    btn.style.background = choosenColor;
    twitter.style.background = choosenColor;
    btn.style.color= "#fff";
    let position = [Math.floor(Math.random() * quotes.length)];
    let authorQuote = "- "+quotes[position]['author'];
    let quoteQuote = quotes[position]['quote'];
    text.innerHTML =  quoteQuote;
    author.innerHTML = authorQuote;
});
  