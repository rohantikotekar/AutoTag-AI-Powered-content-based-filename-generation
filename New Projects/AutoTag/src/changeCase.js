// this module handles cases of the file name, default case is kebab-case

module.exports = async ({ text, _case }) => {
  const changeCase = await import('change-case') // this is a js module object that is immutable

  try {
    return changeCase[_case](text)
  } catch (err) {
    return changeCase.kebabCase(text)
  }
}
