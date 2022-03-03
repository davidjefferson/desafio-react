import { Component } from 'react';
import axios from 'axios';

import { Control } from '../../../component/control/Control';
import { PATHAPI, RAIOS, FAIXAS, ANOS, CIDADES } from '../../../constant';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            search: {
                Make: null,
                Model: null,
                Version: null,
                Radius: null,
                Faixa: null,
                Ano: null,
                Cidade: null
            },
            makes: [],
            models: [],
            versions: []
        }
    }

    componentDidMount() {
        this.getList('Make', 'makes');
    }

    onChangeHandler = (field, value) => {
        this.setState({
            search: {
                ...this.state.search,
                [field]: value
            }
        });
    }

    onChangeHandlerMake = (field, value) => {
        this.onChangeHandler(field, value);
        this.getList(`Model?MakeID=${value.ID}`, 'models');
    }

    onChangeHandlerModels = (field, value) => {
        this.onChangeHandler(field, value);
        this.getList(`Version?ModelID=${value.ID}`, 'versions');
    }

    onSubmit = event => {
        event.preventDefault();
        const { search } = this.state;
        this.props.setPropety('loading', true);

        const sp = new URLSearchParams();
        sp.append('Page', 1);
        search.Make && sp.append('MakeID', search.Make.ID);
        search.Model && sp.append('ModelID', search.Model.ID);
        search.Version && sp.append('VersionID', search.Model.ID);
        search.Ano && sp.append('YearModel', search.Ano.ID);
        const params = sp.toString();

        axios.get(`${PATHAPI}/Vehicles?${params}`)
            .then(res => {
                this.props.setPropety('result', res.data);
                this.props.setPropety('loading', false);
            });
    }

    clearForm = event => {
        event.preventDefault();
        this.setState({
            search: {}
        });
    }

    getList(url, state) {
        axios.get(`${PATHAPI}/${url}`)
            .then(res => {
                this.setState({ [state]: res.data });
            });
    }

    render() {
        return (
            <div className="card-form">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="row">
                            <div className="col my-2 flex-row">
                                <div className="me-3">
                                    <input type="checkbox" name="Novos" value="novos" id="novos" defaultChecked={true} />
                                    <label htmlFor="novos" className="ps-1">Novos</label>
                                </div>

                                <div>
                                    <input type="checkbox" name="Usados" value="usados" id="usados" defaultChecked={true} />
                                    <label htmlFor="usados" className="ps-1">Usados</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="control-group-input flex-row">
                                    <Control name="cidade" label="Onde" attribute="Cidade" state={this.state.search.Cidade}
                                        data={CIDADES} onChange={this.onChangeHandler} />
                                    <Control name="raio" label="Raio" attribute="Radius" state={this.state.search.Radius}
                                        data={RAIOS} onChange={this.onChangeHandler} />
                                </div>
                            </div>
                            <div className="col">
                                <Control name="marca" label="Marca" attribute="Make" state={this.state.search.Make}
                                    data={this.state.makes} onChange={this.onChangeHandlerMake} />
                            </div>
                            <div className="col">
                                <Control name="modelo" label="Modelo" attribute="Model" state={this.state.search.Model}
                                    data={this.state.models} onChange={this.onChangeHandlerModels} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Control name="ano" label="Ano desejado" attribute="Ano" state={this.state.search.Ano}
                                    data={ANOS} onChange={this.onChangeHandler} />
                            </div>
                            <div className="col">
                                <Control name="faixa" label="Faixa de Preço" attribute="Faixa" state={this.state.search.Faixa}
                                    data={FAIXAS} onChange={this.onChangeHandler} />
                            </div>
                            <div className="col-6">
                                <Control name="versao" label="Versão" attribute="Version" state={this.state.search.Version}
                                    data={this.state.versions} onChange={this.onChangeHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col aling-items-center">
                                <a>
                                    &#8250; Busca avançada
                                </a>
                            </div>
                            <div className="col aling-items-center justify-content-end pe-3">
                                <a onClick={this.clearForm}>
                                    Limpar filtros
                                </a>
                            </div>
                            <div className="col col-button">
                                <button className="btn btn-primary" type="submit" >VER OFERTAS</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
