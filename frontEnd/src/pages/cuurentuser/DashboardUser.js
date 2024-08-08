import React from 'react'
import preson from '../../assets/icons/avatar.webp'

import { useAuthContext } from "../../hooks/useAuthContext";
import NbdaysBox from './profileComponents/nb_days';
import MyCalendar from './profileComponents/nb_requests';
import { useLeavesContext } from '../../hooks/useLeavesContext';
import UserCard from './profileComponents/userCard';
import Table from './profileComponents/table';


export const UserDashboard = () => {
  const { user } = useAuthContext();
  const { leaves } = useLeavesContext();


 
  // Transform leave objects into an array of date ranges
  const highlightedRanges = leaves?.map(leave => ({
    start: new Date(leave.startDate),
    end: new Date(leave.finishDate),
    status: leave.statut,
  }));

  const formatMonthName = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};



  return (
    <div className='flex flex-wrap gap-4'>
    <div className="flex flex-row w-full gap-4">
      <UserCard />
      <Table formatDate={formatMonthName} />
      
    </div>
  <div className='flex flex-row gap-4'>
  <NbdaysBox nbDays={user.nb_days}/>
  <MyCalendar highlightedRanges={highlightedRanges} />
  </div>
  </div>
  )
}