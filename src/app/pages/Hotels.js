import React, { useState, useEffect } from "react";
import CustomCard from "../../components/Card/CustomCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import hotelRooms from "../../data/properties.json";

const Hotels = ({ rooms }) => {
  if(!rooms.length) {
    return (
      <div className="container-fluid mx-auto my-5 py-3 text-muted d-4 text-center">
      No Data Found!
      </div>
    )
  }
  return (
    <div className="container-fluid d-flex justify-content-center my-md-3 pb-3">
    <div className="row mx-md-5 d-flex justify-content-center col-12">
    {rooms.map(room => <div key={room.id} className="col-md-3 col-sm my-4"><CustomCard room={room}/></div>)}
    </div>
    </div>
  )
}

const HotelsGrid = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(()=> {
    setRooms(hotelRooms);
  },[])
return (
  <>
  <SearchBar rooms={hotelRooms} setRooms={setRooms} searchKeys={["name","description"]} />
  <Hotels rooms={rooms} />
  </>
)
}
export default HotelsGrid;