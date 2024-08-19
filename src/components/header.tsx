

const Header = () => {

    return (
        <div className="bg-white shadow-box-shadow-call z-20">
            <div className="max-w-screen-xl mx-auto py-3 px-4 xl:px-0">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="h-10" alt="bhive logo" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/bhive-logo.png`} />
                    </div>
                    <div >
                        <div className="border-[#F2B304] border p-1.5 rounded shadow-box-shadow-call">
                            <img alt="bhive call" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/call.svg`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header