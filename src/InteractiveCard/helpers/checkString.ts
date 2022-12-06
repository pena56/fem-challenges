export default function containsOnlyNumbers(str: string): boolean {
  // This regex pattern matches any string that contains only digits (0-9)
  const regex = /^\d+$/;

  // Use the regex pattern to test the input string
  return regex.test(str);
}
