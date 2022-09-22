import React from 'react';
import ReactDOM from 'react-dom';
import profileImg from './profile.jpg';
import postImg from './postImg.jpg';
import quote from './quote.jpg';
import natureImg from './natureImg.png';
import web from './web.webp'
import './style.css'


function Post({ profile, name, date, text, imageUrl ,like , comment , share}) {
   return <div className='main'>
      <div className='body'>
         <div className='head'>
            <img className='profile' src={profile} alt="" />
            <span className='profilename'> <p className='name'>{name} </p>  {date}  </span>
         </div>
         <p className='text'>
            {text}

         </p>
         <img className='post' src={imageUrl} alt="" />
         

         <p className='interaction'> <span>{like}</span>  <span>{comment}</span>  <span>{share}</span> </p>
         <p className='buttons'>
        
          <button >Like</button> <button>Comment</button> <button>Share </button> 
         </p>
      </div>
   </div>
}

ReactDOM.render(
 <>

<Post
   profile={profileImg}
   name="Maham Babar"
   date={"8 sept 2022"}
   text="LEARNING is a treasure that will follow its own Everywhere.."
   imageUrl={quote}
   like = {"600 likes"}
   comment = {"200 comments"}
   share = {"350 shares"}
   

/>
<Post
   profile={profileImg}
   name="Maham Babar"
   date={"7 sept 2022"}
   text="SUCCEED "
   imageUrl={postImg}
   like = {"1000 likes"}
   comment = {"450 comments"}
   share = {"300 shares"}

/>

<Post
   profile={profileImg}
   name="Maham Babar"
   date={"6 sept 2022"}
   text="Change Yourself Not the Nature"
   imageUrl={natureImg}
   like = {"2.9k likes"}
   comment = {"900k comments"}
   share = {"40k shares"}
/>
<Post
   profile={profileImg}
   name="Maham Babar"
   date={"6 sept 2022"}
   text="Web Developer..."
   imageUrl={web}
   like = {"2.9k likes"}
   comment = {"900k comments"}
   share = {"40k shares"}
/>
</>
, document.querySelector("#root"));