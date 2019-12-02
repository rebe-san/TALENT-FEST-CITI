import React, {Fragment} from 'react';
import SignatureCanvas from 'react-signature-canvas';

import './style.css'

const Signature = () => (
    <Fragment>
        <div className="signature-box">
            <SignatureCanvas penColor='black'
            canvasProps={{width: 300, height: 300, className: 'sigCanvas'}} />
        </div>
        <p>Firma</p>
        
    </Fragment>
)

export default Signature;