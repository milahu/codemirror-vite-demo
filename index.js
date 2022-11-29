/*
https://codemirror.net/examples/bundle/
*/

const doc = `\
/*
https://codemirror.net/examples/bundle/
*/

const doc = "..."

import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

let editor = new EditorView({
  extensions: [
    basicSetup,
    javascript(),
  ],
  parent: document.body,
  doc,
})

console.log("editor", editor)
`

import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

let editor = new EditorView({
  extensions: [
    basicSetup,
    javascript(),
  ],
  parent: document.body,
  doc,
})

console.log("editor", editor)
