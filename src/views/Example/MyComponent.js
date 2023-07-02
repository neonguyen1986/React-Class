import React from 'react';

class MyComponent extends React.Component { //extend nghĩa là kế thừa từ React.
    state = {
        name: 'Minh Nguyen',
        job: 'trader'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert("You've just Clicked")
    }
    render() {   //hàm render luôn phải có trong Class
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                    {/* this là class; sau đó ta gọi state; name */}
                </div>
                <div className='second'>
                    my job is {this.state['job']}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;
// default chỉ trả 1 class
// khi muốn trả nhiều class ta dùng "export {}"