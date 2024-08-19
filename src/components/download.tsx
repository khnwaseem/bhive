

const Download = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20 px-4 xl:px-0">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-[28px] lg:text-4xl font-bold lg:text-[#605F5F] lg:px-10">Download our app now</h2>
                </div>
                <div className="lg:hidden">
                    <img className="object-contain" alt={"arrow"} src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/arrow.svg`} />
                </div>
            </div>
            <div className="relative mt-10 lg:mt-40">

                <div className="shadow-box-shadow-call px-10 pt-10 pb-5 grid grid-cols-1 lg:grid-cols-3 rounded-lg border border-[#EEE7E7CC]">
                    <div className="col-span-1">
                        <div className="lg:absolute bottom-0">
                            <img className="lg:h-80" alt="download" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/download-view.png`} />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[#605F5F] text-xl leading-7 hidden lg:block">Boost your productivity with the BHIVE Workspace app.<br /> Elevate your workspace, collaborate efficiently, and unlock <br /> exclusive perks.</p>
                        <div className="mt-5 flex gap-4">
                            <img className="h-10" alt="download" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/google-play.png`} />
                            <img className="h-10" alt="download" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/apple-store.png`} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Download