const getPromptResponses = require('./getPromptResponses');
const confirm = require('./confirm');

const nodeDefault = async promptsData => {
	try {
		const responses = await getPromptResponses(promptsData);
		console.log('🚀 ~ nodeDefault ~ responses:', responses);
		await confirm(responses);
	} catch (error) {
		console.log('🚀 ~ nodeDefault ~ error:', error);
	}
};

module.exports = nodeDefault;
