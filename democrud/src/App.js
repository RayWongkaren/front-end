import React, { useEffect, useState } from 'react';
import './FirebaseFirestore.css';
import { database } from './config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function App() {
	const [authorName, setAuthorName] = useState('');
	const [description, setDescription] = useState('');
	const [title, setTitle] = useState('');
	const [id, setId] = useState('');
	const [show, setShow] = useState(false);
	const [val, setVal] = useState([]);
	const value = collection(database, 'library');
	useEffect(() => {
	const getData = async () => {
		const dbVal = await getDocs(value);
		setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};
	getData();
	}, [value]);
  const handleCreate = async () => {
	  await addDoc(value, { data1: authorName, data2: description , data3: title });
	  setAuthorName('');
	  setDescription('');
	  setTitle('');
	  getData();
  };
  const handleDelete = async (id) => {
	  const deleteVal = doc(database, 'library', id);
	  await deleteDoc(deleteVal);
	  getData();
  };
  const handleEdit = async (id, data1, data2, data3) => {
	  setAuthorName(data1);
	  setDescription(data2);
	  setTitle(data3);
	  setId(id);
	  setShow(true);
  };
  const handleUpdate = async () => {
	  const updateData = doc(database, 'library', id);
	  await updateDoc(updateData, { data1: authorName, data2: description , data3: title});
	  setShow(false);
	  setAuthorName('');
	  setDescription('');
	  setTitle('');
	  getData();
  };
  const getData = async () => {
	  const dbVal = await getDocs(value);
	  setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
	<div className="container">
	  <strong>Input Data Library:</strong><br/>
	  <input value={authorName} placeholder="Enter Author" onChange={(e) => setAuthorName(e.target.value)} />
	  <input value={description} placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
	  <input value={title} placeholder="Enter Title Book" onChange={(e) => setTitle(e.target.value)} />
	  {!show ? (
		<button onClick={handleCreate}>Input Book</button>
	  ) : (
		<button onClick={handleUpdate}>Update Book</button>
	  )}
	  <table>
		<thead>
		  <tr>
			<th>Author Name</th>
			<th>Book Description</th>
			<th>Title Book</th>
			<th className="action-col">Action</th>
		  </tr>
		</thead>
		<tbody>
		  {val.map((values) => (
			<tr key={values.id}>
			  <td>{values.data1}</td>
			  <td>{values.data2}</td>
			  <td>{values.data3}</td>
			  <td>
				<button className="edit-btn" onClick={() => handleEdit(values.id, values.data1, values.data2, values.data3)}>
				Edit
				</button>
				<button className="delete-btn" onClick={() => handleDelete(values.id)}>Delete</button>
			  </td>
			</tr>
		  ))}
		</tbody>
	  </table>
	</div>
  );
}

export default App;
