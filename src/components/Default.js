import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Erro</h1>
                        <h1 className="display-3">404</h1>
                        <h2>A página não está funcionando</h2>
                        <h3>A URL solicitada 
                            <span className="text-danger">
                              {this.props.location.pathname}
                            </span>{""}
                            não foi encontrada</h3>
                    </div>
                </div>
            </div>
        )
    }
}
