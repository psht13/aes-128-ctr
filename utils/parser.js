export const parseInputParams = () => {
  const { 2: action, 3: key, 4: iv, 5: text } = process.argv;

  return { action, key, iv, text };
};
