const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const writePackageJson = packageJsonData => {
	const tmplDir = path.join(__dirname, 'templates/nodeDefault');
	const destDir = process.cwd();

	fs.readdir(tmplDir, (err, files) => {
		if (err) throw err;

		files.forEach(async file => {
			// 通过模版引擎渲染文件
			const defaultJson = await ejs.renderFile(
				path.join(tmplDir, file),
				packageJsonData
			);

			fs.writeFileSync(path.join(destDir, file), defaultJson);
		});
	});
};

module.exports = writePackageJson;
