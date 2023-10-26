import React from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Textbox.css';

const Textbox = () => {
  return (    
    <div className='container'>

<div className='text-center'> {/* Added text-center class here */}
        <h1 className="pb-2 border-bottom">Contact Us</h1>
      </div>
   

      <div className='row justify-content-center'>
        <div className='mt-3 col-md-6'>
         

          <form>
            <MDBInput
              id='form4Example1'
              wrapperClass='mb-4'
              placeholder='Name'
              inputClassName='custom-input'
            />
            <MDBInput
              type='email'
              id='form4Example2'
              wrapperClass='mb-4'
              placeholder='Email address'
              inputClassName='custom-input'
            />
            <MDBInput
              wrapperClass='mb-4'
              textarea
              id='form4Example3'
              rows={4}
              placeholder='Message'
              inputClassName='custom-input'
            />

            <MDBBtn type='submit' className='mb-4' block>
              Send
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Textbox;
