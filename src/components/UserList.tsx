import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
      fetchUsers();
    }, [])
    
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }

  return (
    <div>
        {users.map(user =>
            <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserList