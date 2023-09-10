import {
  BrainCircuit,
  Calendar,
  CandlestickChart,
  History,
  Settings,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

const routes = [
  {
    label: 'Massage Calculator',
    icon: BrainCircuit,
    href: '/massage-calculator',
    color: 'text-sky-500',
  },
  {
    label: 'History',
    icon: History,
    href: '/history',
    color: 'text-violet-500',
  },
  {
    label: 'Materials',
    icon: CandlestickChart,
    href: '/materials',
    color: 'text-pink-500',
  },
  {
    label: 'Calendar',
    icon: Calendar,
    href: '/calendar',
    color: 'text-orange-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]


const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-300 dark:bg-[#111827] text-gray-800 dark:text-white">
      <Link
        to={"/"}
        className="flex items-center pl-3 mb-14"
      >
        <div className="relative w-8 h-8 mr-4">
          <img alt="Logo" src="/logo.png" />
        </div>
        <h1 className="font-semibold">Vacuum Massage Machine</h1>
      </Link>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            to={route.href}
            key={route.href}
            onClick={() => {}}
            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
          >
            <div className="flex items-center flex-1 ">
              <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
