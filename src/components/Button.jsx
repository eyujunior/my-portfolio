// import PropTypes from 'prop-types'
const Button = ({ children, addons }) => {
  return (
    <Button className={`${addons} border-none px-6 py-2`}>{children}</Button>
  )
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   addons: PropTypes.string.isRequired,
// }

export default Button
