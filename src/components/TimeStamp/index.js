const TimeStamp = ({ resource }) => {
  const time = resource.read();

  return (
    <div className="box box--complete">
      { time }
    </div>
  );
};

export default TimeStamp;
