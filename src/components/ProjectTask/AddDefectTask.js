import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
 import {addDefectTask} from "../../actions/defectTaskActions";
 
 class AddDefectTask extends Component{
     constructor(){
         super();
         this.state={
             description:"",
             mId:"",
             severity:"" ,
             priority:"",
             defectType:"",
             enteredBy:"",
             assignedTo:"",
             enteredDate:"",
             fixedDate:""
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }

     componentWillReceiveProps(nextProps){
if(nextProps.errors){
    this.setState({errors:nextProps.errors})
}
     }

onChange(e){
this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault();
    const newProjectTask={
        description:this.state.description,
        severity:this.state.severity,
        priority:this.state.priority,
        defectType:this.state.defectType,
        enteredBy:this.state.enteredBy,
        assignedTo:this.state.assignedTo,
        enteredDate:this.state.enteredDate,
        fixedDate:this.state.fixedDate
       
       

    };
    console.log(newProjectTask);
    this.props.addDefectTask(newProjectTask, this.props.history)
}

    render(){
        const{errors}=this.state;
        return(
<div className="addDefectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/moduleBoard" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add Module Task</h4>
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

AddDefectTask.propTypes={
    addDefectTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addDefectTask }) (AddDefectTask);