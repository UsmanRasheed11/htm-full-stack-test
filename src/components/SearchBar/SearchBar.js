import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = ({rooms, setRooms, searchKeys}) => {
  const [searchText, setSearchText] = useState('');
  const trimString = (s) => {
    var l=0, r=s.length -1;
    while(l < s.length && s[l] === ' ') l++;
    while(r > l && s[r] === ' ') r-=1;
    return s.substring(l, r+1);
  }
  const compareObjects = (o1, o2) => {
    var k = '';
    for(k in o1) if(o1[k] !== o2[k]) return false;
    for(k in o2) if(o1[k] !== o2[k]) return false;
    return true;
  }
  const itemExists = (haystack, needle) => {
    for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
  }
  const searchFor = (toSearch) => {
    if(toSearch === '') {
      setRooms(rooms)
    }
    var results = [];
    toSearch = trimString(toSearch); // trim it
    for(var i=0; i<rooms.length; i++) {
      for(var key in searchKeys) {
        if(rooms[i][searchKeys[key]].indexOf(toSearch)!==-1) {
          if(!itemExists(results, rooms[i])) results.push(rooms[i]);
        }
      }
    }
    setRooms(results)
  }
  
  return(
    <div className="container-fluid mx-auto my-5 py-3 text-muted d-4 text-center bg-dark">
    <h1 className="text-white pt-5">Check Availability and Book Now</h1>
	  <div className="col-md-4 col-sm-8 mx-auto py-5">
   <div className="search">
      <input type="text" value={searchText} className="searchTerm text-dark" placeholder="What are you looking for?" onChange={(e) => {
        setSearchText(e.target.value)
        searchFor(e.target.value)
        }} />
      <button type="button" className="searchButton" onClick={()=> searchFor(searchText)}>
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>
	</div>
  )
}
export default SearchBar;