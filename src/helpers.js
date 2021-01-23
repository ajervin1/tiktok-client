const axios = require('axios')



export async function downloadDataUrl (blob) {
	
	const reader = new FileReader()
	reader.readAsDataURL(blob)
	
	return new Promise(resolve => {
		reader.onload = () => {
			resolve(reader.result)
		}
	})
}
