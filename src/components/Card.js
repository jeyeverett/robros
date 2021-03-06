import React from 'react'; //Because we are writing JSX, we always need to import react in these files

//Below we use the functional way of building a component instead of class-based
//Note that we can only return ONE element, i.e. everything needs to be inside of one parent element - this used to mean we put everything in a div, but now we can use <React.Fragment></React.Fragment> or just <></>
//Note that we can destructure props inside the function parameter field i.e. {name, email, id} in the parameter field is equivalent to const {name, email, id} = props;
const Card = ({name, email, id}) => { 
    return (
        <div className='bg-green dib br3 pa4 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=200x200&set=set3`} alt='RoBro' width="200" height="200" />
            <div>
                <h2 className='ttu white f4'>{name}</h2>
                <p className='ttu white i'>{email}</p>
            </div>
        </div>
    )
}

export default Card;