import React, { Component, ErrorInfo } from 'react';

type Props = {
    children: React.ReactNode
}

type State = {
    error: Error | null,
    errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render(): React.ReactNode {
        if (this.state.error) {
            return (
                <>
                    <h2>Something went wrong.</h2>
                    <p>{this.state.error.toString()}</p>
                    <p>{this.state.errorInfo ? this.state.errorInfo.componentStack : ''}</p>
                </>
            );
        }
        return this.props.children;
    }
}
