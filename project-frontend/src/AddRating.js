import React from "react";

function AddRating({handleSubmit, setNewRating}) {

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Add Rating: 
            <input className="add-rating" type="number" id="rating" name="rating" min="1" max="10" placeholder="1" onChange={(e) => setNewRating(e.target.value)}></input>
                /10  
                <span> </span>
            <input className="add-rating-submit" type="submit" value="Submit" />
            </label>
        </form>
    </div>
)
    
}


export default AddRating;