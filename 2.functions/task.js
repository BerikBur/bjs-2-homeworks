function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
    sum += num;
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  
  function callback(accumulator, currentValue) {
    return accumulator + currentValue;
  }

  return arr.reduce(callback, initialValue);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  return maxValue - minValue;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  function callback(currentValue) {
    if (currentValue % 2 === 0) {
      sumEvenElement += currentValue;
    } else {
      sumOddElement += currentValue;
    }
  }

  arr.forEach(callback);

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  function callback (value) {
    if (value % 2 === 0) {
      sumEvenElement += value;
      countEvenElement += 1;
    }
  }

  arr.forEach(callback);

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  function callback (currentValue) {
    return func(...currentValue);
  }

  maxWorkerResult = Math.max(...arrOfArr.map(callback));
  return maxWorkerResult;
}
