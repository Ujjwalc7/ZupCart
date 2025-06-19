import TimelineIcon from "@mui/icons-material/Timeline";

const Widget = ({ info }) => {
  return (
    <div className="md:min-w-[200px] w-[150px] bg-white justify-self-center rounded flex gap-3 py-4 px-3 shadow-md items-center max-lg:mb-4">
      <div className="info">
        <p className=" text-gray-400">{info.heading}</p>
        <p className="font-semibold">
          {info.amount !== undefined ? `$${info.amount}` : info.count}
        </p>
        <p
          className={`${
            info.percentage < 0 ? "text-red-600" : "text-green-500"
          }`}
        >
          <TimelineIcon sx={{ width: "12px" }} />{" "}
          {info.percentage > 0 ? `+${info.percentage}%` : `${info.percentage}%`}
        </p>
      </div>
      <div
        style={{
          background: `conic-gradient(${info.color} ${Math.abs(
            Math.floor((360 * info.percentage) / 100)
          )}deg, white 1deg)`,
        }}
        className="widgetCircle relative graph w-[50px] h-[50px] rounded-full flex items-center justify-center"
      >
        <p className={`text-sm relative`} style={{ color: `${info.color}` }}>
          {info.percentage}%
        </p>
      </div>
    </div>
  );
};
export default Widget;
