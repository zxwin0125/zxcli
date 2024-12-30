import getPromptResponses from './getPromptResponses';
import confirmAndWritePackageJson from './confirm';
import { PromptsData } from './interface';

export default async function nodeDefault(promptsData: PromptsData) {
	try {
		const responses = await getPromptResponses(promptsData);
		console.log('🚀 ~ nodeDefault ~ responses:', responses);
		await confirmAndWritePackageJson(responses);
	} catch (error) {
		console.log('🚀 ~ nodeDefault ~ error:', error);
	}
}
