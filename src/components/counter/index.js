import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
class Counter extends React.Component {
    state = {
        title: "Counter",
        counter: 0
    };

    incrementCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    };

    decrementCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    };

    render() {
        return (
            <section className="section">
                <span className="container">
                    <span>
                        <span className="product-remove" onClick={this.incrementCounter}>
                            <AiOutlinePlusCircle />
                        </span>

                        <span className="p-3">
                            {this.state.counter}
                        </span>

                        <span className="product-remove" onClick={this.decrementCounter}>
                            <AiOutlineMinusCircle />
                        </span>

                    </span>
                </span>
            </section>
        );
    }
}
export default Counter;