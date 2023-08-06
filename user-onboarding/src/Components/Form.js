import React from 'react';
 const Form = (props) => {
    const {change, submit, errors} = props;
    const {username, email, password, tos} = props.values;

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newVal = type ==='checkbox' ? checked: value;
        change(name, newVal);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return (
        <div>
            <h1>MyCool Form</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>    
             <form onSubmit={onSubmit}>
                <label> name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange} 
                    />
                </label>
                <label>email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}  
                    />
                </label>
                <label>password:
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>terms of serice:
                    <input 
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />

                </label>
                <input type="submit" value="create a friend"/>
                
        </form>
        </div>
    )
 }

 export default Form