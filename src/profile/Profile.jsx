import React from 'react';

const Profile = ({fullName = "A", bio, profession, handleName, children }) => {
    return <div>
        Name: {fullName}
        <br />
        Bio: {bio}
        <br />
        Profession: {profession}
        <br />
        {children}
        <br/>
        <button onClick={() => handleName(fullName)}>Alert</button>
    </div>
}

export default Profile;