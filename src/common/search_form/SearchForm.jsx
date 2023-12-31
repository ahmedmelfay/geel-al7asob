import React, { useState } from 'react';
const SearchForm = (props) => {

	const formName = props.name;
	const formRole = props.role;
	const formId =  props.id;
	const formClassName = props.className;
	
	var [name, setName] = useState("");
	
	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The value you entered was: ${name}`)
	}
	
	return(
		<>
			<form onSubmit={handleSubmit} name={formName} role={formRole} id={formId} className={formClassName}>			
			  <div className="input-group">
					<input className="form-control" value={name} name="q" onChange={(e) => setName(e.target.value)} type="search" placeholder="Type to search"/>
					<span className="input-group-append">
						<button type="submit" className="search-btn">
								<i className="fa fa-search"></i>
						</button>
					</span>
				</div>   			  
			</form>			 
		</>
    )
}
  SearchForm.defaultProps = {
    formName: "defaultForm",
    formRole: "default",
	formId: "",
	formClassName: ""
  }
export default SearchForm;