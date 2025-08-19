import { DocumentSpan } from 'typescript';

export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const documentIndex = new Map<string, Set<Document>>();

  for (let i = 0; i < docs.length; i++) {
    const documentWords = docs[i].content.toLowerCase().match(/\b(\w+)\b/g);
    if (!documentWords) continue;

    for (let j = 0; j < documentWords?.length; j++) {
      if (!documentIndex.has(documentWords[j])) {
        const newSet = new Set<Document>();
        newSet.add(docs[i]);
        documentIndex.set(documentWords[j], newSet);
      } else {
        const existingSet = documentIndex.get(documentWords[j]);
        if (!existingSet) continue;
        const exists = existingSet.has(docs[i]);
        if (!exists) {
          existingSet.add(docs[i]);
          documentIndex.set(documentWords[j], existingSet);
        }
      }
    }
  }

  return documentIndex;
}
