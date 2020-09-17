import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => { //empty but has a function.  keeps program from crashing.  like the broken volume control of unit one of factory

  }, 
})

export default LanguageContext
