import React from "react";

const agendaData = [
  {
    time: "09:30 AM",
    title: "Registration",
    description: "Registration & Welcome Coffee",
  },
  {
    time: "10:00 AM",
    title: "Opening Remarks",
    description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
  },
  {
    time: "10:10 AM",
    title: "Keynote session: Digital Transformation in a Gen AI World",
    description: "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
  },
  {
    time: "10:30 AM",
    title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
    description: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
  },
  {
    time: "11:00 AM",
    title: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
    description: "Hamid Nirouzad, Ahmad Hamdy, Ms. Riham Muhammad",
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
    description: "Karim El Mourabet, Heba Yehia, Ismail Ali, Mohamed Elazzazy",
  },
  {
    time: "12:00 PM",
    title: "Coffee Break & Networking",
    description: "",
  },
  {
    time: "12:30 PM",
    title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
    description: "Narendra Mistry, Shehab Moustafa, Matthew Hughes, Emad Shawky Habib Hanna",
  },
  {
    time: "01:00 PM",
    title: "The Essential Elements: What do you need to be \"all things to all people\"?",
    description: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking",
  },
  {
    time: "01:30 PM",
    title: "Making the case for change: The Question is How",
    description: "Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking",
  },
  {
    time: "01:50 PM",
    title: "Closing Remarks",
    description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
  },
  {
    time: "02:00 PM",
    title: "Lunch",
    description: "",
  },
];

const Agenda = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50" id="agenda">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
            <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Agenda
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 blur-2xl opacity-20" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full transform transition-all duration-500 hover:w-32 hover:h-2" />
        </div>
      </div>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {agendaData.map((item, index) => (
          <div key={index} className="flex items-start gap-6 bg-white shadow-md rounded-2xl p-6">
            <div className="text-purple-600 text-lg font-bold min-w-[8rem]">{item.time}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
              {item.description && (
                <p className="text-gray-600">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;