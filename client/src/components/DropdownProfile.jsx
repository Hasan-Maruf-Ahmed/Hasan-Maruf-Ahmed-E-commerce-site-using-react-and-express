import { useLogout } from '../hooks/useLogout'

export const DropdownProfile = ({ setOpenProfile }) => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    setOpenProfile((prev)=> !prev);
  }
  return (
        <ul className="flex flex-col text-sm">
            <li className='py-3 px-5 hover:cursor-pointer'>Profile</li>
            <li className='py-3 px-5 hover:cursor-pointer'>Settings</li>
            <li className='py-3 px-5 hover:cursor-pointer'><button onClick={handleLogout}>Log Out</button></li>
        </ul>
  )
}
