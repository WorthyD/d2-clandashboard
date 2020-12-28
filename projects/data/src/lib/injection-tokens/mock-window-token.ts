export const NO_WINDOW_MOCK = {
  fetch: () => {
    console.log('alert');
    return null;
  }
};
