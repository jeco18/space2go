import { useRef, useState } from "react"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"

const Help = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What payment methods are accepted?",
            a: "Credit cards are the most widely-accepted payment method for properties listed on Booking.com, and most of them use credit cards to validate your booking. In some cases, alternative payment methods like PayPal etc. are also accepted."
        },
        {
            q: "Can I pay for my stay with a different credit card than the one used to book?",
            a: "It's very likely, yes. Properties usually accept payment for a stay with a different card or cash. To confirm that paying with a different credit card is okay, contact the property."
        },
        {
            q: "Is breakfast included in the price?",
            a: "Each room or accommodation you can book has its own breakfast policy. If breakfast is included, you'll see it listed on the property page when you compare different options to book. If breakfast isn’t included, you can see if the property provides it by checking its available facilities. After you book, this info can also be found in your confirmation email and in your bookings in your account."
        },
        {
            q: "What does the price include?",
            a: "All the facilities listed under the room or accommodation type are included in the price. You can also see if other things like breakfast, taxes, or service charges are included when you compare different options to book. After you book, this info can also be found in your confirmation email and in your bookings in your account."
        },
        {
            q: "Can I cancel my booking?",
            a: "Yes – any cancellation fees are determined by the property and listed in your cancellation policy. You'll pay any additional costs to the property."
        }
    ]

    return (
        <div>
            <Navbar />
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <Help
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
        <Footer />
        </div>
    )
}