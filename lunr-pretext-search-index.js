var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name.ptx",
  "level": "1",
  "url": "sec-section-name.ptx.html",
  "type": "Section",
  "number": "1.1",
  "title": "The idea of a limit",
  "body": " The idea of a limit  words go here  "
},
{
  "id": "sec-limits-algebra",
  "level": "1",
  "url": "sec-limits-algebra.html",
  "type": "Section",
  "number": "1.2",
  "title": "Limits with Algebra",
  "body": " Limits with Algebra  words  "
},
{
  "id": "sec-section-defnderivative",
  "level": "1",
  "url": "sec-section-defnderivative.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of Derivative",
  "body": " Definition of Derivative  Suppose for the function we want to find   hi  there   a list   one  two       "
},
{
  "id": "sec-section-chat",
  "level": "1",
  "url": "sec-section-chat.html",
  "type": "Section",
  "number": "2.2",
  "title": "section-chat",
  "body": " section-chat  In this section, we will discuss how to rewrite a given logarithmic expression as a sum or difference of logarithms and express all powers as factors. Consider the expression:  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
