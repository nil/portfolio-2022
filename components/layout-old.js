import Nav from "./nav"

const LayoutOld = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
)

export default LayoutOld
