const prompts = require('prompts');

const getPromptResponses = async promptsData => {
	const questions = [
		{
			type: 'text',
			name: 'packageName',
			message: 'package name',
			initial: promptsData.projectName,
		},
		{
			type: 'text',
			name: 'version',
			message: 'version',
			initial: '0.1.0',
		},
		{
			type: 'text',
			name: 'description',
			message: 'description',
		},
		{
			type: 'text',
			name: 'entryFile',
			message: 'entry point',
			initial: 'index.js',
		},
		{
			type: 'text',
			name: 'testCommand',
			message: 'test command',
		},
		{
			type: 'text',
			name: 'gitUrl',
			message: 'git repository',
		},
		{
			type: 'text',
			name: 'keywords',
			message: 'keywords',
		},
		{
			type: 'text',
			name: 'author',
			message: 'author',
		},
		{
			type: 'text',
			name: 'license',
			message: 'license',
			initial: 'ISC',
		},
	];
	return await prompts(questions, { initial: promptsData });
};

module.exports = getPromptResponses;
