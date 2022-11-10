import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';

const LeaveReview = () => {

    const [ leaveRate, setLeaveRate ] = useState(0);
    const leaveName = useRef('');
    const leaveMessage = useRef('');

    const handleLeaveReview = (event) => {
      event.preventDefault();

      const newLeaveName = leaveName.current.value;
      const newLeaveMessage = leaveMessage.current.value;

      const objectLeaveReview = {
        userName: newLeaveName,
        text: newLeaveMessage,
        leaveRate,
      };

      toast.success('Your Rating has been Reviewed');

      console.log('====================================');
      console.log(newLeaveName);
      console.log('====================================');
      console.log(leaveRate);
      console.log('====================================');
      console.log(newLeaveMessage);
      console.log('====================================');
      console.log(objectLeaveReview);
      console.log('====================================');
    }

  return (
    <form className='leave-review' onSubmit={handleLeaveReview}>
        <h5>Leave Your Review</h5>
        <input placeholder='Leave Your Name' ref={leaveName} required/>
        <ul>
            <li onClick={()=> setLeaveRate(1)}>1 <i className="fa-solid fa-star"></i></li>
            <li onClick={()=> setLeaveRate(2)}>2 <i className="fa-solid fa-star"></i></li>
            <li onClick={()=> setLeaveRate(3)}>3 <i className="fa-solid fa-star"></i></li>
            <li onClick={()=> setLeaveRate(4)}>4 <i className="fa-solid fa-star"></i></li>
            <li onClick={()=> setLeaveRate(5)}>5 <i className="fa-solid fa-star"></i></li>
        </ul>
        <textarea placeholder='Leave Your Review' ref={leaveMessage} required></textarea>
        <button type='submit' className="btn btn-3">submit</button>
    </form>
  )
}

export default LeaveReview