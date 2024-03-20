export interface Dictionary<TValue> {
    [Key: string | number]: TValue
}

export const createDictionaryRange = <TSource, TKey extends number | string>(source: TSource[], selector: ((x: TSource) => TKey | keyof Dictionary<TSource[]>)): Dictionary<TSource[]> => {
    const newDictionary: Dictionary<TSource[]> = {}

    for (let index = 0; index < source.length; index++) {
        const sourceElement = source[index];
        const localKey = selector(sourceElement);
        if (!newDictionary[localKey]) {
            // let newTSourceArray : TSource[] = []
            newDictionary[localKey] = []
        }
        newDictionary[localKey].push(sourceElement);
    }
    return newDictionary;
}
//TODO adicionar documentacao de ocmo utilizar metodos
export const createPropertyDictionary = <TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: ((x: TSource) => TKey | keyof Dictionary<TSource[]>),
    propertySelector: ((x: TSource) => TProperty)):
    Dictionary<TProperty> => {
    const newDictionary: Dictionary<TProperty> = {}

    for (let index = 0; index < source.length; index++) {
        const sourceElement = source[index];
        const localKey = keySelector(sourceElement);
        // if (!newDictionary[localKey]) newDictionary[localKey] = {}
        newDictionary[localKey] = propertySelector(sourceElement);
    }
    return newDictionary;
}
export const createPropertyRangeDictionary = <TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: ((x: TSource) => TKey | keyof Dictionary<TSource[]>),
    propertySelector: ((x: TSource) => TProperty)):
    Dictionary<TProperty[]> => {
    const newDictionary: Dictionary<TProperty[]> = {}

    for (let index = 0; index < source.length; index++) {
        const sourceElement = source[index];
        const localKey = keySelector(sourceElement);
        if (!newDictionary[localKey]) newDictionary[localKey] = []
        newDictionary[localKey].push(propertySelector(sourceElement));
    }
    return newDictionary;
}

export const createPropertyRangeDistinctDictionary = <TSource, TProperty extends PropertyKey, TKey extends number | string>(
    source: TSource[],
    keySelector: ((x: TSource) => TKey | keyof Dictionary<TSource[]>),
    propertySelector: ((x: TSource) => TProperty)):
    Dictionary<TProperty[]> => {
    const newDictionary: Dictionary<TProperty[]> = {}

    for (let index = 0; index < source.length; index++) {
        const sourceElement = source[index];
        const localKey = keySelector(sourceElement);
        if (!newDictionary[localKey]) {
            newDictionary[localKey] = [];
        }
        // Check if the property already exists in the array for this key
        if (!newDictionary[localKey].includes(propertySelector(sourceElement))) {
            newDictionary[localKey].push(propertySelector(sourceElement));
        }
    }
    return newDictionary;
}


export const createDictionary = <TSource, TKey extends number | string>(source: TSource[], selector: ((x: TSource) => TKey | keyof Dictionary<TSource[]>)): Dictionary<TSource> => {
    const newDictionary: Dictionary<TSource> = {}
    if (source == null) return newDictionary;
    for (let index = 0; index < source.length; index++) {
        const sourceElement = source[index];
        const localKey = selector(sourceElement);
        newDictionary[localKey] = sourceElement;
    }
    return newDictionary;
}
