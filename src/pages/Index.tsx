
import React from "react";
import { ChevronDown, Users, Package } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/promote/Sidebar";
import PopularProducts from "@/components/dashboard/PopularProducts";

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
                      <div className="group flex-1 px-12 py-8 rounded-3xl cursor-pointer transition-all max-2xl:p-6 max-xl:pr-3 max-md:p-4">
                        <div className="flex items-center gap-3 mb-2 text-base font-medium transition-colors group-hover:text-gray-900 max-md:mb-3 max-md:text-sm text-gray-500">
                          <Users className="inline-flex size-6 transition-colors group-hover:text-gray-900 text-gray-500" />
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
                          <Package className="inline-flex size-6 transition-colors group-hover:text-gray-900 text-gray-900" />
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
                          <div className="text-lg font-medium">857 new customers today!</div>
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
                                <svg className="inline-flex size-6 text-gray-500 transition-colors group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
