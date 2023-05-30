import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ReactDOM from 'react-dom/client';
import getId from '../util';
import {ReactViewAdobe} from 'react-adobe-embed';
import './part.css';


export default function Part2 () {
    return(
        <div   
        className="reactable-viewer col-10"
        style={{
          position: 'absolute',
          border: 'none',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0}}>


        <ReactViewAdobe 
                     
            className="react-wrapper AdobeReactView ViewSDK_parentRelativeHeight ViewSDK_hideOverflow"

            previewConfig={{
              defaultViewMode: 'FIT_PAGE',
              showAnnotationTools: true,
              showLeftHandPanel: true,
            }}
          
                  clientId ={getId()}
                  id= 'ancestry-pdf-part-two'
                  url= 'https://storage.googleapis.com/laotzu/awslegal/notarized/23andMe%20Ancestry%20Book%20-%20Part%202%20of%202_encrypted_.pdf'
          
                
            
        />
        
        </div>
    )
}

