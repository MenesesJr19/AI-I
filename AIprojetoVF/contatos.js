// JavaScript source code
"use strict";

class ExampleForm extends React.Component {
    constructor() {
        super();
        this.state = {
            valorNome: window.localStorage.getItem("valorNome") || "",
            isActive: false,
            valorMotivo: window.localStorage.getItem("valorMotivo") || "reclamacao",
            valorEmail: window.localStorage.getItem("valorEmail") || "",
            valorTel: window.localStorage.getItem("valorTel") || "",
            valorMsg: window.localStorage.getItem("valorMsg") || "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const storage = window.localStorage;
        storage.setItem("valorNome", this.state.valorNome);
        storage.setItem("valorEmail", this.state.valorEmail);
        storage.setItem("valorTel", this.state.valorTel);
        storage.setItem("valorMotivo", this.state.valorMotivo);
        storage.setItem("valorMsg", this.state.valorMsg);
    }
    handleChange(event) {
        const obj = {};
        obj[event.target.id] = event.target.value;
        this.setState(obj);
    }
    render() {
        return React.createElement(
            "div",
            null,
            this.state.isActive
                ? React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit, className: "form--contacto" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, "Nome"),
                        React.createElement("input", {
                            className: "form-control",
                            type: "text",
                            required: "required",
                            id: "valorNome",
                            value: this.state.valorNome,
                            onChange: this.handleChange,
                        })
                    ),

                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, "Motivo de Contacto"),
                        React.createElement(
                            "select",
                            {
                                className: "form-control",
                                required: "required",
                                id: "valorMotivo",
                                value: this.state.valorMotivo,
                                onChange: this.handleChange,
                            },
                            React.createElement(
                                "option",
                                { value: "reclamacao" },
                                "Reclamacao"
                            ),
                            React.createElement(
                                "option",
                                { value: "informacao" },
                                "Informacao"
                            ),
                            React.createElement(
                                "option",
                                { value: "outro" },
                                "Outro"
                            )
                        )
                    ),

                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, "Email"),
                        React.createElement("input", {
                            className: "form-control",
                            type: "email",
                            required: "required",
                            id: "valorEmail",
                            value: this.state.valorEmail,
                            onChange: this.handleChange,
                        })
                    ),

                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, "N Telefone"),
                        React.createElement("input", {
                            className: "form-control",
                            type: "tel",
                            required: "required",
                            id: "valorTel",
                            value: this.state.valorTel,
                            onChange: this.handleChange,
                        })
                    ),
                   
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("label", null, "Corpo da mensagem"),
                        React.createElement("textarea", {
                            className: "form-control",
                            maxLength: 10000,
                            required: "required",
                            id: "valorMsg",
                            value: this.state.valorMsg,
                            onChange: this.handleChange,
                        })
                    ),

                    React.createElement("input", {
                        className: "btn btn-primary",
                        type: "submit",
                        value: "Enviar",
                    })
                )
                : null,

            React.createElement(
                "button",
                {
                    onClick: (event) => {
                        this.setState({ isActive: !this.state.isActive });
                    },
                },
                !this.state.isActive ? "Abrir Contactos" : "Fechar Contactos"
            )
        );
    }
}

ReactDOM.render(
    React.createElement(ExampleForm),
    document.getElementById("form")
);
