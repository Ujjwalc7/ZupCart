const InventoryCategory = ({info}) => {
    const color = ['rgb(250, 197, 62)','rgb(62, 159, 250)','rgb(62, 250, 225)','rgb(241, 62, 247)']
  return (
    <div className="flex  items-center gap-1.5">
        <p className="text-gray-400">{info.category}</p>
        <div className={`relative bg-gray-300 overflow-hidden w-[100px] h-[6px] rounded-full`}>
            <div className="absolute h-[6px]" style={{width:`${info.percentage}px`, backgroundColor:`${color[Math.floor(Math.random()*4)]}`}}></div>
        </div>
        <p className="">{info.percentage}%</p>
    </div>
  )
}
export default InventoryCategory