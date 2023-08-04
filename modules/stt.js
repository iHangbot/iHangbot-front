import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { toByteArray } from 'base64-js';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const url = 'https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor';

export default async function stt(fileUri) {
	try {
		const fileInfo = await FileSystem.getInfoAsync(fileUri);

		if (fileInfo.exists) {
			const fileContent = await FileSystem.readAsStringAsync(fileUri, {
				encoding: FileSystem.EncodingType.Base64
			});

			// 디코딩
			const binaryData = toByteArray(fileContent);

			try {
				const response = await axios
				.post(url, binaryData, {
					headers: {
						'Content-Type': 'application/octet-stream',
						'X-NCP-APIGW-API-KEY-ID': clientId,
						'X-NCP-APIGW-API-KEY': clientSecret,
					}
				});
				return response.data;
			} catch (error) {
				console.error(error);
				return { text: error };
			}
		}
	} catch (error) {
			console.log(error);
			return { text: error };
	}
}