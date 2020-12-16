import React from 'react';

export default class ImageUploader extends React.Component{

    state = {
      selectedFile: null,
      fileUrl: null,
    };

    onFileChange = event => {
      this.setState({
        selectedFile: event.target.files[0],
        fileUrl: URL.createObjectURL(event.target.files[0])
     });
    };

    onFileUpload = () => {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append(
        "imgFile2",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      formData.append('name', 'steve')


      // Details of the uploaded file
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      //axios.post("api/uploadfile", formData);
    };

    render(){
        return (
            <div>
                <h1>Image Uploader</h1>
                <input type='file' onChange={this.onFileChange}/>
                <img src={this.state.fileUrl}/>
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
        )
    }
}