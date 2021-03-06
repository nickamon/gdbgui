import SourceCode from './SourceCode.jsx';
import React from 'react';


class FileLink extends React.Component {
    render(){
        let line = parseInt(this.props.line)
        let onclick = null
        , cls = ''
        if (!this.props.file || !line){
            line = ''
        }
        let sep = ''
        if(line && line !== 0){
            sep = ':'
        }
        if(this.props.fullname){
            onclick = ()=>SourceCode.view_file(this.props.fullname, line)
            cls = 'pointer'
        }
        return (<span onClick={onclick} className={cls} title={`click to view ${this.props.fullname}`}>
                    {this.props.file}{sep}{line}
                </span>)
    }
}

class FrameLink extends React.Component {
    render(){
        return (
            <div>
                <FileLink fullname={this.props.fullname} file={this.props.file} line={this.props.line} />
                <span style={{'whiteSpace': 'pre'}}> </span>
                <MemoryLink addr={this.props.addr} />
            </div>
        )
    }
}


module.exports = {
    FileLink: FileLink,
    FrameLink: FrameLink,
}
