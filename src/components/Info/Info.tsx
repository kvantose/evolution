import { useIntersectionObserver } from 'primereact/hooks';
import { useRef } from 'react';
import './Info.scss'

export const Info = () => {
    const elementRef = useRef(null);
    const visible = useIntersectionObserver(elementRef);

    return (
        <div className='info-content'>
            <div className="flex flex-col items-center justify-between w-full h-screen info-container">
            <div className='flex flex-col w-full h-screen info' style={{ opacity: visible ? 1 : 0, transform: visible ? 'translate(0)' : 'translate(100%)' }} ref={elementRef}>
            <p>246 МЕТРОВ</p>
                    <p>Расположенная на Пресненской набережной, д. 4, с.2 246-метровая башня «Эволюция» с холодногнутым остеклением стала одним из самых ярких объектов «Москва-Сити»</p>
                </div>
                <div className='flex flex-col w-full h-screen info' style={{ opacity: visible ? 1 : 0, transform: visible ? 'translate(0)' : 'translate(100%)' }} ref={elementRef}>
                    <p>54 ЭТАЖА</p>
                    <p>Она представляет собой закрученный вокруг собственной оси 54-этажный небоскреб, уверенно возвышающийся на 3-уровневом стилобате</p>
                </div>
                <div className='flex flex-col w-full h-screen info' style={{ opacity: visible ? 1 : 0, transform: visible ? 'translate(0)' : 'translate(100%)' }} ref={elementRef}>
                    <p>МОСТ БАРГАТИОНА</p>
                    <p>Башня «Эволюция» вместе с прилегающей к ней городской площадью расположилась на 2 и 3 участках ММДЦ, поэтому находится в непосредственной близости от моста Багратион</p>
                </div>
                <div className='flex flex-col w-full h-screen info' style={{ opacity: visible ? 1 : 0, transform: visible ? 'translate(0)' : 'translate(100%)' }} ref={elementRef}>
                    <p>КНИГА РЕКОРДОВ ГИННЕССА</p>
                    <p>Она стала настоящей вишенкой на торте ММДЦ и имеет все шансы войти в Книгу Гиннесса как самое крупное здание с холодногнутым фасадом</p>
                </div>
            </div>
        </div>
    )
}