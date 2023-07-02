import React from 'react';

class ChildComponent extends React.Component { //extend nghĩa là kế thừa từ React.
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickRemove = (job) => {
        this.props.removeJob(job)
    }

    render() {   //hàm render luôn phải có trong Class
        let { name, lName, jobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                <div>
                    this is child: {name} {lName}
                </div>
                {!showJobs ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    ://if showJobs= true then...
                    <>
                        <div className="job-list">
                            {
                                jobs.map((item, index) => {

                                    return (
                                        <div key={item.id}>
                                            {item.title}-${item.salary}
                                            <button onClick={() => this.handleOnClickRemove(item)}>Remove</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

//=============Stateless with Function===============
// const ChildComponent = (props) => {
//     let { name, lName, jobs } = props;
//     return (
//         <>
//             <div>
//                 this is child: {name} {lName}
//             </div>
//             <div className="job-list">
//                 {
//                     jobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;
// default chỉ trả 1 class
// khi muốn trả nhiều class ta dùng "export {}"