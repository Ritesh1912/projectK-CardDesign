import React, {useState, useEffect} from 'react';
import './Card.css';


function Card() {

  const [user,setUser] = useState([]);

  const fetchData = ()=>{

     try {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        .then((response) =>{
          return response.json();
      }).then((data)=>{
          let res =  data.results
          console.log(res);
          setUser(res)
      })
      } catch(error) {
          console.log(error);
      }   
   }


  useEffect(()=>{
      fetchData();
  },[])


  return (
        
        <>       
        {
           user.map(data => (
           <div className='main-portion card'>
            <div className='small-portion'>

             <div className='first_portion'>
               <div className='inside-portion'>
                  <img src={data.picture.large} alt=''/>
               </div>  
             </div> 

             <div className='second-portion'>
               <div className='name-portion'> 
                 <p> {data.name.first +
                      " " +
                      data.name.last}</p>
                 <p>{data.gender}</p> 
                 <p>{data.phone}</p>
               </div>   
             </div> 
             
             </div> 
            </div>  
          ))
        }
     
        </>
    );
}

export default Card;