document.getElementById('save-button').addEventListener('click', () => {
	// input search data
	const getting_input = document.getElementById('input-main').value;
	// main div container
	const mainContainer = document.getElementById('containerMe');

	//..................................................................
	// //fish fetch aleart-text
	if (getting_input) {
		loading_data();
		fetch(
			`https://openapi.programming-hero.com/api/phones?search=${getting_input}`
		)
			.then(response => response.json())
			.then(dataMe => Fish(dataMe.data, mainContainer));
	} else {
		emptySearchResult();
		mainContainer.textContent = '';
	}
});

function Fish(datMe, mainContainer) {
	// Erase previous data
	mainContainer.textContent = '';

	if (datMe === null) {
		null_value();
	} else {
		datMe.forEach(dat => {
			const innerDiv = document.createElement('div');

			innerDiv.classList.add('col');
			innerDiv.classList.add('elementMe');

			let hh = '50';

			innerDiv.innerHTML = `				
					<div class="card" style="width: 18rem">
						<img
							class="card-img-top"
							src=${dat.image}
							alt="Card image cap"
						/>
						<div class="card-body">
							<p class="card-text my-c-text">
								<span>Name: ${dat.phone_name}</span>
								<span> Catagory: ${dat.slug}</span>
							</p>
						</div>
						 <button class="btn btn-info" onclick="showAll((${dat.phone_name})=>{})">Click me</button> 
					</div>
				`;

			mainContainer.appendChild(innerDiv);

			//console.log(iterator.address.geo.lat);
		});
		loading_data_hide();

		// result found that is why aleart text will be display gone
		HideAleartText();
	}
}

// show all
function showAll(phoneName) {
	console.log(phoneName);
}

// if empty search result
function emptySearchResult() {
	document.getElementById('aleart-text').style.display = 'block';
	document.getElementById('aleart-text').innerText = 'Empt Search result';
}
// if null or invalid data found
function null_value() {
	document.getElementById('aleart-text').style.display = 'block';
	document.getElementById('aleart-text').innerText = 'Invlid data';
}
// Loading
function loading_data() {
	document.getElementById('aleart-text').style.display = 'block';
	document.getElementById('aleart-text').innerText = 'Loading.....';
}
// Loading close
function loading_data_hide() {
	document.getElementById('aleart-text').style.display = 'none';
}
function HideAleartText() {
	document.getElementById('aleart-text').style.display = 'none';
}

//  user function
function UserMe(datMe) {
	const mainContainer = document.getElementById('containerMe');

	datMe.forEach(dat => {
		const innerDiv = document.createElement('div');

		innerDiv.classList.add('col');
		innerDiv.classList.add('elementMe');

		innerDiv.innerHTML = `				
					<div class="card" style="width: 38rem">
						<img
							class="card-img-top"
							src="img/calculate_pic.jpg"
							alt="Card image cap"
						/>
						<div class="card-body">
							<p class="card-text my-c-text">
								<span>${dat.address.geo.lat}</span>
								<span>${dat.address.geo.lng}</span>
							</p>
						</div>
					</div>
				`;

		mainContainer.appendChild(innerDiv);

		//console.log(iterator.address.geo.lat);
	});
}
