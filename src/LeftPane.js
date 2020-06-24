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
            <div className="common name">{profileDetails.name}</div>
            <div className="common id">{profileDetails.login}</div>
            <div className="common bio">{profileDetails.bio}</div>
            <div className="common comp">{profileDetails.company}</div>
            <div className="common loc">{profileDetails.location}</div>
        </div>
    )
}

export default LeftPane