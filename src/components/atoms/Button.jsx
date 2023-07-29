import { classNames } from '../../util/util'

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={classNames('btn', className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
