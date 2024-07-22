import { Outlet } from 'react-router-dom'
import SettingNav from './SettingNav'

const SettingLayout = () => {
  return (
      <div className='p-2'>
          <div className='hidden'>
          <SettingNav />
          </div>
          <button>back</button>
          <div className='px-2'>
              
      <Outlet/>
          </div>
    </div>
)
}

export default SettingLayout
