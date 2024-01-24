import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card.tsx'
import { MonthCanceledOrdersCar } from './month-canceled-orders-card.tsx'
import { MonthOrdersAmountCard } from './month-orders-amount-card.tsx'
import { MonthRevenueCard } from './month-revenue-card.tsx'
import { PopularProductsChart } from './popular-product-chart.tsx'
import { RevenueChart } from './revenue-chart.tsx'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersCar />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}
