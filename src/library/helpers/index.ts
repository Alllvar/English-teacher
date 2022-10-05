export const shuffle = (array: any[]) => {
  let currentIndex = array.length; let
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const cloneDeep = (obj: object) => JSON.parse(JSON.stringify(obj));
