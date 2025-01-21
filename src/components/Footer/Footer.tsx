import { Button } from "primereact/button";
import bg from "../../assets/bg.png"
import "./Footer.scss"
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const Footer = () => {
    const [visible, setVisible] = useState(false);

    return (
        <footer>
            <div className="flex flex-col h-screen"
                style={{
                    background: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="flex flex-col gap-9 items-center justify-center h-full text-center">
                    <p className="text-5xl">СВЯЖИТЕСЬ С НАМИ!<br />ОТВЕТИМ НА ВСЕ ВОПРОСЫ</p>
                    <ul className="a-link"><li>
                        <a className="text-2xl" onClick={() => setVisible(true)}>СВЯЗАТЬСЯ</a>
                    </li></ul>
                </div>
                <div className="line"></div>
                <div className="">
                    <ul className="a-link flex flex-row justify-between items-center p-9">
                        <li>
                            <a href="/">АРЕНДА</a>
                        </li>
                        <li>
                            <a href="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
                        </li>
                        <li>
                            <a href="/">welcome@moscow-city.guide</a>
                        </li>
                        <li>
                            <a href="/">+7 499 290 1082</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Dialog visible={visible} onHide={() => setVisible(false)} header="Свяжитесь с нами" style={{ width: '50vw' }}>
                <div className="flex flex-col gap-5 bg-gray p-5 items-center justify-center h-96">
                    <InputText placeholder="Ваше имя" className="h-10 w-1/2 p-3"/>
                    <InputText placeholder="Номер телефона" className="h-10 w-1/2 p-3"/>
                    <InputText placeholder="Ваше сообщение" className="h-10 w-1/2 p-3"/>
                    <Button label="Отправить" onClick={() => setVisible(false)} className="w-1/2 bg-black p-3 hover:bg-opacity-5"/>
                </div>
            </Dialog>
        </footer>
    )
}
