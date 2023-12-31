import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import qs from 'qs';

const clientId = '2sv6dmy26a';
const clientSecret = 'd5yaxtiNEGNuH4ZN7m7Io0lFPLjeFeOibeKmEgXn';
const url = 'https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts';

export default async function tts(chatResponse) {
	try {
		const formData = { 
			speaker: 'nhajun',
			volume: '0', 
			speed: '-1', 
			pitch: '0', 
			text: chatResponse, 
			format: 'mp3' 
		};
				
		try {
			const response = await axios
			.post(url, qs.stringify(formData), {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'X-NCP-APIGW-API-KEY-ID': clientId,
					'X-NCP-APIGW-API-KEY': clientSecret,
				},
				responseType: 'arraybuffer',
			});
			const data = response.request._response;
			const fileUri = FileSystem.documentDirectory + 'chatResponse.mp3'; 

			await FileSystem.writeAsStringAsync(fileUri, data, { encoding: FileSystem.EncodingType.Base64 });
			return fileUri;
		} catch (error) {
				// console.error(error);
				return { text: error };
		}
	} catch (error) {
		// console.log(error);
		return { text: error };
	}
}