import React, { Component } from 'react';

class ImageChoose extends Component {

    getUploadedFile=e=>{
        //we have to resize the user uploaded image here
        const userFile=e.target.files[0]
        userFile.urls={regular:URL.createObjectURL(userFile),
            thumb:URL.createObjectURL(userFile)}
        userFile.userUploaded=true
        
        this.props.selectImage(userFile)
    }
    render() {
        return <div>
            
            <input
            ref={r => this.uploader = r}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={this.getUploadedFile}   />
        
        </div>
    }
}

export default ImageChoose;