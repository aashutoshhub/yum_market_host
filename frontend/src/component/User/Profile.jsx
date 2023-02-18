import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import {useSelector} from 'react-redux';
import Loader from '../layout/Loader/Loader';
import './Profile.css';

function Profile() {

    const navigate=useNavigate();

    const {  loading, isAuthenticated,user } = useSelector(
        (state) => state.users
      );


      useEffect(()=>{
          if(isAuthenticated === false ){
            navigate("/login");
          }
          
      },[isAuthenticated,navigate])
      

  return (
    <>
       {loading ? <Loader/> : (
        <> 
        <MetaData title={`${user.user.name}'s Profile`}/>
        <div className="profileContainer">
            <div>
                <h1>My Profile</h1>
                <img src={user.user.avatar.url} alt={user.user.name} />
                <Link to="/update">Edit Profile</Link>
            </div>
            <div>


                <div>
                    <h4>Full Name</h4>
                     <p>{user.user.name}</p>
                </div>


                <div>
                    <h4>Email</h4>
                     <p>{user.user.email}</p>
                </div>


                <div>
                    <h4>Joined On</h4>
                     <p>{String(user.user.createdAt).substring(0,10)}</p>
                </div>


                <div>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/password/update">Change Password</Link>
                </div>


            </div>
        </div>
        </>
       )}
    </>
  )
}

export default Profile;
