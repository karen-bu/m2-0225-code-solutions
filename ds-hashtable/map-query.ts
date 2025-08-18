import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */

// You will need to split the query string into words and find the documents that contain one or more of the words.

export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const querySet = new Set<Document>();

  const queryWords = query.toLowerCase().match(/\b(\w+)\b/g);
  if (!queryWords) return querySet;

  for (let i = 0; i < queryWords?.length; i++) {
    const queryWordExists = index.has(queryWords[i]);

    if (queryWordExists) {
      const matchingDocuments = index.get(queryWords[i]);
      if (!matchingDocuments) continue;
      matchingDocuments.forEach((document) => querySet.add(document));
    } else continue;
  }

  return querySet;
}
