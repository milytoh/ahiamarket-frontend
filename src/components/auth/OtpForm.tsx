import react from "react"

import OtpInput from "./OtpInput" 


interface OtpData {
  onCloseOtForm: () => void
}

const OtpForm: react.FC<OtpData> = ({onCloseOtForm}) => {

    return (
      <form> 
           <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 "
        id="otp-modal"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
            Verify Your Email
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent a One-Time Password to your email. Please enter it below.
          </p>
          <div className="flex justify-center gap-2 mb-6">
           <OtpInput maxLength= {1}/> 
           <OtpInput maxLength= {1}/> 
           <OtpInput maxLength= {1}/> 
           <OtpInput maxLength= {1}/> 
           <OtpInput maxLength= {1}/> 
           <OtpInput maxLength= {1}/> 
           
          </div>
          <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition duration-300 ease-in-out">
            Verify
          </button>
          <button
            className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:underline"
              id="close-modal"
              onClick={onCloseOtForm}
          >
            Cancel
          </button>
        </div>
      </div>

      </form>
    )
}

export default OtpForm