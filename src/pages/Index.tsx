
import React from "react";
import { ChevronDown, Package, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/promote/Sidebar";
import PopularProducts from "@/components/dashboard/PopularProducts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Index = () => {
  const avatars = [
    { name: "Gladyce", image: "/placeholder.svg" },
    { name: "Elbert", image: "/placeholder.svg" },
    { name: "Joyce", image: "/placeholder.svg" },
    { name: "John", image: "/placeholder.svg" },
    { name: "Elbert", image: "/placeholder.svg" },
    { name: "Joyce", image: "/placeholder.svg" },
    { name: "Anna", image: "/placeholder.svg" },
  ];

  // Sample data for the chart
  const chartData = [
    { name: "Apr", value: 0 },
    { name: "May", value: 32000 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 20000 },
    { name: "Aug", value: 60000 },
    { name: "Sep", value: 15000 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b bg-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search anything..."
                className="h-10 w-64 md:w-80 rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:outline-none"
              />
            </div>
            <Button className="rounded-full bg-gray-900 text-white">Create</Button>
            <button className="rounded-full border p-2">
              <img
                src="/placeholder.svg"
                alt="Notifications"
                className="h-5 w-5"
              />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left section - Overview */}
            <div className="lg:col-span-2">
              <div className="card bg-white border rounded-lg shadow-sm">
                <div className="flex items-center h-12 pl-5 max-lg:pl-3">
                  <div className="mr-auto text-lg font-medium">Overview</div>
                  <div className="min-w-40 max-md:min-w-34">
                    <button className="group flex justify-between items-center w-full h-12 pl-4.5 pr-3 border border-gray-200 rounded-3xl text-sm text-gray-700 transition-all hover:border-gray-400">
                      <div className="truncate">Last 7 days</div>
                      <ChevronDown className="inline-flex size-6 shrink-0 ml-2 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="pt-1">
                    <div className="flex mb-4 p-1.5 border border-gray-200 rounded-4xl bg-gray-50">
                      {/* Customers Card */}
                      <div className="group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4 bg-white shadow-md">
                        <div className="flex items-center gap-3 mb-2 text-base font-medium transition-colors group-hover:text-gray-900 max-md:mb-3 max-md:text-sm text-gray-900">
                          <Users className="inline-flex size-6 transition-colors group-hover:text-gray-900 text-gray-900" />
                          <div>Customers</div>
                        </div>
                        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
                          <div className="text-3xl font-bold max-md:text-2xl">1,293</div>
                          <div>
                            <div className="inline-flex items-center gap-1 px-1.5 rounded-lg bg-red-50 text-red-600 h-7 text-sm">
                              <svg className="inline-flex size-4 fill-red-500" viewBox="0 0 24 24">
                                <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                              </svg>
                              36.8%
                            </div>
                            <div className="mt-1 text-sm text-gray-500 max-md:text-xs">vs last month</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Balance Card */}
                      <div className="group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4">
                        <div className="flex items-center gap-3 mb-2 text-base font-medium transition-colors group-hover:text-gray-900 max-md:mb-3 max-md:text-sm text-gray-500">
                          <Package className="inline-flex size-6 transition-colors group-hover:text-gray-900 text-gray-500" />
                          <div>Balance</div>
                        </div>
                        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
                          <div className="text-3xl font-bold max-md:text-2xl">256k</div>
                          <div>
                            <div className="inline-flex items-center gap-1 px-1.5 rounded-lg bg-green-50 text-green-600 h-7 text-sm">
                              <svg className="inline-flex size-4 fill-green-500 rotate-180" viewBox="0 0 24 24">
                                <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                              </svg>
                              36.8%
                            </div>
                            <div className="mt-1 text-sm text-gray-500 max-md:text-xs">vs last month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* New customers section */}
                    <div className="p-5 max-lg:px-3 max-lg:py-4">
                      <div className="mb-6">
                        <div className="flex items-center gap-3">
                          <div className="text-[1.125rem] font-medium tracking-[-0.01em]">857 new customers today!</div>
                        </div>
                        <div className="text-sm text-gray-500">Send a welcome message to all new customers.</div>
                      </div>
                      
                      {/* Avatar section with horizontal scroll */}
                      <div className="relative before:hidden after:hidden before:absolute before:-left-6 before:top-0 before:bottom-0 before:z-3 before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:pointer-events-none after:absolute after:-right-6 after:top-0 after:bottom-0 after:z-3 after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none max-md:before:block max-md:after:block">
                        <div className="flex max-md:overflow-auto max-md:-mx-6 max-md:px-6 max-md:scrollbar-none">
                          {avatars.map((avatar, index) => (
                            <div key={index} className="flex-1 px-1 py-8 text-center max-3xl:nth-[n+6]:hidden max-[1349px]:nth-[n+5]:hidden max-md:shrink-0 max-md:flex-auto max-md:w-30 max-md:!block">
                              <Avatar className="size-16 mx-auto">
                                <AvatarImage src={avatar.image} alt={avatar.name} />
                                <AvatarFallback>{avatar.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="mt-4 text-sm text-gray-500 max-md:truncate">{avatar.name}</div>
                            </div>
                          ))}
                          
                          {/* View all button */}
                          <div className="flex-1 px-2 py-8 text-center max-md:shrink-0 max-md:flex-auto max-md:w-30">
                            <a className="group inline-flex flex-col justify-center items-center" href="/customers">
                              <div className="flex justify-center items-center size-16 rounded-full border border-gray-200 transition-colors group-hover:border-blue-500 group-hover:shadow-md">
                                <svg className="inline-flex size-6 text-gray-500 transition-colors group-hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M14.94 7.47l2.586 2.586a2.75 2.75 0 0 1 0 3.889L14.94 16.53a.75.75 0 1 1-1.061-1.061l2.586-2.586a1.26 1.26 0 0 0 .115-.133L6.41 12.75a.75.75 0 1 1 0-1.5h10.172a1.26 1.26 0 0 0-.116-.134L13.88 8.53A.75.75 0 0 1 14.94 7.47z" fill="currentColor"/>
                                </svg>
                              </div>
                              <div className="mt-4 text-sm text-gray-500 transition-colors group-hover:text-blue-500">View all</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Balance Chart Card */}
              <div className="card bg-white border rounded-lg shadow-sm mt-6">
                <div className="flex items-center h-12 pl-5 max-lg:pl-3">
                  <div className="mr-auto text-lg font-medium">Overview</div>
                  <div className="min-w-40 max-md:min-w-34">
                    <button className="group flex justify-between items-center w-full h-12 pl-4.5 pr-3 border border-gray-200 rounded-3xl text-sm text-gray-700 transition-all hover:border-gray-400">
                      <div className="truncate">Last 7 days</div>
                      <ChevronDown className="inline-flex size-6 shrink-0 ml-2 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="pt-1">
                    <div className="flex mb-4 p-1.5 border border-gray-200 rounded-4xl bg-gray-50">
                      {/* Customers Card */}
                      <div className="group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4">
                        <div className="flex items-center gap-3 mb-2 text-base font-medium transition-colors group-hover:text-gray-900 max-md:mb-3 max-md:text-sm text-gray-500">
                          <svg className="inline-flex size-6 transition-colors group-hover:fill-gray-900 fill-gray-500" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17 13.507a3.75 3.75 0 1 1 0 7.5H7a3.75 3.75 0 1 1 0-7.5h10zm0 1.5H7a2.25 2.25 0 1 0 0 4.5h10a2.25 2.25 0 1 0 0-4.5zM12 3a4.25 4.25 0 1 1 0 8.5A4.25 4.25 0 1 1 12 3zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 1 0 0-5.5z" />
                          </svg>
                          <div>Customers</div>
                        </div>
                        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
                          <div className="text-3xl font-bold max-md:text-2xl">1,293</div>
                          <div>
                            <div className="inline-flex items-center gap-1 px-1.5 rounded-lg bg-red-50 text-red-600 h-7 text-sm">
                              <svg className="inline-flex size-4 fill-red-500" viewBox="0 0 24 24">
                                <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                              </svg>
                              36.8%
                            </div>
                            <div className="mt-1 text-sm text-gray-500 max-md:text-xs">vs last month</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Balance Card */}
                      <div className="group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4 bg-white shadow-md">
                        <div className="flex items-center gap-3 mb-2 text-base font-medium transition-colors group-hover:text-gray-900 max-md:mb-3 max-md:text-sm text-gray-900">
                          <svg className="inline-flex size-6 transition-colors group-hover:fill-gray-900 fill-gray-900" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19.935 7.589l.838 3.232c.146.434.227.899.227 1.383v3.513a4.25 4.25 0 0 1-4.25 4.25h-9.5A4.25 4.25 0 0 1 3 15.717v-3.513c0-.256.023-.506.066-.749H3.01v-1.318a3.75 3.75 0 0 1 2.742-3.612l8.308-2.32a4.75 4.75 0 0 1 5.875 3.383zM16.75 9.455h-9.5a2.75 2.75 0 0 0-2.75 2.75v3.513a2.75 2.75 0 0 0 2.75 2.75h9.5a2.75 2.75 0 0 0 2.75-2.75v-3.513a2.75 2.75 0 0 0-2.75-2.75zm-2.287-3.804l-8.308 2.32c-.326.091-.618.251-.863.462a4.22 4.22 0 0 1 1.958-.478h9.5c.659 0 1.283.15 1.84.418l-.107-.407a3.25 3.25 0 0 0-4.02-2.315z" />
                          </svg>
                          <div>Balance</div>
                        </div>
                        <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-1">
                          <div className="text-3xl font-bold max-md:text-2xl">256k</div>
                          <div>
                            <div className="inline-flex items-center gap-1 px-1.5 rounded-lg bg-green-50 text-green-600 h-7 text-sm">
                              <svg className="inline-flex size-4 fill-green-500 rotate-180" viewBox="0 0 24 24">
                                <path d="M12 5.5a1.1 1.1 0 0 1 1.098 1.102v9.327c.068-.051.133-.108.195-.17l1.833-1.84c.429-.43 1.124-.43 1.552 0s.429 1.128 0 1.558l-1.833 1.84c-1.572 1.578-4.12 1.578-5.691 0l-1.833-1.84c-.429-.43-.429-1.128 0-1.558s1.124-.43 1.552 0l1.833 1.84c.062.062.127.119.195.17l.001-9.327A1.1 1.1 0 0 1 12 5.5z"></path>
                              </svg>
                              36.8%
                            </div>
                            <div className="mt-1 text-sm text-gray-500 max-md:text-xs">vs last month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart section */}
                    <div className="pt-3 px-3 pb-1">
                      <div className="h-[316px] max-xl:h-[254px]">
                        <ChartContainer
                          config={{ 
                            Green: { color: "#00A656" },
                          }}
                          className="h-full"
                        >
                          <AreaChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00A656" stopOpacity={0.15} />
                                <stop offset="95%" stopColor="#00A656" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} strokeDasharray="5 7" stroke="#E3E6EA" />
                            <XAxis 
                              dataKey="name" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: "#94969C", fontSize: 12, opacity: 0.8 }} 
                              tickMargin={8}
                            />
                            <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: "#94969C", fontSize: 12, opacity: 0.8 }}
                              tickFormatter={(value) => value === 0 ? `$0` : `${value / 1000}k`}
                              tickMargin={8}
                            />
                            <Tooltip 
                              cursor={false}
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
                                      <p className="text-sm font-medium">{`$${payload[0].value.toLocaleString()}`}</p>
                                      <p className="text-xs text-gray-500">{payload[0].payload.name}</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="#00A656" 
                              strokeWidth={3}
                              fill="url(#colorGreen)" 
                            />
                          </AreaChart>
                        </ChartContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right section - Popular products */}
            <div className="lg:col-span-1">
              <PopularProducts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
