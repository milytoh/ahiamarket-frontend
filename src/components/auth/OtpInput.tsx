import react from "react"

interface OtpData {
    maxLength: number
}

const OtpInput: react.FC<OtpData> = ({maxLength, ...props}) => {
    return (
         <input
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg border border-gray-300 dark:border-gray-700 focus:border-accent focus:ring-accent form-input"
              maxLength= {maxLength}
              type="text"
            />
    )
}

export default OtpInput
