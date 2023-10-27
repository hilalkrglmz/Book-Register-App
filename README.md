

https://github.com/hilalkrglmz/Book-Register-App/assets/140657703/8a876122-4438-4181-a130-8d81036f5320




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1> Book-registering project using React & Javascript </h1>
    </header>
    <div class="container">
        <h2>About Project</h2>
            <ul>
                <li>HTML</li>
                <li>REACT</li>
                <li>JAVA SCRIPT</li>
                <li>BOOTSTRAP</li>
            </ul>
            <h2>SETUP and USE</h2>
        <ol>
            <li>Clone the project on your computer: <code>git clone https://github.com/hilalkrglmz/Book-Register-App/edit/main</code></li>
            <li>Go to the project folder: <code>cd Book-Register-App</code></li>
            <li>Open the project in your browser: <code>index.html</code></li>
        </ol>
    </div>
</body>
</html>









<h1>CRUD App</h1>
<p>Create Read Update Delete</p>
<p>Oluştur Oku Düzenle Sil</p>

<ul>
    <li>Projeye bootstrap i dahil et
        Index.html e bootstrap cdni ekle.
    </li>
    <li>
        1.Yeni eklenecek elemanı almak için form oluştur:
        Form içinden gelen verileri al ve state a aktar
        Ekle butonuna basıldığı anda forma girilen bilgilerle beraber yeni obje oluştur
        OLuşturulan objenin değerleri tarih, kitapIsmi,id ve okunduMu olsun
        Oluşan bu objeyi de kitaplar isimli diziye aktar
        obje oluştuktan sonra da inputu sıfırla
    </li>
    <li>
        2.Books stateinde tutulan kitapları al ve map methodu ile listele.(Ekrana bas)
        >Eğer state boşsa ekrana "Henüz bir kitap eklemediniz yaz"
        > BookCard bileşenine kitap bilgilerini prop olarak gönder
        > BookCard bileşeninde kitapla ilgili bilgileri gönder
    </li>
    <li>
        3.Kitap Silme: 
        > Herhangi bir kitabın sil butonuna basıldığında çalışan function a 
        silinecek olanın id si gitsin.
        > Gelen id yi function a parametre olarak al.
        > Silinecek id ye eşit olmayan objeleri al ve bir diziye aktar.
        > bu diziyi de state e aktar.
    </li>
    <li>
        4.Kitabı Okundu olarak işaretle:
        > Dizi içinde değişecek elemanı bul 
        > kitabın isRead değerini tersine çevir 
        > dizi içerisinde değişecek olan elemanı bul.
        > isRead değerini tersine çevir
        > o elemanı çıkar ve yerine yenisini ekle.
    </li>

    <li>
        5.Düzenleme işlemini yap:
        > Düzenle butonuna tıkladığında ekrana modal çıksın.
        > Düzenlecek kitabı app.js e aktarsın
        > Modalda Kitap ismini değiştirmek için bir input
        > Input her değiştiğinde editItem değişkenini günceller ve app.js e aktarır.
        > Vazgeç butonu > modal ı kapatır
        > Kaydet butonu > input içeriğini alır ve state i günceller
        > Çalışan fonksiyonu diziden eski elemanı çıkarıp güncellenen elemanı ekler.
    </li>
</ul># Book-Register-App
