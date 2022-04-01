import React from "react"

  export default function Form(props) {
      const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label> First Name
                    <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={onChange}
                    />
                </label>
                <label> Last Name
                    <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                    />
                </label>
                <label> Email
                    <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label> Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="frontendEngineer">frontend engineer</option>
                        <option value="backendEngineer">backend engineer</option>
                        <option value="designer">designer</option>
                        <option value="wizard">wizard</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                 </div>
            </div>
        </form>
    )



  }