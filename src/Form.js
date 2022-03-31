import React from "react"

  export default function Form(props) {
      const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
    }

    return (
        <form>
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
                        <option value="Student">frontend engineer</option>
                        <option value="Instructor">backend engineer</option>
                        <option value="Alumni">desinger</option>
                        <option value="Alumni">wizard</option>
                    </select>
                </label>
            </div>
        </form>
    )



  }