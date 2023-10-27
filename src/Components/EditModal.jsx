const EditModal = ({setShowEditModal,setEditedItem, editedItem,handleEditBook}) =>{
    

    return(
        <div className="confirm-modal">

        <div className="modal-inner">
            <h5>Kitap İsmini Düzenle</h5>
            <input type="text" value={editedItem.title}
            className="form-control shadow"
            onChange={(e)=> 
            setEditedItem({...editedItem, 
            title:e.target.value,
            date: new Date().toLocaleString()})}/>
            <div className="d-flex justify-content-around mt-4">
                <button className="btn btn-success"
                onClick={handleEditBook}>Kaydet</button>
                <button className="btn btn-warning" onClick={() => setShowEditModal(false)}>Vazgeç</button>
            </div>
        </div>

        </div>
    )
}

export default EditModal;