/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else if (nums.length === 1) {
    return nums[0];
  }
  
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else if (longest(words.slice(1)) > words[0].length) {
    return longest(words.slice(1));
  } else {
    return words[0].length;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    if (findIndex(arr.slice(1), val) === -1) {
      return -1;
    }
    return 1 + findIndex(arr.slice(1), val);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return '';
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    if (arr[0] === val) {
      return 0;
    } else {
      return -1;
    }
  } else if (arr[arr.length / 2] === val) {
    return Math.floor(arr.length / 2);
  } else if (arr[arr.length / 2] > val) {
    return binarySearch(arr.slice(0, arr.length / 2), val);
  } else {
    let result = binarySearch(arr.slice(arr.length / 2), val);
    if (result === -1) {
      return -1;
    } else {
      return result + Math.floor(arr.length / 2);
    }
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
