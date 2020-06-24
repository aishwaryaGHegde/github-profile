import React, {useState, useEffect} from 'react';

const typeFilter = ['all', 'soruces', 'fork', 'archived', 'mirror']
const langFilter = ['all']

function RightPane() {
    const [repoDetails, setRepoDetails] = useState([]);
    const [optionsVal, setOptionsVal] = useState("");
    useEffect(() => {
        fetch("https://api.github.com/users/supreetsingh247/repos")
          .then(res => res.json())
          .then(det => setRepoDetails(det));
      }, [])
    return (
        <div>
            <input placeholder="Find a Repository..."></input>
            <select name='type' value={setOptionsVal}>
                {typeFilter.map(filter => {
                return <option value={filter} key={filter}>{filter}</option>
                })}
            </select>
            <select name='lang'>
                {langFilter.map(filter => {
                return <option value={filter} key={filter}>{filter}</option>
                })}
            </select>
            {
                repoDetails.map((repo, index) => {
                return <div className="repoName" key={index}>{repo.name}</div>
                })
            }
        </div>
    )
}

export default RightPane;