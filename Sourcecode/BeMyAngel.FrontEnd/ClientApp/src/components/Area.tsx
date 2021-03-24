import React, { Component } from "react";

export default class Area extends Component {
    props: AreaProps;

    constructor(props: AreaProps){
        super(props); 
        this.props = props;
    }

    public getPath(path: string){
        if(path == this.props.path)
            return path
        else if(this.props.path == "/")
            return path
        else if(path == "/")
            return this.props.path
        else
            return this.props.path + path
    }

    render(){
        return <></>
    }
};

interface AreaProps {
    path: string
}