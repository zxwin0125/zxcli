#!/usr/bin/env node

// 命令行强制走编译版本
const wantsCompiled = process.argv.slice(2).indexOf('--compiled-build') >= 0;

if (wantsCompiled) {
	// 生产环境
	require('../lib/cli');
} else {
	// dev 环境
	require('../src/cli');
}
