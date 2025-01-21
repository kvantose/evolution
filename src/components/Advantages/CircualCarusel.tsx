import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import "./CircualCarouser.scss"
import left from "../../assets/left.svg"
import right from "../../assets/right.svg"
import { useState } from 'react';

import { useRef } from 'react';
import { useIntersectionObserver } from 'primereact/hooks';
export const CircualCarusel = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const elementRef = useRef(null);
    const visible = useIntersectionObserver(elementRef, { threshold: 0.5 });
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];


    const productTemplate = (item: Item) => {
        return (
            <div className="card-item flex flex-col gap-5">
                <div>{item.title}</div>
                <p>{item.description}</p>
            </div>
        )
    };

    const handlerNext = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1)
            setCurrentPage(currentPage - 1)
        } else {
            setPageIndex(items.length - 1)
            setCurrentPage(items.length)
        }
    }

    const handlerPrev = () => {
        if (pageIndex < items.length - 1) {
            setPageIndex(pageIndex + 1)
            setCurrentPage(currentPage + 1)
        } else {
            setPageIndex(0)
            setCurrentPage(1)
        }
    }



    return (
        <div className="flex flex-col gap-20 h-screen card"
            style={{ opacity: visible ? 1 : 0 }}
            ref={elementRef}
        >
            <p className='text-4xl text-center'>ПРЕИМУЩЕСТВА АРЕНДЫ</p>
            <div className='flex justify-between'>
                <img src={left} alt="prev" onClick={() => handlerNext()} className='cursor-pointer' />
                <p>{currentPage} / {items.length}</p>
                <img src={right} alt="next" onClick={() => handlerPrev()} className='cursor-pointer' />
            </div>
            <Carousel
                value={items} numVisible={3} numScroll={1}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                itemTemplate={productTemplate}
                onPageChange={(e) => setPageIndex(e.page)}
                page={pageIndex}
                showIndicators={false}
                showNavigators={false}
            />
        </div>
    )
}


interface Item {
    id: number;
    title: string;
    description: string;
}

const items: Item[] = [
    {
        id: 1,
        title: 'Зеленые зоны',
        description: 'Наличие парков и скверов вблизи позволяет сотрудникам проводить время на свежем воздухе, что способствует улучшению качества жизни и повышению продуктивности'
    },
    {
        id: 2,
        title: 'Экологичность',
        description: ' Башня Эволюции соответствует современным стандартам устойчивого строительства, что позволяет арендаторам минимизировать негативное воздействие на окружающую среду.'
    },
    {
        id: 3,
        title: 'Современная инфраструктура',
        description: 'Башня Эволюция оборудована всем необходимым для комфортной работы: современными коммуникациями, высокоскоростным интернетом, системами безопасности и климат-контролем'
    },
    {
        id: 4,
        title: 'Современные технологии',
        description: 'Башня Эволюции оснащена современными системами безопасности, климат-контроля и высокоскоростным интернетом, что обеспечивает надежную и эффективную работу.'
    },
    {
        id: 5,
        title: 'Зеленые зоны',
        description: 'Наличие парков и скверов вблизи позволяет сотрудникам проводить время на свежем воздухе, что способствует улучшению качества жизни и повышению продуктивности'
    },
    {
        id: 6,
        title: 'Экологичность',
        description: ' Башня Эволюции соответствует современным стандартам устойчивого строительства, что позволяет арендаторам минимизировать негативное воздействие на окружающую среду.'
    },
    {
        id: 7,
        title: 'Современная инфраструктура',
        description: 'Башня Эволюция оборудована всем необходимым для комфортной работы: современными коммуникациями, высокоскоростным интернетом, системами безопасности и климат-контролем'
    },
    {
        id: 8,
        title: 'Современные технологии',
        description: 'Башня Эволюции оснащена современными системами безопасности, климат-контроля и высокоскоростным интернетом, что обеспечивает надежную и эффективную работу.'
    },

]