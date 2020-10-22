										//Smooth Scroll Code 


// First Approach
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// // console.log(navMenuAnchorTags);
// for(var i=0; i<navMenuAnchorTags.length; i++)
// {
// 	navMenuAnchorTags[i].addEventListener('click', function(event)
// 	{
// 		event.preventDefault();
// 		var targetID = this.textContent.trim().toLowerCase();
// 		var taregtSectionID = document.getElementById(targetID);
// 		var interval  = setInterval(function(){
// 			var targetSectionCoordinates = taregtSectionID.getBoundingClientRec();
// 			if(targetSectionCoordinates.top<=0)
// 			{
// 				clearInterval(interval);
// 				return;
// 			}
// 			window.scrollBy(0,50);
// 		},20);
// 	});
// }


// Second Approach

var about = document.getElementById('about');
var skills = document.getElementById('skills');
var experience = document.getElementById('experience'); 
var certifications = document.getElementById('certifications');
var portfolio = document.getElementById('portfolio');
var contact = document.getElementById('contact');
var currentpos = 0;
aboutposition = about.offsetTop;
skillsposition = skills.offsetTop;
experienceposition = experience.offsetTop;
certificationposition = certifications.offsetTop;
portfolioposition = portfolio.offsetTop;
contactposition = contact.offsetTop;

function myfunctionabout()
{
	var scrollInterval = setInterval(function()
		{
		if(currentpos>=aboutposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}



function myfunctionskills()
{
	var scrollInterval = setInterval(function()
	{
		if(currentpos>=skillsposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}


function myfunctionExperience()
{
	var scrollInterval = setInterval(function()
	{
		if(currentpos>=experienceposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}


function myfunctionCertifications()
{
	var scrollInterval = setInterval(function()
	{
		if(currentpos>=certificationposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}


function myfunctionPortfolio()
{
	var scrollInterval = setInterval(function()
	{
		if(currentpos>=portfolioposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}

function myfunctionContact()
{
	var scrollInterval = setInterval(function()
	{
		if(currentpos>=contactposition)
		{
			currentpos = 0;
			clearInterval(scrollInterval);
			return;
		}
		currentpos += 50;
		window.scrollBy(0,50)
	},20);
}


