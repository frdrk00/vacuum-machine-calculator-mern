import { UserButton } from '@clerk/clerk-react'
import { useAuth } from '@clerk/clerk-react'
import { ModeToggle } from '../components/mode-toggle'

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null
  }

  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>
  )
}
