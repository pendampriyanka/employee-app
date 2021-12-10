 import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Data = (props) => {

  const {state, setState} = props;

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [empId,setEmpId] = useState('');

  const [modalForm, setModalForm] = useState(false);

  

  const submit = (e) => {
      e.preventDefault();
      setState([...state, name, email, empId]);
      setModalForm(false);
  }



return(

    <div>
        <button onClick={() => setModalForm(true)}>Click</button>

        {modalForm && <Modal isOpen>

            <ModalHeader>New Employee</ModalHeader>

            <ModalBody>

                <form onSubmit={submit}>
                    <label>Name :</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 
                    <label>Email :</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>EmpId :</label>
                    <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)}/>  

                    <input type="submit" />
                </form>
                
            </ModalBody>
            
        </Modal>}
    </div>
    )
}
export default Data;
