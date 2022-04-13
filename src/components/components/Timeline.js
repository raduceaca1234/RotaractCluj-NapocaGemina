const Timeline = ({timelineClass , title ,date_from ,date_to}) => {

    return (
        <div className={timelineClass} style={{textAlign: 'center'}}>
           <h3>{title}</h3>
           <h4 className="hd">{date_from}</h4>
           <p className="ph">{date_to}</p>
        </div>
    );
  }
  
  export default Timeline;