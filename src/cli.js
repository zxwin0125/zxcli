const { Command } = require('commander');
const { name, version, description } = require('../package.json'); // 包含描述信息
const init = require('./init');

const program = new Command(name)
	.version(version, '-v, --version', 'output the current version')
	.description(description);

program
	.command('<template> [project]', 'Create a new project from a template')
	.action(init);

// 处理未知命令
program.on('command:*', () => {
	console.error(
		'Invalid command: %s\nSee --help for a list of available commands.',
		program.args.join(' ')
	);
	process.exit(1);
});

// 解析命令行参数
program.parse();
