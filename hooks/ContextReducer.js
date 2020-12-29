export function ContextReducer() {
  return (state, action) => {
    switch (action.type) {
      // later on in the example I'll add localization and we'll use the "globalLanguage" context so we'll set it up as an example.
      case 'changeGlobalLanguage':
        return {
          ...state,
          globalLanguage: action.newGlobalLanguage,
        }
      default:
        return state
    }
  }
}
