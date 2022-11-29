import React from 'react';
import ReactViewAdobe from 'react-adobe-embed';
import PreviewFileConfig from 'react-adobe-embed/types/@types/PreviewFIleConfig';

export const Part1 = () => {

    const configs: Partial<PreviewFileConfig> = {
        defaultViewMode: 'FIT_PAGE'
    }
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
        
              previewConfig={
            configs}

               config= {
                {
                    divId: 'dna-part-1',
                    clientId: 'YOUR_CLIENT',
                    url: 'https://storage.googleapis.com/awslegal/notarized/23andMe%20Ancestry%20Book%20-%20Part%201%20of%202_encrypted_.pdf'
                }
               }
            
        />
        
        </div>
    )
}

export default Part1;