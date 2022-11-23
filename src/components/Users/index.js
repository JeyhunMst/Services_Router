import React from 'react'
import { ROUTER} from "../../routes/consts"
import { useHistory, useLocation } from "react-router-dom";
import { getUsersByAge } from '../../actions/usersApi';
import { useServices } from '../../hooks/useService';



function Users() {
   
   const[users,setUsers]=React.useState([]);
   const[isLoading,setIsLoading]=React.useState(false);
   const [age,setAge]=React.useState();
   const[clicked,setClicked]=React.useState(false);
   const [user, setUser] = React.useState();
   const { usersService } = useServices();




  React.useEffect(()=>{
    setIsLoading(true);
    usersService
    .getAllUsers()
    .then(({ data }) => setUsers(data))
    .finally(() => setIsLoading(false));

    
  },[])
  const handleClick = React.useCallback(() => {
    setClicked(true);
    useHistory.push(ROUTER.NAVBAR)

  }, []);



  React.useEffect(() => {
    if (age) {
      getUsersByAge(setUser, setIsLoading, age);
    }
  }, [age]);


  const handleFilteredData = React.useMemo(() => {
    let aged = [];
    if (users) {
      aged = users;
    }
    if (clicked) {
      aged = aged.filter((item) => Number(item.age) > 20);
    }
    return aged;
  }, [users, clicked]);

  return (
    <div>
      <button onClick={handleClick}>Get data</button>
      {age && (
        <h2>
          {user?.name} - {user?.age}
        </h2>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        handleFilteredData.map(({ name, id,age }) => (
          <h1 key={id} onClick={() => setAge(age)}>
            {id} - {name}-{age}
          </h1>
        ))
      )}
    </div>
  )
}

export default Users