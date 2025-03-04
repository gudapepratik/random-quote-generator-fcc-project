import { useState } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = `# Markdown Previewer
## Type Markdown and see the preview!
- List Item 1
- List Item 2
\`\`\`js
console.log("Hello, world!");
\`\`\`
[Google](https://google.com)
> Blockquote
**Bold Text**
`;

export default function App() {
  const [text, setText] = useState(defaultMarkdown);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    </div>
  );
}
