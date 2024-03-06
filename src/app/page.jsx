'use client'
import { MyProvider } from '@/state/useContext'
import App from '../App'

const Home = () => {
  return (
    <div>
      <MyProvider>
      <App />
      </MyProvider>
    </div>
  )
}
export default Home
