const cp = require('child_process');

console.log('Running PromptSpec extension functional tests via vscode-test...');
try {
	cp.execSync('npx vscode-test --verbose', { stdio: 'inherit' });
	console.log('✅ Functional tests passed successfully!');
} catch (error) {
	console.error('❌ Functional tests failed!');
	process.exit(1);
}
