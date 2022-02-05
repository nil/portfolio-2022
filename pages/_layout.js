import Language from "../components/language.js"
import Nav from "../components/nav.js"

const LayoutOld = ({ children }) => {
  return (
    <>
      <Nav />
      <Language />
      {children}
    </>
  )
}

export default LayoutOld
