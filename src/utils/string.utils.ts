export function removeBlankSpacesAndToLowerCase(input: string): string {
    return input.toLowerCase().replaceAll(" ", "")
}