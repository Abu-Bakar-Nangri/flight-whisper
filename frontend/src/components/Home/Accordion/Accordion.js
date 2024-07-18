import React, { useState } from 'react';
import CSS from './Accordion.module.css'; // Import your CSS module for styling

const Accordion = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleAccordion = (question) => {
        setActiveQuestion(activeQuestion === question ? null : question);
    };

    const accordionItems = [
        {
          "question": "How does FlightWhisper work?",
          "answer": "FlightWhisper is a flight and hotel search engine. We scan all the top airlines and travel providers across the net, allowing you to compare flight fares and other travel costs in one place. Once you've found the best flight, car hire, or hotel, you can book directly with the provider."
        },
        {
          "question": "How can I find the cheapest flight using FlightWhisper?",
          "answer": "Finding flights is easy with FlightWhisper. You can search over millions of options to find cheap flight tickets, hotels, and car hire. Use our features like 'Search Everywhere' to find the best budget airfare anywhere on any given day, or choose 'Cheapest month' to find the most affordable time to fly to your destination."
        },
        {
          "question": "Where should I book a flight to right now?",
          "answer": "If you're looking for inspiration for your next trip, use FlightWhisper's 'Everywhere' search feature to find a cheap flight ticket to anywhere."
        },
        {
          "question": "Do I book my flight with FlightWhisper?",
          "answer": "FlightWhisper is a search engine. After finding the best flight ticket, you'll book directly with the airline or travel provider on their site. This gives you the flexibility to add loyalty information and select your preferred flight options."
        },
        {
          "question": "What happens after I have booked my flight?",
          "answer": "After booking your flight through FlightWhisper, your flight booking confirmation email and all necessary information will come directly from the airline or travel provider. For any questions about your booking, changes, or cancellations, you'll need to contact them directly."
        },
        {
          "question": "Does FlightWhisper provide hotel bookings?",
          "answer": "Yes! You can use FlightWhisper's powerful search engine to find your perfect stay anywhere."
        },
        {
          "question": "Can I use FlightWhisper for car hire?",
          "answer": "Absolutely! FlightWhisper allows you to search for and compare cheap car hire options in seconds. You can pick up your rental car from the airport as soon as you land."
        },
        {
          "question": "What is a Price Alert on FlightWhisper?",
          "answer": "By setting up a Price Alert on FlightWhisper, we'll monitor the price of plane tickets for you. You'll receive notifications via email or push notifications in the app if prices rise or fall."
        },
        {
          "question": "Can I book a flexible flight ticket with FlightWhisper?",
          "answer": "Flexibility is important for holiday plans. Some airlines offer amendable ticket options for an additional fee. You can also find hotels and car hire options with free cancellation on FlightWhisper, allowing you to book now and make changes later if needed."
        },
        {
          "question": "Can I book flights that emit less CO₂ with FlightWhisper?",
          "answer": "Yes! FlightWhisper shows carbon emission information for flights where it's available. You can choose flights with lower emissions for your route, contributing to sustainable travel choices."
        }
      ]
      

    return (
        <div className={CSS.accordion}>
            {accordionItems.map((item, index) => (
                <div key={index} className={CSS.accordionItem}>
                    <div className={CSS.accordionHeader} onClick={() => toggleAccordion(item.question)}>
                        <h5>{item.question}</h5>
                        <span className={activeQuestion === item.question ? CSS.iconOpen: CSS.iconClosed}></span>
                    </div>
                    {activeQuestion === item.question && (
                        <div className={CSS.accordionContent}>
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
