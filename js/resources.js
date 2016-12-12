//Create a <p> element
//var parag = document.createElement("p"); 
//var node = document.createTextNode("This is test text 1."); //Create text node for <p> content

//parag.appendChild(node); //Put node text into <p>

//var mainText = document.getElementById('textBox');
//mainText.appendChild(parag); //Inside the textBox, put paragraph
//var optionText1 = "<br/><br/>Press A to ",
//	optionText2 = "<br/>Press S to ",
//	optionText3 = "<br/>Press Spacebar to go back.",
//	lb = "<br>";

var fillerText = [
"Your personality is amazing!",
"Your smile is beautiful!",
"You're a smart cookie!",
"I appreciate you!",
"Your perspective is refreshing!",
"You're a great listener!",
"I bet you poop skittles!",
"You have the best ideas!",
"Your taste in shoes is flawless!",
"The stars live in your eyes.",
"You're an inspiring example!",
"You are a good friend.",
"You're a totally faaaaAAAaabulous unicorn!",
"You're always bringing out the best in other people.",
"You're all that and a bag of mesquite BBQ chips!",
"You always know what to do!",
"I love your style!",
"You look great every day!",
"How is it that you always know what to say?",
"Everyone gets knocked down sometimes, but you always get back up and keep going!",
"Your hair game is magnificent!",
"You have a charitable soul.",
"I bet you sweat glitter!",
"Actions speak louder than words, and yours tell an incredible story.",
"Time really flies when I'm around you!",
"There's ordinary, and then there's you.",
"You're hilarious! I could listen to you talk about anything!",
"My mom likes you more than me, her own child!",
"I hope we're friends when we're 90!",
"You’re smart as a whip and you’re cool under pressure.",
"Your smile so bright, I need shades!",
"Nobody can fill your shoes!",
"Your genius is as perfect as your wardrobe!",
"Everything looks adorable on you!",
"Take a break cause you've earned it!",
"I'm glad we met!",
"You deserve all the credit!",
"You're radiant!",
"Your eyebrows are fleekin'.",
"You parallel park like a champ!",
"I bet you fart cotton candy!",
"Never gonna give you up!",
"Never gonna let you down!",
"Never gonna run around & desert you!",
"Never gonna make you cry!",
"Never gonna say goodbye!",
"Never gonna tell a lie and hurt you!",
"You give reasonable advice.",
"Your presence is uplifting!",
"Brilliant work!",
"Well done!",
"I have lots to learn from you!",
"What you did is stunning!",
"You made it happen!",
"I'm proud to know you."
];

function nextText(something){
document.getElementById('demo').innerHTML = something;
};

//Show filler text on key press
function keyCode(event){
	var x = event.keyCode;
	if(x == 32){
		nextText(fillerText[Math.floor(Math.random() * (fillerText.length - 1))+1]);
	};
};

//var display = $('#demo2');

//function displayText(){
//display.text("Something new goes here, hopefully.");
//document.write("Something new goes here, hopefully. <br/> Press A");
//};

//document.getElementById('demo').innerHTML = fillerText2;
//nextText(fillerText2);
