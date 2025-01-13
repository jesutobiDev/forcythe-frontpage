const advantageList = [
  {
    name: "Experience",
    text: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
  },
  {
    name: "Quick Support",
    text: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
  },
  {
    name: "Cost Savings",
    text: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
  },
];

const achievementList=[
  {
    name:"Clients",
    value:50
  },
  {
    name:"Projects",
    value:120
  },
  {
    name:"Team Leads",
    value:10
  },
  {
    name:"Glorious Years",
    value:10
  }
]
const Advantages = () => {
  return (
    <div className="px-12 space-y-20">
      <h2 className="text-[2.5rem] text-accent-light mx-auto w-5/6">
        Your best call for B2B/B2C product innovation
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {advantageList.map((advantage, index) => (
          <div key={index} className="bg-purple-400 rounded-xl p-7 h-fit space-y-3">
            <div className="bg-[#5d91c3] w-12 h-12 rounded-lg flex items-center justify-center">
              <img
                src="https://forcythe.com/images/layers-three.svg"
                alt="icon-three-layers"
                className="w-7 h-7"
              />
            </div>
            <h4 className="text-2xl font-semibold">{advantage.name}</h4>
            <p className="text-lg opacity-70">{advantage.text}</p>
          </div>
        ))}
      </div>
      <div className="w-[800px] rounded-t-full h-[400px] mx-auto border-t-2 border-accent-light flex flex-col items-center justify-end gap-16">
        <h3 className="text-3xl w-2/3 text-center font-medium">We build solutions that help <span className="text-accent">businesses</span> of all sizes to <span className="text-accent">scale</span></h3>
        <div className="flex gap-5">
          {
            achievementList.map((achievement, index) =>(
              <div className="" key={index}>
                <h4 className="text-accent text-5xl font-medium">{achievement.value}+</h4>
                <p className="text-lg mt-[2px]">{achievement.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Advantages;
