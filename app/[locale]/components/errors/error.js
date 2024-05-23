import { RiErrorWarningLine } from "react-icons/ri";

const ErrorMessage = ({message}) => {
  return (
    <div role="alert" className="alert flex">
    <RiErrorWarningLine/>
    <span>{message}</span>
  </div>
  )
}

export default ErrorMessage