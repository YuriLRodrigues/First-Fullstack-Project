import { useCallback, useEffect, useState } from 'react'
import { getUsers } from '../../api/getUsers'
import './userlist.sass'
import Loading from '../../components/Loading/Loading';

type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserList = () => {
  
  const [allUsers, setAllUsers] = useState<UserProps[]>([])


  const fetchUsers = useCallback(async () => {
    try {
      const users = await getUsers()
      return users
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchUsers().then(users => setAllUsers(users))
  }, [fetchUsers])
  
  return (
    <div className="form-container">
      <h2 className="users-list-title">Users List</h2>
      {allUsers ? (
      <table className="users-list-item">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : <Loading />}
    </div>
  )
}

export default UserList