export function calculateElapedPostTime(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  const hour = Math.abs(Math.round(diff));
  if (hour == 0) {
    return 'posted less than 1 hour ago.';
  } else if (hour <= 24) {
    // less than one day ago, show hours
    return `posted ${hour} hours ago.`;
  } else if (hour < 720) {
    // less than 1 month ago, show days
    return `posted ${Math.round(hour / 24)} days ago.`;
  } else if (hour < 8640) {
    // less than 1 year ago, show months
    return `posted ${Math.round(hour / 720)} months ago.`;
  } else {
    // more than one year
    return `posted ${Math.round(hour / 8640)} years ago.`;
  }
}
export const setSearchParamsHandler = (setSearchParams, queryParamsObj) => {
  let tmp = {};

  const keys = Object.keys(queryParamsObj);
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

export const editQuestionValidator = (oldQuestion, newQuestion) => {
  const MAX_CHANGES = 5;
  const newWords = newQuestion.split(' ');
  const oldWords = oldQuestion.split(' ');

  const oldWordsMap = {};

  for (let el of oldWords) {
    if (el in oldWordsMap) oldWordsMap[el] += 1;
    else oldWordsMap[el] = 1;
  }

  let changes = 0;
  for (let el of newWords) {
    if (el in oldWordsMap) {
      oldWordsMap[el] -= 1;
      if (oldWordsMap[el] === 0) delete oldWordsMap[el];
    } else {
      changes += 1;
    }
  }
  return changes <= MAX_CHANGES;
};
