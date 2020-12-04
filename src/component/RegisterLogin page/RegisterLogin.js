import React , { useState } from "react";
import { useEffect } from "react";

//Form Validation Library
import { useForm} from "react-hook-form";
import isEmail from "validator/lib/isEmail";

//css
import styles from './RegisterLogin.module.css'

// Icons form React-icons
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';

const stylesNode = {
  container: {
    width: "100%",
    margin: "0 auto",
  },
  input: {
    width: "30vw",
    height: "2rem",
    padding:"1rem"
  },
};
// var dataListObj = {};




export default function RegisterForm() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });
  
  // hooks 
  // const [userList, setUserList] = useState([]);
  // const [userListObj, setUserListObj] = useState({});

  function onSubmit(data) {
    if ((localStorage.getItem(data.username))) {

      alert('You already have an account ')
     }
    
    else {
      
      if ((JSON.stringify(data.password) === JSON.stringify(data.confirm))) {
              
        window.localStorage.setItem(data.username, JSON.stringify(data))
        console.log(data);
        alert('the account was created')
         
        }
        else {
        alert('the password unmatched ')
        }
     }
    
}

  
  return (
    <div className={styles.formContainer} style={stylesNode.container}>
      <div className={styles.formContainerItems} >
        <div className={styles.sps}>
          <div>          
            <h4>Sign Up </h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <AiOutlineUser/>
            <input
            name="username"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.username && "red" }}
            placeholder="Username"
            />
            </div>
            
            <div>
            <HiOutlineMail/>
            <input
            name="email"
            ref={register({
              required: true,
              validate: (input) => isEmail(input),
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.email && "red" }}
            placeholder="Email"
            />
            </div>
            <div>
            <RiLockPasswordLine/>
            <input
            name="password"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.password && "red" }}
            placeholder="Password"
            />
            </div>
            <div>
            <RiLockPasswordLine/>
            <input
            name="confirm"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.password && "red" }}
            placeholder="Confirm password"
            />
            </div>
            <div>
            <FiPhone/>
            <input
                name="phone"
                type="tel"
            ref={register({
              required: true,
              minLength: 10,
              pattern: /^([0][7|8|9][0-9]{8})$/g
            })}
            style={{ ...stylesNode.input, borderColor: errors.phone && "red" }}
            placeholder="Phone"
            />
            </div>
            <div >
            <button className={styles.formBtn} type="submit" disabled={formState.isSubmitting}>
            Submit
            </button>
            </div>
          </form>
        </div>
      </div>
      
      </div>
        );
}
      
// <div>
//           {JSON.parse(localStorage.getItem('0771234567'))}
//         </div>

 // if (!(userList.map(obj => obj.phone).includes(data.phone))) {
        
        //   // setUserList([...userList, data]);
        //   // setUserListObj(userList);
          
        //   // useEffect((userListObj) => {
        //   //   console.log(userList);
        //   // },[]);
          
        //   // console.log(userListObj);
        //   // console.log(userList);
        //   console.log(data);
        // }
        // else {
        //   console.log('error repeat');
          
        // }

         // useEffect(() => {
      //   setUserList([...userList, data]);
      //   console.log(userList);
      // });
      
      // setUserList([...userList, data]);