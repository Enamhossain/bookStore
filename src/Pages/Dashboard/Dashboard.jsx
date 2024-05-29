// eslint-disable-next-line no-unused-vars
import CardUi, { MetricsCard } from "../../component/CardUi"
import DashboardGrap from "../../component/DashboardGrap"
import Header from "./Header"


// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-black">
        <MetricsCard 
          title="Total Sales" 
          value="$24,000" 
          description="Total sales made this month" 
        />
        <MetricsCard 
          title="Revenue" 
          value="$50,000" 
          description="Total revenue generated" 
        />
        <MetricsCard 
          title="Total Customers" 
          value="1,200" 
          description="Number of customers served" 
        />
      </div>
      <DashboardGrap />
  
    </div>
  )
}

export default Dashboard



