import logo from "../../assets/images/logos/ahia-logo.png"


const NavbarTop = () => {
    return (
      <div className=" flex items-center bg-primary fixed top-0 left-0 w-full p-4 pb-2 justify-between z-30 h-14">
        <h2 className="text-[#f6f7f8] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
          <img src={logo} alt="" className="h-40 w-40"/>
        </h2>

        <div className="flex w-12 items-center justify-end gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#0c1d19] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <div
              className="text-[#f6f7f8]"
              data-icon="UserCircle"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm0,40a32,32,0,1,1-32,32A32,32,0,0,1,128,64Zm0,160a87.73,87.73,0,0,1-64.23-27.28,8,8,0,0,1,11.46-11.17,72,72,0,0,1,105.54,0,8,8,0,1,1,11.46,11.17A87.73,87.73,0,0,1,128,224Z"></path>
              </svg>
            </div>
          </button>

          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#0c1d19] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <div
              className="text-[#f6f7f8]"
              data-icon="ShoppingCart"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
}

export default NavbarTop