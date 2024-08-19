

const Banner = () => {
    return (
        <div className="overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 hidden lg:block">
                    <div className="relative">
                        <div className="relative -z-10 opacity-30 overflow-hidden">
                            <img alt="bhive banner" className="scale-150" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/banner-bg.png`} />
                        </div>
                        <div className="absolute -top-12">
                            <div className="h-32 w-[130px] left-60 relative">
                                <img alt="bhive banner" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/single-hex.png`} />
                            </div>


                        </div>
                    </div>
                </div>
                <div className="relative">
                    <video
                        className="rounded-lg mt-10"
                        autoPlay
                        loop
                        muted
                        playsInline

                    >
                        <source src="/assets/videos/banner-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-[60px]">
                        <img alt="" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/banner-video-bg.png`} />
                    </div>

                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
                <div className="lg:absolute top-32 mx-auto">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl  xl:text-[58px] font-bold xl:leading-[70px] text-center lg:text-left">
                        Host your meeting with <br className="hidden lg:block" /> world-class amenities. <br className="hidden lg:block" /> Starting at <span className="text-[#FFBB00]"> ₹199/-!</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner