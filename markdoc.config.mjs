import { defineMarkdocConfig } from "@astrojs/markdoc/config";
import CodeBlock from "./src/components/CodeBlock.astro";

export default defineMarkdocConfig({
  tags: {
    codeblock: {
      render: CodeBlock,
      attributes: {
        filepath: { type: String },
      }
    }
  }
});
