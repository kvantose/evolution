import small from "../../assets/rent-small.png"
import meduim from "../../assets/rent-medium.png"
import big from "../../assets/rent-big.png"

export const data = [
    {
        id: 1,
        title: 'Малый',
        description: 'идеальны для стартапов и небольших команд до 10 человек. Аренда с гибкими условиями, возможность меблировки "под ключ"',
        size: '50 -100 м²',
        text: 'уютные помещения с современным дизайном, высокоскоростной интернет, доступ к общей инфраструктуре башни (переговорные, зоны отдыха)',
        img: small
    },
    {
        id: 2,
        title: 'Средний',
        description: 'подходят для средних компаний и филиалов крупных организаций. индивидуальная планировка',
        size: '100 - 500 м²',
        text: 'панорамные окна, собственные санузлы, доступ к частным переговорным комнатам и VIP-зонам',
        img: meduim
    },
    {
        id: 3,
        title: 'Большой',
        description: 'возможность создания уникального интерьера, установки собственных систем безопасности и доступа',
        size: '500 -1500 м²',
        text: 'эксклюзивный лифтовой доступ, персональные reception-зоны, частные террасы',
        img: big
    }
]