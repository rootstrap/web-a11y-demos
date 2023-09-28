import {useLocation, useNavigate} from 'react-router-dom';

const ACCESSIBLE_SLUG = '/accesible'
export const A11ySwitch = () => {
  const location = useLocation()
  const navigate = useNavigate();

  const isAccessible = location.pathname.includes(ACCESSIBLE_SLUG)

  const switchMode = () => {
    if (isAccessible) {
      navigate(location.pathname.replace(ACCESSIBLE_SLUG, '') || '/')
    } else {
      navigate(location.pathname === '/' ? ACCESSIBLE_SLUG : `${location.pathname}${ACCESSIBLE_SLUG}`)
    }
  }

  return (
    <button
      onClick={switchMode}
      className="text-black fixed right-0 bottom-0 bg-orange-400 p-5 hover:text-gray-800 active:text-gray-800"
    >
      Cambiar a modo {isAccessible ? 'no accesible' : 'accesible'}
    </button>
  )
}