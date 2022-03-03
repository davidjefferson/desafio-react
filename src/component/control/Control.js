import { Component } from "react";

export class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClickControl = value => {
        this.setState({
            open: value
        });
    }

    handleChangeControl = (value, attribute, onChange) => {
        this.handleClickControl(false);
        onChange && onChange(attribute, value);
    }

    render() {
        const { name, label, data, attribute, state, onChange } = this.props;
        const { open } = this.state;
        const className = open ? 'open' : '';

        return (
            <div key={name} className={`control-group ${className}`}>
                <div onClick={() => this.handleClickControl(true)}>
                    <label className="pe-1" htmlFor={name}>{label}:</label>
                    <label>
                        <strong>{(state && state.Name) || 'Todas'}</strong>
                    </label>

                    {data && <span className="arrow"></span>}
                </div>
                
                <div onClick={() => this.handleClickControl(false)} className="drop-combo-list"></div>
                
                {data && <ul className="control-list" id={name}>
                    <li key={-1}><a>Todas</a></li>
                    
                    { data.map((option, index) => <li key={index}>
                        <a onClick={() => this.handleChangeControl(option, attribute, onChange)}>{option.Name}</a>
                        </li>) }
                </ul>}
            </div>
        );
    }
};