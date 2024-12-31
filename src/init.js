const nodeDefault = require('./node/nodeDefault');
const prompts = require('prompts');

const init = async () => {
	const projectTemplate = process.argv.slice(2)[0];
	const projectName = process.argv.slice(2)[1];

	if (projectTemplate === 'node') {
		const response = await prompts([
			{
				type: 'select',
				name: 'value',
				message: 'Select your node application',
				choices: [
					{
						title: 'Default',
						description: 'The default node application',
						value: 'nodeDefault',
					},
				],
				initial: 0,
			},
		]);
		if (response.value === 'nodeDefault') {
			nodeDefault({ projectName });
		}
	}
};

module.exports = init;
