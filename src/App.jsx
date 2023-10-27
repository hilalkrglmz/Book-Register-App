import { useState } from "react";
import BookCard from "./Components/BookCard";
import {toast} from "react-toastify" 
import EditModal from "./Components/EditModal";



function App() {
const [bookname,setBookName] = useState("");
const [books,setBooks] = useState([]);
const [showConfirm,setShowConfirm] = useState(false);
const [deleteId, setDeletedId]= useState(null);
const [showEditModal, setShowEditModal] = useState(false);
const [editedItem,setEditedItem] = useState(null)


//todo:EKLE butonuna basıldığında çalışır.
const handleSubmit = (e) => {
  e.preventDefault();

  if(!bookname) {
  //*bildirim ver    
    toast.warning('Lütfen bir kitap ismi giriniz',{autoClose:1500})
//*function ı durdurma
    return;
  }

  //todo: Kitap için gerekli bilgileri içeren obje oluştur
  const newBook = {
    date: new Date().toLocaleString(), 
    title: bookname,
    id:new Date().getTime() ,
    isRead: false,
  };

  //todo: Oluşturulan her bir kitabı kitaplar dizisine ekle.
  //bunu yaparken de spread operatörü kullanırız.
  setBooks([...books, newBook]);

  //todo:Eleman eklendiğinde inputu sıfırla

  setBookName('')

  //todo: bildirim ver
  toast.success("Bu kitap başarıyla eklendi", {autoClose:2000})

};

//modal ı aç kapa
const handleModal = (id) => {
  
  setDeletedId(id);

  setShowConfirm(true);
}


//todo:sil butonuna basıldığında çalışacak
const handleDelete = (deletingId) =>{
  //alert(id) --> id doğru gidiyor mu kontrol ettik.

  //todo:Silinecek id ye eşit olmayanları ayrı bir diziye aktar
  const filtered= books.filter((item) => item.id !== deletingId);

  //todo:Oluşan yeni diziyi de state e aktar. 
  setBooks(filtered)

  //bildirim ver:

  toast.error("Bu kitap silindi", {autoClose:2000})
}

//todo:Okundu butonuna basınca çalışır

const handleRead = (book) => {

const upDatedBook = {...book, isRead: !book.isRead }
  
 //*dizinin bir kopyasını olştur.
  const cloneBooks = [...books]

  //*dizideki elemanın indeksini bul

  const index = cloneBooks.findIndex((item) => item.id === book.id)


  cloneBooks.splice(index, 1, upDatedBook); //silinecek değerin indeksi, kaç eleman silinecek, silinecek eleman yerine ne koyacağız?)

  setBooks(cloneBooks);

  console.log(books)

  //*

}

//Düzenleme sonrası kitabı günceller
const handleEditBook = () => {

  //todo:Değişecek elemanın dizideki sırasını bulur.

  const editBookIndex= books.findIndex((book) => book.id ===editedItem.id)

  //todo: kitaplar dizisinin clone unu oluşturma.

  const cloneBooks = [...books]

  //todo: önceki kitabı çıkar düzenlenmiş kitabı diziye ekle.

  cloneBooks.splice(editBookIndex,1,editedItem)

  //todo:State i güncelle

  setBooks(cloneBooks);

  //todo: bildirim ver
  toast.success("Kitap başarıyla güncellendi", {autoClose:2000,theme:'colored'})

  //todo: Modal ı kapat
  setShowEditModal(false)

}

  return ( 
    <div>
      <div className="bg-dark text-light px-5 py-2 fs-5 text-center">Kitap Kurdu</div>

      <div className="container border">
         {/* FORM */}

        <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4 shadow">
          <input value={bookname} onChange={(e) => setBookName(e.target.value)} className="form-control" type="text" />
          <button className="btn btn-warning shadow">EKLE</button>
        </form>

        <div className="d-flex flex-column gap-3 py-5">
          {/* Eğer state içi boşsa bunu yaz */}

          {books.length === 0 && (
            <h4 className="bg-white rounded-pill p-2 text-muted">Henüz bir kitap eklemediniz!</h4>
          )}

          {/* Eğer state içinde eleman varsa onları listele */}
          
          {books.map((book) => 
          <BookCard 
          key={book.id} 
          book={book} 
          handleModal={handleModal} 
          handleRead={handleRead}
          setShowEditModal={setShowEditModal}
          setEditedItem={setEditedItem}
          />
          )}


        </div>

      </div>

      {/* Modal ı tanımlar */}

      {showConfirm && (
        <div className="confirm-modal">
          <div className="modal-inner">
          <h5>Silmek istediğinize emin misiniz?</h5>
          <button className="btn btn-warning" onClick={() => setShowConfirm(false)}>Vazgeç</button>
          <button className="btn btn-danger" onClick={() => {
            handleDelete(deleteId)
            setShowConfirm(false)}}>Onayla</button>
        </div>
        </div>
      )}
       
     {/* Düzenleme modalı */}

     {showEditModal && 
     <EditModal 
     setShowEditModal={setShowEditModal}
     setEditedItem={setEditedItem}
     editedItem={editedItem}
     handleEditBook={handleEditBook}
     /> }


      </div>
  )
}

export default App;
