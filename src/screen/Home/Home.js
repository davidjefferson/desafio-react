import { Component } from 'react';

import logo from '../../img/png/logo.png';
import carro from '../../img/svg/carro.svg';
import moto from '../../img/svg/moto.svg';
import { Tabs, Tab } from '../../component/tab';
import Form from './partial/Form';
import Result from './partial/Result';

import '../../style/tab.css';
import { Loading } from '../../component/loading/Loading';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            result: [],
            makes: [],
            models: [],
            versions: []
        }
    }

    setPropety = (state, result) => {
        this.setState({
            [state]: result
        });
    }

    render() {

        return (
            <div className="app">
                <div className="app-container">
                    <header>
                        <img src={logo} width="200" alt="Logo Desafio" />
                    </header>

                    <section>
                        <Tabs className="tabs-search">
                            <Tab label={'CARROS'} small={'COMPRAR'} image={carro} className={'tab-custom-class'}>
                                <span></span>
                            </Tab>
                            <Tab label={'MOTOS'} small={'COMPRAR'} image={moto} className={'tab-custom-class'}>
                                <span></span>
                            </Tab>
                        </Tabs>

                        <Form setPropety={this.setPropety} />

                        {this.state.loading && <Loading />}
                        {!this.state.loading && <Result result={this.state.result} />}

                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
