Dictionary Utility Functions
This module provides utility functions for creating dictionaries in TypeScript, along with examples of how to use them.

## createDictionaryRange
Creates a dictionary where keys are extracted from a range of source elements and values are arrays of corresponding elements from the source array.

```typescript
createDictionaryRange<TSource, TKey extends number | string>(
    source: TSource[],
    selector: (x: TSource) => TKey | keyof Dictionary<TSource[]>
): Dictionary<TSource[]>

```

Example:

```typescript
const sourceArray = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
const dictionary = createDictionaryRange(sourceArray, item => item.id);
// Output: { 1: [{ id: 1, name: "John" }], 2: [{ id: 2, name: "Alice" }] }

```
## createPropertyDictionary
Creates a dictionary where keys are extracted from a range of source elements and values are corresponding properties extracted from each source element.
```typescript
createPropertyDictionary<TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: (x: TSource) => TKey | keyof Dictionary<TSource[]>,
    propertySelector: (x: TSource) => TProperty
): Dictionary<TProperty>
```
Example:

```typescript
const sourceArray = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
const dictionary = createPropertyDictionary(sourceArray, item => item.id, item => item.name);
// Output: { 1: "John", 2: "Alice" }
```

## createPropertyRangeDictionary
Creates a dictionary where keys are extracted from a range of source elements and values are arrays of corresponding properties extracted from each source element.

```typescript
createPropertyRangeDictionary<TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: (x: TSource) => TKey | keyof Dictionary<TSource[]>,
    propertySelector: (x: TSource) => TProperty
): Dictionary<TProperty[]>
```
Example:

```typescript
const sourceArray = [{ id: 1, name: "John" }, { id: 1, name: "Alice" }];
const dictionary = createPropertyRangeDictionary(sourceArray, item => item.id, item => item.name);
// Output: { 1: ["John", "Alice"] }
```

## createPropertyRangeDistinctDictionary
Creates a dictionary where keys are extracted from a range of source elements and values are arrays of distinct properties extracted from each source element.

```typescript
createPropertyRangeDistinctDictionary<TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: (x: TSource) => TKey | keyof Dictionary<TSource[]>,
    propertySelector: (x: TSource) => TProperty
): Dictionary<TProperty[]>
```
Example:

```typescript
const sourceArray = [{ id: 1, name: "John" }, { id: 1, name: "Alice" }];
const dictionary = createPropertyRangeDistinctDictionary(sourceArray, item => item.id, item => item.name);
// Output: { 1: ["John", "Alice"] }
```

## createDictionary
Creates a dictionary where keys are extracted from a range of source elements and values are the corresponding elements from the source array.

```typescript
createDictionary<TSource, TKey extends number | string>(
    source: TSource[],
    selector: (x: TSource) => TKey | keyof Dictionary<TSource[]>
): Dictionary<TSource>
```
Example:

```typescript
const sourceArray = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
const dictionary = createDictionary(sourceArray, item => item.id);
// Output: { 1: { id: 1, name: "John" }, 2: { id: 2, name: "Alice" } }
```

