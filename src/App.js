import React, {useState} from 'react'

function App() {
    const [formData, setFormData] = useState({
        username: "Loc",
        email: "westudymore@gmail.com",
        language: "VN",
        isGoing: false
    })

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate username
        const isUsernameValid = 
            formData.username === formData.username.toLowerCase();
        
        // if(!isUsernameValid) {
        //     setError("Username must be lowercase");
        // } else{
        //     setError("");
        // }
        
        setError(!isUsernameValid ? "Username must be lowercase" : "");
    }

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        
        if(field === "username") {
            const isUsernameValid = value === formData.username.toLowerCase();
            setError(!isUsernameValid ? "Username must be lowercase" : "");
        }

       
        setFormData({...formData,  [field]: value})
        // console.log(formData)
    }

  return (
    <div>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input value={formData.username} onChange={handleInputChange} id="username" name="username" type="text" autoComplete="off" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleInputChange} id="email" name="email" type="text" autoComplete="off" />
            </div>
            <div>
                <label>Language 
                    <select name="language" value={formData.language} onChange={handleInputChange}>
                        <option value="VN">VN</option>
                        <option value="EN">EN</option>
                        <option value="DE">DE</option>
                    </select>
                </label>
            </div>

            <div>
                <label> 
                    Is going?
                    <input id="isGoing" name="isGoing" type="checkbox" checked={formData.isGoing} onChange={handleInputChange}    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App