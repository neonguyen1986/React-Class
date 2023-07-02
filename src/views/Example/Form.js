import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent';

class Form extends React.Component { //extend nghĩa là kế thừa từ React.
    state = {
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '700' },
            { id: 'job3', title: 'Project manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('dad ', job)
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)
        this.setState({
            arrJobs: currentJobs,
        })

        ////==Cách ngắn hơn nhiều, chỉ cần setState
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job] //Giải thích: [...oldArray, new element ]
        //
        // })

    }

    removeJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs.splice(currentJobs.indexOf(job), 1)

        // currentJobs = currentJobs.filter(item => item.id !== job.id)

        // lấy những item nào, mà id của item đó khác job.id
        this.setState({

            arrJobs: currentJobs
        })

    }

    render() {   //hàm render luôn phải có trong Class

        console.log('===', this.state)
        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}//khi truyền function có biến bên trong đừng ghi ()
                />
                <ChildComponent
                    jobs={this.state.arrJobs}
                    removeJob={this.removeJob} />
            </>
        )
    }
}

export default Form;
// default chỉ trả 1 class
// khi muốn trả nhiều class ta dùng "export {}"