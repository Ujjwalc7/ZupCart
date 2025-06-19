import AdminSidebar from "../../components/admin/AdminSidebar"
import VerticalBarchart from "../../components/charts/VerticalBarchart"

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Bar = () => {
  return (
    <div className="dashboardContainer flex h-screen bg-gray-200 gap-2">
      {/* sidebar */}
      <AdminSidebar/>

      {/* main */}
      <main className="bg-white overflow-y-auto grow hide-scrollbar py-2 px-4">
        <h1 className="text-center text-2xl font-semibold">Bar Charts</h1>
        <section className="mt-10">
          <VerticalBarchart data1={[200,444,433,556,778, 455,990]} data2={[300,144,656,238,755,199, 534]} title1={'Products'} title2={'Users'} bgColor1={'hsl(260, 50%, 30%)'} bgcolor2={'hsl(360, 90%, 90%)'}/>
        <h2 className="text-center my-3 text-xl lg:text-2xl">TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>
        <section className="mt-10">
          <VerticalBarchart data1={[200,444,433,556,778, 455,990,433,556,778, 455,990]} title1={'Products'}  bgColor1={'hsl(165, 86%, 52%)'} labels={months} horizontal={true}/>
        <h2 className="text-center my-3 text-xl lg:text-2xl">ORDERS THROUGHOUT THE YEAR</h2>
        </section>
      </main>
      
    </div>
  )
}
export default Bar