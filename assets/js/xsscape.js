function sanitizeInput(inputString)
{
	const key = {
		'<' : '&lt;',
		'>' : '&gt;',
		'&' : '&amp;',
		'"' : '&quot;',
		"'" : '&#39;',
		'/' : '&#47;'
	};

	return inputString.replace(/[<>&"'\/]/g, (char) => key[char]);
}

function encodePayload(payload)
{
	const encodedPayloads = [
		{ description: 'HTML Entity Encoded', result: sanitizeInput(payload) },
		{ description: 'HTML Decimal Encoded', result: payload.split('').map(char => `&#${char.charCodeAt(0)};`).join('') },
		{ description: 'URL Encoded', result: encodeURIComponent(payload) },
		{ description: 'Base64 Encoded', result: btoa(payload) },
		{ description: 'Hexadecimal Encoded', result: payload.split('').map(char => '%' + char.charCodeAt(0).toString(16)).join('') },
		{ description: 'Unicode Encoded', result: payload.split('').map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join('') }
	];

	return encodedPayloads;
}

function convertPayload()
{
	const input = document.getElementById('input').value;
	const output = document.getElementById('output');
	const encoded = encodePayload(input);

	output.textContent = '';

	encoded.forEach((format) => {
		output.textContent += `${format.description}:\n${format.result}\n\n`;
	});
}