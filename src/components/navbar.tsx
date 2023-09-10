import { UserButton } from '@clerk/clerk-react'

import MobileSidebar from './mobile-sidebar'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end px-2">
        <div className="flex flex-row justify-center items-center space-x-2">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
