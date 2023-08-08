import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <>
    <div className="timeline-container flex flex-col md:flex-row justify-center bg-neutral-300 dark:bg-stone-900">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Timeline;
