var konten =[{
    foto:'img/fotomen.jpg',
    judul:'POLO',
    harga:'$34',
},{
    foto:'img/fotomen2.jpg',
    judul:'ADIDAS',
    harga:'$36',
},{
    foto:'img/fotome3.jpg',
    judul:'POLO',
    harga:'$34',
},{
    foto:'img/fotomen.jpg',
    judul:'POLO',
    harga:'$34',
}]

for (var i =0;i<konten.length;i++){

    var isi =`
    <div class="col-md-3">
						<div class="card">
							<img src="${konten[i].foto}" alt="card-1" class="card-img-top">
								<div class="card-body">
								<h5>${konten[i].judul}</h5>
								<h6>${konten[i].harga}</h6>
								<button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
								</div>
						</div>
    </div>`

    
  $('#output').append(isi)
}