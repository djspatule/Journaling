function loadJSON(callback)
{
	let request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open('GET', 'myJournal.json', true);
	request.onreadystatechange = function ()
	{
		if (request.readyState == 4 && request.status == "200")
		{
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(request.responseText);
		}
	}
	request.send(null);
}

// Call to function with anonymous callback
loadJSON(function (response)
{
	// Do Something with the response e.g.
	journal = JSON.parse(response);

	// Assuming json data is wrapped in square brackets as Drew suggests
	console.log(journal);
});

loadJSON();

//populate the journal with example entries.
journal = [
	{ items: ["carrot", "exercise", "weekend"], event: false },
	{
		items: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
		event: false,
	},
	{
		items: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
		event: false,
	},
	{
		items: [
			"brussel sprouts",
			"ice cream",
			"brushed teeth",
			"computer",
			"weekend",
		],
		event: false,
	},
	{
		items: [
			"potatoes",
			"candy",
			"brushed teeth",
			"exercise",
			"weekend",
			"dentist",
		],
		event: false,
	},
	{
		items: [
			"brussel sprouts",
			"pudding",
			"brushed teeth",
			"running",
			"weekend",
		],
		event: false,
	},
	{
		items: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
		event: false,
	},
	{
		items: ["bread", "beer", "brushed teeth", "cycling", "work"],
		event: false,
	},
	{ items: ["cauliflower", "brushed teeth", "work"], event: false },
	{ items: ["pizza", "brushed teeth", "cycling", "work"], event: false },
	{ items: ["lasagna", "nachos", "brushed teeth", "work"], event: false },
	{ items: ["brushed teeth", "weekend", "touched tree"], event: false },
	{
		items: ["lettuce", "brushed teeth", "television", "weekend"],
		event: false,
	},
	{ items: ["spaghetti", "brushed teeth", "work"], event: false },
	{ items: ["brushed teeth", "computer", "work"], event: false },
	{ items: ["lettuce", "nachos", "brushed teeth", "work"], event: false },
	{ items: ["carrot", "brushed teeth", "running", "work"], event: false },
	{ items: ["brushed teeth", "work"], event: false },
	{ items: ["cauliflower", "reading", "weekend"], event: false },
	{ items: ["bread", "brushed teeth", "weekend"], event: false },
	{ items: ["lasagna", "brushed teeth", "exercise", "work"], event: false },
	{ items: ["spaghetti", "brushed teeth", "reading", "work"], event: false },
	{
		items: ["carrot", "ice cream", "brushed teeth", "television", "work"],
		event: false,
	},
	{ items: ["spaghetti", "nachos", "work"], event: false },
	{
		items: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
		event: false,
	},
	{ items: ["spaghetti", "peanuts", "computer", "weekend"], event: true },
	{
		items: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
		event: false,
	},
	{ items: ["potatoes", "ice cream", "brushed teeth", "work"], event: false },
	{ items: ["peanuts", "brushed teeth", "running", "work"], event: false },
	{ items: ["potatoes", "exercise", "work"], event: false },
	{ items: ["pizza", "ice cream", "computer", "work"], event: false },
	{ items: ["lasagna", "ice cream", "work"], event: false },
	{ items: ["cauliflower", "candy", "reading", "weekend"], event: false },
	{
		items: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
		event: false,
	},
	{ items: ["potatoes", "brushed teeth", "work"], event: false },
	{ items: ["carrot", "work"], event: false },
	{ items: ["pizza", "beer", "work", "dentist"], event: false },
	{ items: ["lasagna", "pudding", "cycling", "work"], event: false },
	{ items: ["spaghetti", "brushed teeth", "reading", "work"], event: false },
	{ items: ["spaghetti", "pudding", "television", "weekend"], event: false },
	{ items: ["bread", "brushed teeth", "exercise", "weekend"], event: false },
	{ items: ["lasagna", "peanuts", "work"], event: true },
	{ items: ["pizza", "work"], event: false },
	{ items: ["potatoes", "exercise", "work"], event: false },
	{ items: ["brushed teeth", "exercise", "work"], event: false },
	{ items: ["spaghetti", "brushed teeth", "television", "work"], event: false },
	{ items: ["pizza", "cycling", "weekend"], event: false },
	{ items: ["carrot", "brushed teeth", "weekend"], event: false },
	{ items: ["carrot", "beer", "brushed teeth", "work"], event: false },
	{ items: ["pizza", "peanuts", "candy", "work"], event: true },
	{
		items: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
		event: false,
	},
	{ items: ["potatoes", "peanuts", "brushed teeth", "work"], event: false },
	{
		items: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
		event: false,
	},
	{
		items: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
		event: false,
	},
	{ items: ["lasagna", "brushed teeth", "cycling", "weekend"], event: false },
	{
		items: [
			"cauliflower",
			"peanuts",
			"brushed teeth",
			"computer",
			"work",
			"touched tree",
		],
		event: false,
	},
	{ items: ["lettuce", "brushed teeth", "television", "work"], event: false },
	{ items: ["potatoes", "brushed teeth", "computer", "work"], event: false },
	{ items: ["bread", "candy", "work"], event: false },
	{ items: ["potatoes", "nachos", "work"], event: false },
	{ items: ["carrot", "pudding", "brushed teeth", "weekend"], event: false },
	{
		items: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
		event: false,
	},
	{ items: ["brussel sprouts", "running", "work"], event: false },
	{ items: ["brushed teeth", "work"], event: false },
	{ items: ["lettuce", "brushed teeth", "running", "work"], event: false },
	{ items: ["candy", "brushed teeth", "work"], event: false },
	{
		items: ["brussel sprouts", "brushed teeth", "computer", "work"],
		event: false,
	},
	{ items: ["bread", "brushed teeth", "weekend"], event: false },
	{ items: ["cauliflower", "brushed teeth", "weekend"], event: false },
	{
		items: ["spaghetti", "candy", "television", "work", "touched tree"],
		event: false,
	},
	{ items: ["carrot", "pudding", "brushed teeth", "work"], event: false },
	{ items: ["lettuce", "brushed teeth", "work"], event: false },
	{
		items: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
		event: false,
	},
	{ items: ["pizza", "brushed teeth", "work"], event: false },
	{ items: ["spaghetti", "peanuts", "exercise", "weekend"], event: true },
	{
		items: ["bread", "beer", "computer", "weekend", "touched tree"],
		event: false,
	},
	{ items: ["brushed teeth", "running", "work"], event: false },
	{
		items: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
		event: false,
	},
	{ items: ["lasagna", "brushed teeth", "television", "work"], event: false },
	{ items: ["cauliflower", "brushed teeth", "running", "work"], event: false },
	{ items: ["carrot", "brushed teeth", "running", "work"], event: false },
	{ items: ["carrot", "reading", "weekend"], event: false },
	{ items: ["carrot", "peanuts", "reading", "weekend"], event: true },
	{ items: ["potatoes", "brushed teeth", "running", "work"], event: false },
	{ items: ["lasagna", "ice cream", "work", "touched tree"], event: false },
	{
		items: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
		event: false,
	},
	{ items: ["pizza", "brushed teeth", "running", "work"], event: false },
	{ items: ["lettuce", "brushed teeth", "work"], event: false },
	{ items: ["bread", "brushed teeth", "television", "weekend"], event: false },
	{
		items: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
		event: false,
	},
];

jasonify(journal);