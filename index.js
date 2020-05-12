const axios = require('axios');

async function main(url) {
	let results = [];

	let res = await axios.get(url, {
		headers: {
			accept: 'application/json',
			'accept-language': 'en-US,en;q=0.9',
			pragma: 'no-cache',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-angi-anonymousid': '215a9db8-fe8b-415a-7535-597a2fc778b8',
			'x-angi-applicationversion': '1.1.0',
			'x-angi-callerid': '79351237',
			'x-angi-callertype': 'Member',
			'x-angi-entrypointid': '34103542',
			'x-angi-marketingcloudvisitorid': '83266801249885083401588063845666855220',
			'x-angi-proxyversion': '1',
			'x-angi-requestid': 'e9c9b3a2-9486-11ea-917e-47bf8d6d0426',
			'x-angi-sourceapplication': 'member-app',
			'x-angi-taxonomyname': 'Ad Platform'
		},
		referrer: 'https://member.angieslist.com/member/store/25082296/deals?categoryId=77',
		referrerPolicy: 'no-referrer-when-downgrade',
		body: null,
		method: 'GET',
		mode: 'cors',
		credentials: 'include'
	});

	let data = {
		url: res.config.referrer,
		zip: res.data.primaryAddress.postalCode,
		businessName: res.data.name,
		dateJoined: res.data.joinedAt,
		phoneNumber: res.data.primaryContactInfo.primaryPhoneNumber.original
	};

	results.push(data);
	console.log(results);
}

function createUrl(id) {
	let url = `https://member.angieslist.com/gateway/service-provider-profile/v4/service_provider/${id}?zipCode=11207&categoryId=77`;

	return url;
}

main(createUrl(25082300));
