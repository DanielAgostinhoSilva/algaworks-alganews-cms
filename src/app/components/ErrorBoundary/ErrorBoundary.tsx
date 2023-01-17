import {Component, PropsWithChildren} from "react";
import ErrorDisplay from "../ErrorDisplay/ErrorDiplay";
import {transparentize} from "polished";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Props = PropsWithChildren<{

}>

interface State {
    hasError: boolean;
    error?: {
        message?: string
    }
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error: {
                message: error.message
            }
        }
    }

    public render () {
        if (this.state.hasError) {
            return <div
                style={{
                    padding: 24,
                    border: '1px solid ' + transparentize(0.9, '#274060')
                }}
            >
                <ErrorDisplay
                    message={this.state.error?.message}
                />
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;