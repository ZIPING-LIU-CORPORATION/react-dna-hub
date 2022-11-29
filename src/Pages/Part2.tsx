import React from 'react';
import ReactViewAdobe from 'react-adobe-embed';
import './part.css';


export const Part2 = () => {
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
            config={
                
                {
                  clientId: window.location.href.includes('localhost') ? 'c514163c351b4f2082ef01e530840e0b' : "627b951122de46fc88412e09c54af25d",
                  divId: 'ancestry-pdf-part-two',
                  url: 'https://storage.googleapis.com/awslegal/notarized/23andMe%20Ancestry%20Book%20-%20Part%202%20of%202_encrypted_.pdf',
          
                }
            }
        />
        
        </div>
    )
}

export default Part2;