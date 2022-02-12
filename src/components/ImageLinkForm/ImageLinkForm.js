import React from 'react';

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
    return(
        <div>
            <p className="f3">
                {'This MB finds faces in your picture))'}
            </p>
            <div>
                <input className="f4 br4 pa2 w-70 center" type="tex" placeholder = 'Put a link to your picture' onChange={onInputChange}/>
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
                onClick={onButtonSubmit}
                >
                    Detect
                </button>
            </div>
        </div>
    );
}
export default ImageLinkForm;