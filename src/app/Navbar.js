import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchNotifications, allNotificationsRead} from '../features/notifications/notificationsclice'

export const Navbar = () => {
  const dispatch = useDispatch()
  const numUnreadNotifications = null
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
    const notifications = useSelector(selectAllNotifications)
    numUnreadNotifications = notifications.filter(n => !n.read).length
  }
  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }
  
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
        <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
