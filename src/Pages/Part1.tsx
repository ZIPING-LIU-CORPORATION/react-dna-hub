import React from 'react';
import ReactViewAdobe from 'react-adobe-embed';

export const Part1 = () => {
    return(
        <div   
        className="reactView"
        style={{
                position: 'absolute',
                border: 'none',
                width: '100%',
                height: '100%',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }}>


        <ReactViewAdobe 
        
            previewConfig={{
                defaultViewMode: 'FIT_PAGE',
            }}
            config={
                
                {
                  clientId: "627b951122de46fc88412e09c54af25d",
                  divId: 'ancestry-pdf',
                  url: 'https://storage.googleapis.com/awslegal/notarized/23andMe%20Ancestry%20Book%20-%20Part%201%20of%202_encrypted_.pdf',
                  fileMeta: {
                    fileName: '23andMe_Ancestry_Book.pdf',
                  }
                }
            }
        />
        
        </div>
    )
}

export default Part1;