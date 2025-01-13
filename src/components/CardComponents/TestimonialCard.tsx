interface TestimonialCardProps{
    organization:string;
    comment:string;
    reviewer:{
        name:string;
        position:string
        image:string;
    };
}

const TestimonialCard:React.FC<TestimonialCardProps> = ({organization, comment, reviewer}) => {
  return (
    <div className="bg-accent-dark rounded-3xl p-7 h-fit w-full flex gap-4">
        <div className="space-y-7 flex-1">
            <h4 className="font-medium text-lg">{organization}</h4>
            <p className="leading-relaxed">{comment}</p>
            <p className="font-medium">{reviewer.name},{" "}{reviewer.position}</p>
        </div>
        <div className="w-2/5 rounded-2xl h-auto overflow-hidden">
            <img src={reviewer.image} alt={`${reviewer.name}`} className="w-full h-full object-cover" />
        </div>
    </div>
  )
}

export default TestimonialCard