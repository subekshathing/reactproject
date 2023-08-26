import {SiOpenaigym} from 'react-icons/si'
import {MdMiscellaneousServices} from 'react-icons/md'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    // {
    //     name: "Plans",
    //     path: '/plans'
    // },
    {
        name: "Members",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <MdMiscellaneousServices/>,
        title: "Livestock Treatment",
        info: "We provide expert veterinary care and treatment plans for livestock, including vaccinations and emergency services.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <MdMiscellaneousServices/>,
        title: "Vitamins and Minerals",
        info: " We offer a range of supplements to support livestock nutrition, enhancing their health and productivity.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <MdMiscellaneousServices/>,
        title: "Livestock Grains",
        info: "We provide high-quality grains tailored to meet the dietary needs of different livestock, ensuring their well-being.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <MdMiscellaneousServices/>,
        title: "Pesticides and Insecticides",
        info: " We offer a variety of products and consultation to protect crops and animal grains from pests and diseases, with a focus on eco-friendly solutions.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Quality and Safety",
        desc: " We prioritize top-quality, safe products for agriculture and veterinary needs."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Innovation for Sustainability Two",
        desc: "We're dedicated to eco-friendly solutions and sustainable practices."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Ethical Practices",
        desc: "We uphold strict ethical standards in marketing, pricing, and animal care."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Customer Empowerment",
        desc: "We empower customers with knowledge and support for informed decisions."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What types of livestock treatment services do you offer?",
        answer: "We offer a wide range of livestock treatment services, including veterinary consultations, disease diagnosis, vaccinations, emergency care, and parasite control. Our experienced team is dedicated to ensuring the health and well-being of your animals."
    },
    {
        id: 2,
        question: "How can I order livestock grains, and do you offer bulk purchasing options?",
        answer: "Ordering livestock grains is easy. You can contact our sales team directly, visit our website, or utilize our mobile app for convenient ordering. We offer flexible purchasing options, including bulk orders, to accommodate the needs of different customers."
    },
    {
        id: 3,
        question: "What vitamins and minerals do you recommend for improving livestock health and productivity?",
        answer: "We provide a range of high-quality vitamin and mineral supplements tailored to different livestock needs. Our experts can offer personalized recommendations based on your specific requirements, ensuring optimal health and productivity for your animals."
    },
    {
        id: 4,
        question: "Can you offer guidance on integrated pest management to reduce the use of chemicals?",
        answer: "Absolutely. We believe in environmentally responsible pest control. Our experts can guide you through integrated pest management strategies that minimize chemical usage while effectively protecting your crops and livestock."
    },
    {
        id: 5,
        question: "What is your approach to ensuring the quality and safety of the products you supply?",
        answer: "Quality and safety are our top priorities. We source products from reputable suppliers, conduct rigorous quality control checks, and adhere to all regulatory standards. Our commitment to safety extends to proper storage and handling guidance for all our products."
    },
    {
        id: 6,
        question: "How do you support sustainable agriculture practices and environmental responsibility?",
        answer: "Sustainability is at the core of our mission. We promote sustainable agriculture through eco-friendly product options, organic farming practices, and educational initiatives. Our aim is to help farmers minimize their environmental impact while maximizing productivity."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Indra Bahadur Thing",
        quote: "As a veterinarian, I've collaborated closely with this company for years. Their commitment to animal health and the quality of their veterinary medicines are unmatched. I trust them implicitly.Working as an agriculture technician, I rely on this company's expertise and products to support our farming community. Their pest control solutions have consistently improved crop yields sustainably",
        job: "Veterinary Technician",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Pratiksha Thing",
        quote: "I'm part of the technical support team at this company. It's rewarding to help our customers navigate the complexities of agricultural technology. Our customers' success is our success.",
        job: "Technical Support",
        avatar: require("./images/avatar2.jpeg")
    },
    {
        id: 3,
        name: "Samiksha Thing",
        quote: "As an accountant, I've seen firsthand the company's dedication to financial transparency and responsibility. Their commitment to ethical practices is unwavering.",
        job: "Accountant",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Shuvechchha Thing",
        quote: "In my role as a software engineer, I've had the privilege of contributing to innovative agricultural software solutions at this company. We're at the cutting edge of technology in the industry.",
        job: " IT Engineer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Suntali Thing",
        quote: "I work as an agriculture consultant, and I often recommend this company's products and services to my clients. Their agricultural expertise and commitment to sustainability align perfectly with my consulting philosophy.",
        job: "Consultant",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpeg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')



export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Indra Bahadur Thing',
        job: 'Propritor',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Pratiksha Thing',
        job: 'Member',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Samiksha Thing',
        job: 'Member',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shuvechchha Thing',
        job: 'Member',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Suntali Thing',
        job: 'Member',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
   
]