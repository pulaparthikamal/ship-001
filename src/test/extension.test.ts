import * as assert from 'assert';
import * as vscode from 'vscode';
import { templates } from '../templates';

suite('Flint Commands Test Suite', () => {
  let document: vscode.TextDocument;
  let editor: vscode.TextEditor;

  suiteSetup(async () => {
    document = await vscode.workspace.openTextDocument({ content: '', language: 'plaintext' });
    editor = await vscode.window.showTextDocument(document);
  });

  suiteTeardown(async () => {
    await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
  });

  setup(async () => {
    await editor.edit(eb => {
      const all = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length));
      eb.delete(all);
    });
    editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));
  });

  templates.forEach(t => {
    test(`flint.${t.prefix} inserts "${t.title}"`, async () => {
      await vscode.commands.executeCommand(`flint.${t.prefix}`);
      const text = document.getText();
      const firstLine = t.body.find(l => l.trim().length > 0) ?? '';
      assert.ok(text.includes(firstLine), `Template "${t.prefix}" should insert: "${firstLine}"`);
    });
  });
});
