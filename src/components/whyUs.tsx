

const whyusData = [
    {
        img: "community.png",
        heading: "Community Events"
    },
    {
        img: "gym.png",
        heading: "Gym Facilities"
    },
    {
        img: "wifi.png",
        heading: "High-Speed WiFi"
    },
    {
        img: "tea.png",
        heading: "Cafe & Tea Bar"
    },
    {
        img: "affortable.png",
        heading: "Affordable"
    },
    {
        img: "comfort.png",
        heading: "Comfort Lounges"
    },
    {
        img: "booking.png",
        heading: "Quick Booking"
    },
    {
        img: "sport.png",
        heading: "Sports Area"
    }
]

const WhyUs = () => {

    return (
        <div className="max-w-screen-xl mx-auto mt-10 px-4 xl:px-0">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl lg:text-4xl font-bold">Why Choose us?</h2>
                </div>
                <div className="lg:hidden">
                    <img className="object-contain" alt={"arrow"} src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/arrow.svg`} />
                </div>
            </div>

            <div className="grid mt-10 grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6 items-center">
                {
                    whyusData.map((data, index) => {
                        return (
                            <div key={index} className="flex gap-4 items-center pl-4 flex-col sm:flex-row  shadow-box-shadow-call p-2 rounded-[6px] sm:shadow-none sm:p-0 ">
                                <div className="h-8 w-8 flex items-center">
                                    <img className="object-contain" alt={data.img} src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/${data.img}`} />
                                </div>
                                <div>
                                    <h6 className="font-medium text-center text-sm lg:text-lg"> {data.heading}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default WhyUs