export const setSearchParamsHandler = (setSearchParams, queryParamsObj) => {
  let tmp = {};

  const filteredSearchParams = filterUnneededValues(queryParamsObj);
  const keys = Object.keys(filteredSearchParams);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const searchElement = queryParamsObj[key];
    if (Array.isArray(searchElement)) {
      tmp[key] = searchElement.join(',');
      continue;
    }
    if (typeof searchElement === 'boolean') {
      tmp[key] = searchElement;
      continue;
    }
    tmp[key] = searchElement;
  }
  setSearchParams(tmp);
  return tmp;
};

export const decodeQueryParams = (searchParams) => {
  const allSearchValues = {};
  searchParams.forEach((value, key) => {
    if (value === null || value === '') return;

    switch (key) {
      case 'complexity':
      case 'tags':
        value = value.split(',');
        break;
      case 'questionRating':
        value = value.split(',').map((number) => +number);
        break;
      case 'favorite':
      case 'hardToGoogle':
        value = value !== null && value === 'true';
        break;
      case 'search':
        break;
      default:
        console.log(`unsupported key: ${key}`);
    }
    allSearchValues[key] = value;
  });

  if (!Object.keys(allSearchValues)) return false;

  return allSearchValues;
};

//returns obj without empty arrays, empty strings, false booleans
export const filterUnneededValues = (searchObj) => {
  let tmp = {};
  const keys = Object.keys(searchObj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const searchElement = searchObj[key];
    if (Array.isArray(searchElement)) {
      if (searchElement.length > 0) {
        tmp[key] = searchElement;
      }
      continue;
    }
    if (typeof searchElement === 'boolean') {
      if (searchElement) {
        tmp[key] = searchElement;
      }
      continue;
    }
    if (searchElement !== '') {
      tmp[key] = searchElement;
    }
  }
  return tmp;
};
