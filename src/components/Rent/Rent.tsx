import { data } from "./rent-data"
import "./Rent.scss"
import right from "../../assets/right.svg"
export const Rent = () => {
    return (
        <div>
            <p className="text-4xl text-center mb-10">АРЕНДА</p>
            <div className="rent-container">
                {data.map((item) => (
                    <div className="rent-item" key={item.id}>
                        <div className="image-container">
                            <div
                                className="background"
                                style={{
                                    background: `url(${item.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                            <div className="left">
                                <p className="text-5xl">{item.title}</p>
                                <p className="text-xl">{item.description}</p>
                            </div>
                        </div>
                        <div className="right flex flex-col h-full justify-end">
                            <p className="item-id">{item.id}</p>
                            <div className="size flex flex-row justify-between">
                                <p className="font-bold text-3xl">{item.size}</p>
                                <img src={right} alt="" />
                            </div>
                            <p className="text-lg">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}