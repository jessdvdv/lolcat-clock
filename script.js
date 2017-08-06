var wakeupTime = 6;

var noon = 12;

var lunchTime = 12;

var napTime = lunchTime + 2;

var evening = 18;

var partyTime = 21;


//Getting it to show the current time on the page

var showCurrentTime = function()

{

  //Display the string on the webpage

  var clock = document.getElementById("clock");


  var currentTime = new Date();


  var hours = currentTime.getHours();

  var minutes = currentTime.getMinutes();

  var seconds = currentTime.getSeconds();

  var meridian = "AM";


  // Set hours

     if (hours >= noon)

    {

      meridian = "PM";

    }

     if (hours > noon)

    {

      hours = hours - 12;

    }


  // Set Minutes

     if (minutes < 10)

    {

      minutes = "0" + minutes;

    }



  // Set Seconds

     if (seconds < 10)

    {

      seconds = "0" + seconds;

    }


  // put together the string that displays the time

  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;

};


//Getting the clock to increment on its own and change out messages and pictures

var updateClock = function()

{

  var time = new Date().getHours();

  var messageText;

  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";


  var message = document.getElementById("timeEvent");

  var lolcat = document.getElementById("lolcat");

  if (time == partyTime)

  {

    messageText = "IZ PARTEE TIME!!";

    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";

  }

  else if (time == napTime)

  {

    messageText = "IZ NAP TIME...";

    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";

  }

  else if (time == lunchTime)

  {

    messageText = "IZ NOM NOM NOM TIME!!";

    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";

  }

  else if (time == wakeupTime)

  {

    messageText = "IZ TIME TO GETTUP.";

    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";

  }

  else if (time < noon)

  {

    messageText = "Good morning!";

  }

  else if (time > evening) {

    messageText = "Good Evening!";

  }

  else {

    messageText = "Good afternoon!";

  }


  console.log(messageText);

  message.innerText = messageText;

  lolcat.src = image;



  showCurrentTime();

};

updateClock();


//Getting the clock to increment once a second

var oneSecond = 1000;

setInterval( updateClock, oneSecond);


//Getting the Party Time button to work

var partyTimeButton = document.getElementById("partyTimeButton");


var isPartyTime = false;

var partyEvent = function()

{

  if (isPartyTime == false)

   {

     isPartyTime = true;

     time = partyTime;

     partyTimeButton.innerText = "PARTY TIME!";

     partyTimeButton.style.backgroundColor = "#222";

   }

  else

  {

    isPartyTime = false;

    time = new Date().getHours();

    partyTimeButton.innerText = "PARTY OVER";

    partyTimeButton.style.backgroundColor = "#0A8DAB";

   }

};


partyTimeButton.addEventListener("click", partyEvent);

partyEvent();


//Activities wake-up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()

{

  wakeupTime = wakeUpTimeSelector.value;

};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

wakeUpEvent();


//Activities lunch selector

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function()

{

  lunchTime = lunchTimeSelector.value;

};

lunchTimeSelector.addEventListener("change", lunchTimeEvent);

lunchTimeEvent();


//Activities nap selector

var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function()

{

  napTime = napTimeSelector.value;

};

napTimeSelector.addEventListener("change", napTimeEvent);

napTimeEvent();
