import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {getDefectTask, addDefectTask} from "../../actions/defectTaskActions";

 class UpdateDefectTask extends Component{

constructor(){
    super();
    this.state={
             id:"",
             description:"",
             severity:"" ,
             priority:"",
             defectType:"",
             enteredBy:"",
             assignedTo:"",
             enteredDate:"",
             fixedDate:""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}    


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
    }
const{ id,projectName} = nextProps.project_task;

this.setState({
    id,
    projectName
});

}

componentDidMount(){
    const {pt_id} = this.props.match.params;
    this.props.getDefectTask(pt_id);
}

onSubmit(e){
e.preventDefault()
const updatedTask = {
        id:this.state.id,
        projectName:this.state.projectName
        
};

this.props.addProjectTask(updatedTask, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        const {errors}= this.state;
        return(
<div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/" className="btn btn-light">
                        Back to Board
                </Link>
                    <h4 className="display-4 text-center">Update Defect Task</h4>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <input type="text" 
                            
                            className="form-control form-control-lg"          
                            placeholder="Defect ID" disabled                          
                            />
                           
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Module Name" 
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            />
                          
                        </div>


                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="severity" 
                             name="severity"
                             value={this.state.severity}
                             onChange={this.onChange}
                             >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="priority" 
                             name="priority"
                             value={this.state.priority}
                             onChange={this.onChange}
                             >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="defectType" 
                             name="defectType"
                             value={this.state.defectType}
                             onChange={this.onChange}
                             >
                                <option value="UI">UI</option>
                                <option value="Functionality">Functionality</option>
                                <option value="Enhancement">Enhancement</option>
                                <option value="Performance">Performance</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="enteredBy" 
                             name="enteredBy"
                             value={this.state.enteredBy}
                             onChange={this.onChange}
                             >
                                <option value="name1">Mathu</option>
                                <option value="name2">Pinky</option>
                                <option value="name3">Thamy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="assignedTo" 
                             name="assignedTo"
                             value={this.state.assignedTo}
                             onChange={this.onChange}
                             >
                                <option value="name1">Mathu</option>
                                <option value="name2">Pinky</option>
                                <option value="name3">Thamy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="enteredDate" 
                            name="enteredDate"
                            value={this.state.enteredDate}
                            onChange={this.onChange}
                            />
                          
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="fixedDate" 
                            name="fixedDate"
                            value={this.state.fixedDate}
                            onChange={this.onChange}
                            />
                          
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        )
    }
}


UpdateDefectTask.propTypes={
    defect_task:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    getDefectTask:PropTypes.func.isRequired,
    addDefectTask:PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    defect_task:state.defect_task.defect_task,
    errors:state.errors
});

export default connect(
    mapStateToProps,
     {getDefectTask, addDefectTask}
     ) (UpdateDefectTask);
