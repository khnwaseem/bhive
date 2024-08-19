import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchApiData, selectApiData } from "../store/spaceApiSlice";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import ArrowCombine from "./arrowCombine";



const SpaceComponent = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { data, status, error } = useSelector(selectApiData);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchApiData());
        }
    }, []);



    return (
        <div className="max-w-screen-xl mt-20 mx-auto px-4 xl:px-0">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl lg:text-4xl font-bold">Our Space <span className="hidden lg:block">Overview</span></h2>
                </div>
                <div className="lg:hidden">
                    <img className="object-contain" alt={"arrow"} src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/arrow.svg`} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
                {
                    data &&
                    data.map((space: any, i: number) => {

                        return (
                            <div className="shadow-box-shadow-card p-2 border border-[#EEE7E7CC] rounded-lg flex flex-col gap-2" key={space.id}>
                                <div className="flex gap-4 justify-between items-center ">
                                    <h5 className="text-lg lg:text-xl font-semibold">
                                        {space.name}
                                    </h5>
                                    <div>
                                        <div className="border-[#EEE7E7] border-[0.5px] bg-[#F9F9F9] rounded p-2 flex flex-col gap-1 w-12 h-12 justify-center items-center">
                                            <img className="w-[18px] h-[18px]" alt="direction" src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/assistant_direction.png`} />
                                            <p className="text-[8px]">6 kms</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <img className="rounded-[6px] max-h-[200px] object-cover w-full" alt={data.name} src={`${process.env.REACT_APP_LOCAL_HOST}/assets/images/${"space"}-${i + 1}.png`} />
                                        <div className="bg-custom-gradient-image absolute top-2 left-2 p-2 rounded box-shadow-card-title">
                                            <p className="text-[#FFBB00] text-xs lg:text-sm tracking-wider">Workspace</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="border-[0.5px] border-[#EEE7E7] p-2 bg-[#F9F9F9] w-full rounded-[6px] flex justify-between items-center">
                                        <div>
                                            <div>
                                                <p className="text-[#65624C] text-xs lg:text-sm">Day Pass</p>
                                            </div>
                                            <div>
                                                <p className="text-lg lg:text-xl"> ₹ 249<span className="text-[11px] lg:text-xs">/ Day</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <ArrowCombine />
                                        </div>
                                    </div>
                                    <div className="bg-[#FFCF4B] border-[#FFC422] border p-2 w-full rounded-[6px] flex justify-between items-center">
                                        <div>
                                            <div>
                                                <p className="text-[#514D2D] text-sm">Bulk Pass</p>
                                            </div>
                                            <div>
                                                <p className="text-xl"> ₹ 2400<span className="text-xs">/ 10 Day</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <ArrowCombine />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default SpaceComponent