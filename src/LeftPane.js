import React, {useState, useEffect} from 'react';

function LeftPane() {
    const [profileDetails, setProfileDetails] = useState({});
    useEffect(() => {
        fetch("https://api.github.com/users/supreetsingh247")
          .then(response => response.json())
          .then(data => setProfileDetails(data));
      }, [])
    return (
        <div className="leftPane">
            <img src={profileDetails.avatar_url} alt="profile"></img>
            <div className="name">{profileDetails.name}</div>
            <div className="id">{profileDetails.login}</div>
            <div className="bio">{profileDetails.bio}</div>
            <div className="comp">{profileDetails.company}</div>
            <div className="loc">{profileDetails.location}</div>
        </div>
    )
}

export default LeftPane