import "./Map.scss"

export const Geolocation = () => {
    return (
        <>
        <p className="text-center text-4xl font-bold p-10">Сердце Москва-Сити</p>
        <div className="map-container">
            <div className="flex flex-row gap-9 w-full map-content">
                <div className="map" style={{ position: "relative", width: "100%", height: "510px" }}>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.540223%2C55.750228&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNDg4MjUS4gHQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQsNC00LzQuNC90LjRgdGC0YDQsNGC0LjQstC90YvQuSDQvtC60YDRg9CzLCDQn9GA0LXRgdC90LXQvdGB0LrQuNC5INGA0LDQudC-0L0sINCc0L7RgdC60L7QstGB0LrQuNC5INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC00LXQu9C-0LLQvtC5INGG0LXQvdGC0YAg0JzQvtGB0LrQstCwLdCh0LjRgtC4IgoN2isWQhVw_15C&z=15.85"
                        style={{ position: "relative", width: "100%", height: "100%", borderRadius: "10px" }}>
                    </iframe>
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <div className="map-card">
                        <p>Эта башня, высотой 255 метров, не только впечатляет своими масштабами, но и предлагает захватывающие виды на Москву и окрестности. Расположенная в шаговой доступности
                            от станции метро «Выставочная» и крупных транспортных магистралей, Башня Эволюции обеспечивает легкий доступ как для деловых людей, так и для туристов.</p>
                    </div>
                    <div className="map-card">
                        <p>Башня Эволюция, одна из самых знаковых архитектурных жемчужин делового района Москва-Сити, расположена
                            в самом центре динамично развивающегося мегаполиса.
                            Удобно находясь в окружении других небоскребов, таких как Восточная башня и Башня Федерация, она представляет собой уникальный пример современного градостроительства, гармонично вписываясь в панораму столицы.</p>
                    </div>
                    <div className="map-card">
                        <p>Внутри здания располагаются современные офисные пространства, рестораны и зоны для отдыха, что делает его идеальным местом для работы и встреч. Башня Эволюции — это не просто офисный центр, а символ стремительного развития и инноваций, который вдохновляет на новые достижения.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}