//inspired from https://eloquentjavascript.net/04_data.html

// disables the "Enter" keypress action only for input type='text'
window.addEventListener(
	"keydown",
	function (e)
	{
		if (
			e.keyIdentifier == "U+000A" ||
			e.keyIdentifier == "Enter" ||
			e.keyCode == 13
		)
		{
			if (e.target.nodeName == "INPUT" && e.target.type == "text")
			{
				e.preventDefault();
				return false;
			}
		}
	},
	true
);

/*------------------------------------------

		Listeners	
		
-------------------------------------------*/

var phiButton = document.getElementById("phiButton");
phiButton.addEventListener("click", function ()
{
	phi(tableFor(document.getElementById("itemInput").value, journal));
});

var newEntryButton = document.getElementById("newEntryButton");
newEntryButton.addEventListener("click", function ()
{
	addEntry(
		document.getElementById("itemsEntry").value.split(", "),
		document.getElementById("eventEntry").checked
	);
});

document.getElementById("correlationsListButton").onclick = listCorrelations;

/*------------------------------------------

		variable declaration	
		
-------------------------------------------*/

var journal = [];

/*------------------------------------------

		Core functions	
		
-------------------------------------------*/

function addEntry(items, event)
{
	journal.push({ items, event });
	console.log(journal);
	//careful, items is a string but the "includes" function is capable of matching a string... which turns this string kind of like an data-structure (an array in particular)
	//console.log(journal[journal.length-1].items[items.length-1])
}

//calculates a correlation coefficient
function phi(table)
{
	let phi =
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
			(table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[1] + table[3]) *
			(table[0] + table[2])
		);
	document.getElementById("phi").innerHTML = "correlation is " + phi;
	return Number.parseFloat(phi).toPrecision(2);
}

function tableFor(item, journal)
{
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++)
	{
		let entry = journal[i],
			index = 0;
		//careful, items is a string but the "includes" function is capable of matching a string... which turns this string kind of like an data-structure (an array in particular)
		if (entry.items.includes(item))
		{
			index += 1;
		}
		if (entry.event)
		{
			index += 2;
		}
		table[index] += 1;
	}
	document.getElementById("table").innerHTML = `
	for the item ${item} among ${itemList(journal)} : 
	<table class="table table-bordered">
		<thead class="thead-light">
			<tr>
				<th scope="col">#</th>
				<th scope="col">No ${item}</th>
				<th scope="col">${item}</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">No event</th>
				<td>${table[0]}</td>
				<td>${table[1]}</td>
			</tr>
			<tr>
				<th scope="row">event</th>
				<td>${table[2]}</td>
				<td>${table[3]}</td>
			</tr>
		</tbody>
	</table>
  `;
	return table;
}

function itemList(journal)
{
	let items = [];
	for (let entry of journal)
	{
		for (let item of entry.items)
		{
			if (!items.includes(item))
			{
				items.push(item);
			}
		}
	}
	return items;
}

function listCorrelations()
{
	let items = itemList(journal);
	items.sort();
	document.getElementById("other").innerHTML = "";
	for (let item of items)
	{
		let correlation = phi(tableFor(item, journal));
		if (correlation > 0.1 || correlation < -0.1)
		{
			var other = document.createElement("div");
			other.innerHTML = item + ":" + correlation;
			document.getElementById("other").appendChild(other);
		}
	}
}

/*------------------------------------------

		Data management	
	cf. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON	
-------------------------------------------*/
let request = new XMLHttpRequest();
request.open('GET', 'myJournal.json');
request.responseType = 'json';
request.send();
request.onload = function ()
{
	journal = request.response;
	console.log(journal);
}


function jasonify(journal)
{ 
 for (let entry of journal)
  {
	  let entriesJSON = JSON.stringify(entry)
  } 
 	let entryJSON = JSON.stringify(journal);
	console.log(entryJSON);

	//reverse !
	console.log(JSON.parse(entryJSON));
}