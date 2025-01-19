/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import Code from "@tiptap/extension-code";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useCallback } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  FileImage,
  Heading1,
  Heading2,
  Highlighter,
  Italic,
  Link2Off,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  TextQuote,
  UnderlineIcon,
  Undo2,
} from "lucide-react";

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    try {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e: any) {
      alert(e.message);
    }
  }, [editor]);

  const getButtonClass = (isActive: boolean) =>
    `p-1 rounded-md border ${
      isActive ? "bg-slate-300 text-black" : "bg-slate-100 text-gray-700"
    } hover:bg-slate-500 hover:text-white transition-colors duration-200`;

  return (
    <div className="flex space-x-2 justify-start mb-4">
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={getButtonClass(editor.isActive({ textAlign: "left" }))}
      >
        <AlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={getButtonClass(editor.isActive({ textAlign: "center" }))}
      >
        <AlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={getButtonClass(editor.isActive({ textAlign: "right" }))}
      >
        <AlignRight />
      </button>
      <button
        className={getButtonClass(editor.isActive("underline"))}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon />
      </button>
      <button
        className={getButtonClass(editor.isActive("highlight"))}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
      >
        <Highlighter />
      </button>
      <button
        type="button"
        className={getButtonClass(editor.isActive("link"))}
        onClick={setLink}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-link"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </button>
      <button
        className={getButtonClass(false)}
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <Link2Off />
      </button>
      <button
        className={getButtonClass(editor.isActive("code"))}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <Code2 />
      </button>
      <button
        className={getButtonClass(editor.isActive("blockquote"))}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TextQuote />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={getButtonClass(editor.isActive("bold"))}
      >
        <Bold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={getButtonClass(editor.isActive("italic"))}
      >
        <Italic />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={getButtonClass(editor.isActive("strike"))}
      >
        <Strikethrough />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={getButtonClass(editor.isActive("heading", { level: 1 }))}
      >
        <Heading1 />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={getButtonClass(editor.isActive("heading", { level: 2 }))}
      >
        <Heading2 />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={getButtonClass(editor.isActive("bulletList"))}
      >
        <List />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={getButtonClass(editor.isActive("orderedList"))}
      >
        <ListOrdered />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={getButtonClass(false)}
      >
        Line
      </button>
      <button className="border p-0.5 rounded-md" onClick={addImage}>
        <FileImage />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className={getButtonClass(false)}
      >
        <Undo2 />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className={getButtonClass(false)}
      >
        <Redo2 />
      </button>
    </div>
  );
};

const RichTextEditor = ({ setBlogDescription, initialContent = "" }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Underline,
      Code,
      TextAlign.configure({
        types: ["paragraph", "heading", "listItem"],
      }),
      Link,
      Highlight,
      Blockquote.configure({
        HTMLAttributes: {
          class: "border-l-4 pl-2",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl font-bold",
        },
      }),
      ListItem,
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-6",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-6",
        },
      }),
    ],
    content: initialContent, // Initialize the editor content
    onUpdate({ editor }) {
      const htmlContent = editor.getHTML(); // Get HTML whenever content changes
      setBlogDescription(htmlContent);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm h-[200px] p-4 border border-gray-300 rounded-md focus:outline-none bg-white dark:bg-gray-800",
      },
    },
  });

  return (
    <div className="mx-auto mt-8">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
