import { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div className="result">
                {this.props.result && this.props.result.map((result, index) => 
                    <div key={index} className="card-result my-2">
                        <div className="row">
                            <div className="col-3 card-result-img">
                                <img src={result.Image} alt="Imagem do veículo" />
                            </div>
                            <div className="col ps-4 card-result-text">
                                <dl className="grid-dl">
                                    <dt>Marca:</dt>
                                    <dd>{result.Make}</dd>

                                    <dt>Modelo:</dt>
                                    <dd>{result.Model}</dd>

                                    <dt>Versão:</dt>
                                    <dd>{result.Version}</dd>
                                    
                                    <dt>Cor:</dt>
                                    <dd>{result.Color}</dd>

                                    <dt>Preço:</dt>
                                    <dd>R$ {result.Price}</dd>
                                    
                                    <dt>Ano:</dt>
                                    <dd>{result.YearFab}/{result.YearModel}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Result;
