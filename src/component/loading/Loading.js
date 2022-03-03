import { Component } from "react";

export class Loading extends Component {
    render() {
        return (
            <div className="lds-ring-container flex-row justify-content-center p-5">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
};