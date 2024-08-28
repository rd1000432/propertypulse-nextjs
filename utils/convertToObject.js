// Addressing this warning: 'Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported.'
// check each object for toJSON and toString methods and set it to the string version with toString()
export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }

  return leanDocument;
}
