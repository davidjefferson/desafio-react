import { cloneElement, Component } from "react";

export class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.defaultActiveIndex || 0
        };
    }

    handleTabClick = (tabIndex) => {
        if (tabIndex !== this.state.activeIndex) {
            this.setState({ activeIndex: tabIndex });
        }
    }

    cloneTabElement = (tab, index = 0) => {
        const { activeIndex } = this.state;

        return (
            cloneElement(tab, {
                onClick: () => this.handleTabClick(index),
                key: index,
                tabIndex: index,
                isActive: index === activeIndex
            })
        );
    }

    renderChildrenTabs = () => {
        const { children } = this.props;

        if (!Array.isArray(children)) {
            return this.cloneTabElement(children);
        }

        return children.map(this.cloneTabElement);
    }

    renderActiveTabContent = () => {
        const { children } = this.props;
        const { activeIndex } = this.state;

        if (children[activeIndex]) {
            return children[activeIndex].props.children;
        }

        return children.props.children;
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`tabs ${className}`}>
                <ul className={'tabs-header'}>
                    {this.renderChildrenTabs()}
                </ul>
                <div className={'tabs-content'}>
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
};