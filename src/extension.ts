import * as vscode from 'vscode';
import { templates } from './templates';

export function activate(context: vscode.ExtensionContext) {

  // ─── 1. Slash Completion Provider — type /feat, /dbg etc in ANY file ──────
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    { scheme: 'file' },
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const lineText = document.lineAt(position).text;
        const textBeforeCursor = lineText.substring(0, position.character);

        // Match "/word" pattern — must start with /
        const match = textBeforeCursor.match(/\/(\w*)$/);
        if (!match) { return []; }

        const typedPrefix = match[1].toLowerCase();
        const slashStart = position.character - match[0].length;

        return templates
          .filter(t => typedPrefix === '' || t.prefix.startsWith(typedPrefix))
          .map(t => {
            const item = new vscode.CompletionItem(
              { label: `/${t.prefix}`, description: t.description },
              vscode.CompletionItemKind.Snippet
            );
            item.detail = t.title;
            item.documentation = new vscode.MarkdownString(
              `**${t.title}**\n\n\`\`\`\n${t.body.filter(l => l.trim()).join('\n')}\n\`\`\``
            );
            // Replace the /prefix text with the template body
            item.insertText = new vscode.SnippetString(t.body.join('\n'));
            item.filterText = `/${t.prefix}`;
            item.sortText = `0_${t.prefix}`;
            item.preselect = true;
            item.range = new vscode.Range(
              new vscode.Position(position.line, slashStart),
              position
            );
            return item;
          });
      }
    },
    '/' // triggered when user types /
  );

  context.subscriptions.push(completionProvider);

  // ─── 2. Helper — insert template at cursor ────────────────────────────────
  const insertTemplate = (body: string[]): Thenable<boolean> => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor found.');
      return Promise.resolve(false);
    }
    return editor.insertSnippet(
      new vscode.SnippetString(body.join('\n')),
      editor.selection.active
    );
  };

  // ─── 3. Command Palette — Flint: <name> for all 20 templates ─────────────
  templates.forEach(t => {
    const disposable = vscode.commands.registerCommand(`flint.${t.prefix}`, () => {
      return insertTemplate(t.body);
    });
    context.subscriptions.push(disposable);
  });
}

export function deactivate() {}
