import React, {useState} from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
    
    const[message, setMessage] = useState('');
    const[attention, setAttention] = useState(false);
    const[tech, setTech] = useState('');


    const onSubmit = () =>{
        if( message === '' || tech === '' ){
            M.toast({html:'Please enter a message and tech'})
        }else{
            console.log(attention,message,tech);
            setMessage('');
            setTech('');
            setAttention(false);
        }
        
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <input type='text' name='message' value={message} onChange={e =>setMessage(e.target.value)}/>
                    <label htmlFor="message" className='active'>Log Message</label>
                </div>
                <div className="row">
                    <select type='select' name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                        <option value="" disable>Select Technician</option>
                        <option value='John Doe'>John Doe</option>
                        <option value='Sam Doe'>Sam Doe</option>
                        <option value='Jennifer Doe'>Jennifer Doe</option>
                        <option value='Laura Doe'>Laura Doe</option>
                    </select>
                    <label htmlFor="message" className='active'>Log Message</label>
                </div>
                <div className='row'>
                    <div className='input-field'>
                    <p>
                        <label>
                            <input type="checkbox" class="filled-in" checked={attention} onChange={e => setAttention(!attention)} />
                             <span>Filled in</span>
                        </label>
                    </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='#!' onClick={onSubmit} className='modal-close  blue waves-effect waves-light btn'>
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}   

export default AddLogModal
